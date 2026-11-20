'use client';

import { Analytics } from '@vercel/analytics/react';
import { ErrorBoundary, Image, JukiProviders, NewVersionAvailable, T } from 'components';
import { jukiAppRoutes } from 'config';
import { JUKI_APP_ORGANIZATION_KEY, NODE_ENV } from 'config/constants';
import { usePreloadComponents, useUIStore, useUserStore } from 'hooks';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { Children, PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';
import { NavigationBar } from '../components/NavigationBar';
import { useRouter } from '../hooks/useRouter';
import { useSearchParams } from '../hooks/useSearchParams';
import { LastPathKey } from '../types';

const SponsoredByTag = () => {
  
  const key = useUserStore(state => state.organization.key);
  const { components: { Link } } = useUIStore();
  
  if (key === JUKI_APP_ORGANIZATION_KEY) {
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
  
  const { isLoadingRoute, push, replace, refresh } = useRouter();
  const routeParams = useParams();
  const pathname = usePathname();
  const { searchParams, setSearchParams, deleteSearchParams, appendSearchParams } = useSearchParams();
  const preloaders = usePreloadComponents(5000);
  
  const loadingBasic = preloaders.atoms && preloaders.molecules && preloaders.organisms;
  
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
          isLoadingRoute: isLoadingRoute || !loadingBasic,
        }}
        initialLastPath={initialLastPath}
        multiOrganizations={false}
        onSeeMyProfile={(nickname, organizationKey) => push(jukiAppRoutes.JUDGE().profiles.view({ nickname, organizationKey }))}
      >
        <NavigationBar>
          {Children.toArray(children)}
        </NavigationBar>
        <SponsoredByTag />
        <Analytics />
        <NewVersionAvailable apiVersionUrl="/api/version" />
      </JukiProviders>
    </SWRConfig>
  );
  
  return NODE_ENV === 'development' ? app : <ErrorBoundary reload={refresh}>{app}</ErrorBoundary>;
};
