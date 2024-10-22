import { Analytics } from '@vercel/analytics/react';
import { JukiProviders, NewVersionAvailableTrigger, SpinIcon } from 'components';
import { JUKI_SERVICE_BASE_URL, JUKI_SOCKET_BASE_URL, JUKI_TOKEN_NAME } from 'config/constants';
import { useRouter, useSearchParams } from 'hooks';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { ImageCmpProps } from 'types';
import i18nInstance from '../i18n';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  
  // useEffect(() => {
  //   document.querySelector('body')?.classList.add('jk-theme-light');
  // }, []);
  
  const { searchParams, appendSearchParams, deleteSearchParams, setSearchParams } = useSearchParams();
  const { asPath, routerParams, push, replace, reload, isReady, isLoadingRoute } = useRouter();
  const pathname = asPath.split('?')[0];
  const [ mounted, setMounted ] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!isReady || !mounted) {
    return <div className="jk-col" style={{ height: 'var(--100VH)' }}><SpinIcon size="very-huge" /></div>;
  }
  
  return (
    <JukiProviders
      components={{ Image: Image as FC<ImageCmpProps>, Link: Link }}
      serviceApiUrl={JUKI_SERVICE_BASE_URL + '/api/v1'}
      utilsUiUrl="https://utils.juki.app"
      tokenName={JUKI_TOKEN_NAME}
      router={{
        searchParams,
        setSearchParams,
        deleteSearchParams,
        appendSearchParams,
        pathname,
        routeParams: routerParams,
        pushRoute: push,
        replaceRoute: replace,
        reloadRoute: reload,
        isLoadingRoute,
      }}
      socketServiceUrl={JUKI_SOCKET_BASE_URL}
      i18n={i18nInstance}
      initialLastPath={{}}
    >
      <div className="jk-app">
        <NewVersionAvailableTrigger apiVersionUrl="/api/version" />
        <Analytics />
        <Component {...pageProps} />
      </div>
    </JukiProviders>
  );
}
