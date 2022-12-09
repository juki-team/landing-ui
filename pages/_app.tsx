import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="jk-app">
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          const params = event.url.split('/');
          params[2] = 'app.juki-ui.com';
          event.url = params.join('/');
          return event;
        }}
      />
    </div>
  );
}
