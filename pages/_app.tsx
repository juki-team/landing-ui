import { Analytics } from '@vercel/analytics/react';
import { JukiUIProvider, JukiUserProvider } from 'components';
import { JUKI_SERVICE_BASE_URL, JUKI_TOKEN_NAME } from 'config/constants';
import { useSearchParams } from 'hooks';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { ImageCmpProps } from 'types';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    document.querySelector('body')?.classList.add('jk-theme-light');
  }, []);
  
  const { searchParams, appendSearchParams, deleteSearchParams, setSearchParams } = useSearchParams();
  
  return (
    <JukiUIProvider
      components={{ Image: Image as FC<ImageCmpProps>, Link: Link }}
      router={{ searchParams, setSearchParams, deleteSearchParams, appendSearchParams }}
    >
      <JukiUserProvider
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
      </JukiUserProvider>
    </JukiUIProvider>
  );
}
