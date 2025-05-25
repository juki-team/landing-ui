'use client';

import { Analytics } from '@vercel/analytics/react';
import {
  ErrorBoundary,
  Image,
  JukiProviders,
  JukiSocketAlert,
  NewVersionAvailable,
  SubmissionModal,
  T,
  UserPreviewModal,
} from 'components';
import { jukiApiSocketManager } from 'config';
import {
  JUKI_APP_COMPANY_KEY,
  JUKI_SERVICE_V1_URL,
  JUKI_SERVICE_V2_URL,
  JUKI_SOCKET_BASE_URL,
  JUKI_TOKEN_NAME,
  NODE_ENV,
} from 'config/constants';
import { useEffect, useJukiUI, usePreloadComponents, useUserStore } from 'hooks';
import { createInstance, i18n } from 'i18next';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { Children, PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';
import { NavigationBar } from '../components/NavigationBar';
import { useRouter } from '../hooks/useRouter';
import { useSearchParams } from '../hooks/useSearchParams';
import initTranslations from '../i18n/i18n';
import { LastPathKey } from '../types';

const i18nInstance = createInstance() as i18n;

void initTranslations(i18nInstance);

const SponsoredByTag = () => {
  
  const key = useUserStore(state => state.company.key);
  const { components: { Link } } = useJukiUI();
  
  if (key === JUKI_APP_COMPANY_KEY) {
    return null;
  }
  
  return (
    <div className="sponsored-by">
      <T>sponsored by</T>&nbsp;
      <Link href="https://juki.app" target="_blank" rel="noreferrer">Juki.app</Link>
    </div>
  );
};

const initialLastPath = {
  [LastPathKey.DOCS]: '/docs',
};

export const RootLayout = ({ children }: PropsWithChildren<{}>) => {
  
  useEffect(() => {
    jukiApiSocketManager.setApiSettings(JUKI_SERVICE_V1_URL, JUKI_SERVICE_V2_URL, JUKI_TOKEN_NAME);
    jukiApiSocketManager.setSocketSettings(JUKI_SOCKET_BASE_URL);
  }, []);
  
  const { isLoadingRoute, push, replace, refresh } = useRouter();
  const routeParams = useParams();
  const pathname = usePathname();
  const { searchParams, setSearchParams, deleteSearchParams, appendSearchParams } = useSearchParams();
  usePreloadComponents();
  
  const app = (
    <SWRConfig
      value={{
        revalidateIfStale: true, // when back to pages
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
      }}
    >
      <JukiProviders
        components={{ Image, Link }}
        router={{
          searchParams,
          setSearchParams,
          deleteSearchParams,
          appendSearchParams,
          pathname,
          routeParams,
          pushRoute: push,
          replaceRoute: replace,
          reloadRoute: refresh,
          isLoadingRoute,
        }}
        initialLastPath={initialLastPath}
      >
        <NavigationBar>
          {Children.toArray(children)}
        </NavigationBar>
        <SponsoredByTag />
        <JukiSocketAlert />
        <UserPreviewModal key="user-preview-modal" />
        <SubmissionModal key="submission-modal" />
        <NewVersionAvailable apiVersionUrl="/api/version" />
        <Analytics key="analytics" />
      </JukiProviders>
    </SWRConfig>
  );
  
  return NODE_ENV === 'development' ? app : <ErrorBoundary reload={refresh}>{app}</ErrorBoundary>;
};
