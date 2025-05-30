import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import ProgressBar from '@badrap/bar-of-progress';
import { useEffect, useState } from 'react';
import Router from 'next/router';

const progress = new ProgressBar({
  size: 3,
  color: '#DAA520',
  className: 'z-50 bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const MyApp = ({ Component, pageProps }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (hasSeenDisclaimer) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleCloseDisclaimer = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setShowDisclaimer(false);
  };

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {showDisclaimer && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                padding: '2rem',
                maxWidth: '600px',
                width: '90%',
                borderRadius: '10px',
                textAlign: 'center',
                fontFamily: 'sans-serif',
              }}
            >
              <h2 style={{ marginBottom: '1rem' }}>⚠️ Notice</h2>
              <p
                style={{
                  marginBottom: '1rem',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                }}
              >
                NOTE: This site is a clone website for portfolio purposes –
                <a
                  href="https://www.ritaguilherme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0070f3' }}
                >
                  www.ritaguilherme.com
                </a>
                . <br />
                <br />
                It is not the real, official site. Its purpose is to look like
                the official site for portfolio purposes. This site is not for
                active use. <strong>Do NOT</strong> enter your credentials or
                share any personal information.
              </p>
              <button
                onClick={handleCloseDisclaimer}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  border: 'none',
                  backgroundColor: '#DAA520',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                I Understand
              </button>
            </div>
          </div>
        )}
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
