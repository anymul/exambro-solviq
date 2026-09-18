// src/pages/DownloadRedirect.jsx
import { useEffect, useState } from 'react';
import icon from '../assets/icon.png';
import SEO from '../componenets/SEO';

const PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=com.solviq.prepone';

export default function DownloadRedirect() {
    const [showFallback, setShowFallback] = useState(false);

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.location.replace(PLAY_STORE_URL);
        }, 2000);
        const fallbackTimer = setTimeout(() => setShowFallback(true), 2000);

        return () => {
            clearTimeout(redirectTimer);
            clearTimeout(fallbackTimer);
        };
    }, []);

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

                <h1 style={styles.title}>Redirecting to Play Store</h1>
                <p style={styles.subtitle}>
                    Taking you to PrepOne on Google Play...
                </p>

                <div style={styles.spinnerWrap}>
                    <div style={styles.spinner} />
                </div>

                {showFallback && (
                    <a href={PLAY_STORE_URL} style={styles.fallbackButton}>
                        Tap here if you're not redirected
                    </a>
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
        display: 'inline-block',
        marginTop: '4px',
        padding: '12px 20px',
        background: '#5046E5',
        color: '#fff',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
        boxShadow: '0 4px 14px rgba(80,70,229,0.3)',
    },
};