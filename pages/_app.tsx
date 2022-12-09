import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="jk-app">
      <Component {...pageProps} />
      <Analytics beforeSend={(event) => {
        event.url = 'https://judge.juki-ui.com/test';
        return event;
      }} />
    </div>
  );
}
