// src/pages/DownloadRedirect.jsx
import { useEffect, useRef, useState } from 'react';
import icon from '../assets/icon.png';
import SEO from '../componenets/SEO';

const PACKAGE_ID = 'com.solviq.prepone';
const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_ID}`;

// Instagram / Facebook in-app browsers (Android + iOS).
const IN_APP_UA = /Instagram|FBAN|FBAV|FB_IAB|FBIOS/i;
const AUTO_REDIRECT_MS = 800;
// If the page is still visible this long after the redirect, the hand-off failed.
const STALL_CHECK_MS = 3500;
// After a tap, how long before a still-visible page counts as "that method didn't work".
const CLICK_STALL_MS = 3000;

function newClickId() {
    try {
        return crypto.randomUUID().replace(/-/g, '').slice(0, 24);
    } catch {
        return Math.random().toString(36).slice(2, 14) + Date.now().toString(36);
    }
}

// Play passes this string to the app's Install Referrer and groups Play Console reports by the utm_* keys.
function buildReferrer(params, clickId) {
    const fromMeta = params.has('fbclid');
    const ref = new URLSearchParams({
        utm_source: params.get('utm_source') || (fromMeta ? 'meta' : 'website'),
        utm_medium: params.get('utm_medium') || (fromMeta ? 'paid' : 'download_page'),
    });
    ['utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
        if (params.get(key)) ref.set(key, params.get(key).slice(0, 100));
    });
    ref.set('click_id', clickId);
    return ref.toString();
}

// Beacon to nginx (/t) plus GA. The page unloads on a successful redirect, so sendBeacon/keepalive is required.
function track(name, data) {
    const url = `/t?${new URLSearchParams({ e: name, ...data })}`;
    try {
        const sent = typeof navigator.sendBeacon === 'function' && navigator.sendBeacon(url);
        if (!sent) fetch(url, { method: 'POST', keepalive: true }).catch(() => {});
    } catch {
        // tracking must never break the redirect
    }
    try {
        window.gtag?.('event', `prepone_dl_${name}`, data);
    } catch {
        // gtag may be blocked
    }
}

export default function DownloadRedirect() {
    const [ctx, setCtx] = useState({
        env: 'other',
        inApp: false,
        ctaUrl: PLAY_STORE_URL,
        intentUrl: null,
        chromeUrl: null,
        trackData: {},
    });
    const [stalled, setStalled] = useState(false);
    const viewed = useRef(false);

    useEffect(() => {
        const ua = navigator.userAgent || '';
        const params = new URLSearchParams(window.location.search);
        const clickId = newClickId();
        const inApp = IN_APP_UA.test(ua);
        const env = /iPhone|iPad|iPod/i.test(ua) ? 'ios' : /Android/i.test(ua) ? 'android' : 'other';

        const referrer = encodeURIComponent(buildReferrer(params, clickId));
        const playUrl = `${PLAY_STORE_URL}&referrer=${referrer}`;
        // intent:// is unreliable inside Instagram's WebView, so these are only offered after the plain link stalls.
        const intentUrl =
            `intent://details?id=${PACKAGE_ID}&referrer=${referrer}` +
            `#Intent;scheme=market;package=com.android.vending;` +
            `S.browser_fallback_url=${encodeURIComponent(playUrl)};end`;
        const chromeUrl =
            `intent://${window.location.host}${window.location.pathname}${window.location.search}` +
            `#Intent;scheme=https;package=com.android.chrome;end`;

        const trackData = {
            cid: clickId,
            env,
            iab: inApp ? '1' : '0',
            camp: params.get('utm_campaign') || '',
        };

        // UA/URL are only known client-side; the prerendered HTML must match first paint, so set after mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCtx({
            env,
            inApp,
            ctaUrl: playUrl,
            intentUrl: env === 'android' && inApp ? intentUrl : null,
            chromeUrl: env === 'android' && inApp ? chromeUrl : null,
            trackData,
        });

        if (!viewed.current) {
            viewed.current = true;
            track('landing_view', trackData);
        }

        let left = false;
        const onLeave = () => {
            if (left || document.visibilityState === 'visible') return;
            left = true;
            track('left_page', trackData);
        };
        document.addEventListener('visibilitychange', onLeave);
        window.addEventListener('pagehide', onLeave);

        const timers = [];
        if (env === 'ios') {
            track('ios_blocked', trackData);
        } else {
            timers.push(
                setTimeout(() => {
                    track('redirect_attempt', trackData);
                    window.location.replace(playUrl);
                }, AUTO_REDIRECT_MS)
            );
            timers.push(
                setTimeout(() => {
                    if (document.visibilityState !== 'visible') return;
                    track('redirect_stalled', trackData);
                    setStalled(true);
                }, AUTO_REDIRECT_MS + STALL_CHECK_MS)
            );
        }

        return () => {
            timers.forEach(clearTimeout);
            document.removeEventListener('visibilitychange', onLeave);
            window.removeEventListener('pagehide', onLeave);
        };
    }, []);

    const isIOS = ctx.env === 'ios';
    const showInAppHelp = stalled && ctx.inApp && ctx.env === 'android';

    // Logs the tap, then checks whether the page is still here (= that method didn't hand off).
    const onTap = (name) => () => {
        track(name, ctx.trackData);
        setTimeout(() => {
            if (document.visibilityState === 'visible') track(`${name}_stalled`, ctx.trackData);
        }, CLICK_STALL_MS);
    };
    const title = isIOS
        ? 'PrepOne is on Android'
        : stalled
            ? 'Tap below to open Google Play'
            : 'Opening Google Play';
    const subtitle = isIOS
        ? 'The PrepOne app is available on Android for now. Open this link on an Android phone to install it.'
        : stalled
            ? "Your browser didn't open the Play Store automatically."
            : 'Taking you to PrepOne on Google Play...';

    return (
        <div style={styles.page}>
            <SEO
                title="Download PrepOne App | Google Play Store"
                description="Redirecting to download PrepOne app on Google Play Store."
                canonicalUrl="https://solviq.in/prepone/download"
                robots="noindex, follow"
            />
            <div style={styles.card}>
                <div style={styles.logoWrap}>
                    <div style={styles.logoCircle}><img src={icon} alt="" /></div>
                </div>

                <h1 style={styles.title}>{title}</h1>
                <p style={styles.subtitle}>{subtitle}</p>

                {!isIOS && !stalled && (
                    <div style={styles.spinnerWrap}>
                        <div style={styles.spinner} />
                    </div>
                )}

                {!isIOS && (
                    <a
                        href={ctx.ctaUrl}
                        style={styles.fallbackButton}
                        onClick={onTap('cta_click')}
                    >
                        Get it on Google Play
                    </a>
                )}

                {showInAppHelp && (
                    <>
                        <p style={styles.hint}>
                            Still stuck? Tap the <b>⋯</b> menu at the top right and choose
                            <b> Open in external browser</b>, or try one of these:
                        </p>
                        <a href={ctx.intentUrl} style={styles.secondaryButton} onClick={onTap('intent_click')}>
                            Open the Play Store app
                        </a>
                        <a href={ctx.chromeUrl} style={styles.secondaryButton} onClick={onTap('chrome_click')}>
                            Open in Chrome
                        </a>
                    </>
                )}
            </div>

            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

const styles = {
    page: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)',
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: '24px',
    },
    card: {
        background: '#ffffff',
        borderRadius: '24px',
        padding: '40px 32px',
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
    },
    logoWrap: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    logoCircle: {
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #818CF8, #5046E5)',
        color: '#fff',
        fontWeight: 700,
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '0.5px',
        boxShadow: '0 10px 25px rgba(80,70,229,0.35)',
    },
    title: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#0F172A',
        margin: '0 0 8px',
    },
    subtitle: {
        fontSize: '14px',
        color: '#64748B',
        margin: '0 0 24px',
        lineHeight: 1.5,
    },
    spinnerWrap: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    spinner: {
        width: '32px',
        height: '32px',
        border: '3px solid #EEF2FF',
        borderTopColor: '#5046E5',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
    },
    fallbackButton: {
        display: 'block',
        marginTop: '4px',
        padding: '14px 20px',
        background: '#5046E5',
        color: '#fff',
        borderRadius: '12px',
        fontSize: '15px',
        fontWeight: 600,
        textDecoration: 'none',
        boxShadow: '0 4px 14px rgba(80,70,229,0.3)',
    },
    hint: {
        fontSize: '13px',
        color: '#64748B',
        margin: '20px 0 4px',
        lineHeight: 1.5,
    },
    secondaryButton: {
        display: 'block',
        marginTop: '12px',
        padding: '12px 20px',
        background: '#EEF2FF',
        color: '#5046E5',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
    },
};
