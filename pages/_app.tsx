import { JukiBaseUiProvider } from '@juki-team/base-ui';
import { Analytics } from '@vercel/analytics/react';
import { JUKI_SERVICE_BASE_URL, JUKI_TOKEN_NAME } from 'config/constants/settings';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    document.querySelector('body')?.classList.add('jk-theme-light');
  }, []);
  
  return (
    <JukiBaseUiProvider
      utilsServiceUrl={JUKI_SERVICE_BASE_URL}
      utilsServiceApiVersion="api/v1"
      utilsUiUrl="https://utils.juki.app"
      tokenName={JUKI_TOKEN_NAME}
      utilsSocketServiceUrl={JUKI_SERVICE_BASE_URL}
    >
      <div className="jk-app">
        <Analytics />
        <Component {...pageProps} />
      </div>
    </JukiBaseUiProvider>
  );
}
