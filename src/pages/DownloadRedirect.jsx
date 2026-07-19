// src/pages/DownloadRedirect.jsx
import { useEffect, useState } from 'react';
import icon from '../assets/icon.png';

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
        background: 'linear-gradient(135deg, #6C5CE7 0%, #4834d4 100%)',
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: '24px',
    },
    card: {
        background: '#ffffff',
        borderRadius: '20px',
        padding: '40px 32px',
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
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
        background: 'linear-gradient(135deg, #6C5CE7, #4834d4)',
        color: '#fff',
        fontWeight: 700,
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '0.5px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#1a1a2e',
        margin: '0 0 8px',
    },
    subtitle: {
        fontSize: '14px',
        color: '#666',
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
        border: '3px solid #ece9fb',
        borderTopColor: '#6C5CE7',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
    },
    fallbackButton: {
        display: 'inline-block',
        marginTop: '4px',
        padding: '12px 20px',
        background: '#6C5CE7',
        color: '#fff',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
    },
};