'use client';

import { ArticleIcon, ExpandMoreIcon, LinkLastPath, MainMenu, Popover, ProductsMenu, T } from 'components';
import { useJukiUI, useRouterStore, useUserStore } from 'hooks';
import { LastPathKey, MenuViewMode, ProfileSetting, PropsWithChildren, Theme } from 'types';

export const NavigationBar = ({ children }: PropsWithChildren<{}>) => {
  
  const pathname = useRouterStore(state => state.pathname);
  const userPreferredTheme = useUserStore(state => state.user.settings?.[ProfileSetting.THEME]);
  const { components: { Image, Link } } = useJukiUI();
  
  return (
    <>
      <MainMenu
        onSeeMyProfile={() => {
        }}
        menu={[
          {
            icon: null,
            label: <div className="jk-row fw-bd tx-m"><T>products</T><ExpandMoreIcon /></div>,
            selected: false,
            menuItemWrapper: ({ children }) => (
              <Popover
                content={<ProductsMenu />}
                placement="bottom-start"
                offset={4}
              >
                <div>{children}</div>
              </Popover>
            ),
          },
          {
            icon: <ArticleIcon />,
            label: <T>docs</T>,
            selected: ('/' + pathname).includes('//docs'),
            menuItemWrapper: ({ children }) => (
              <LinkLastPath lastPathKey={LastPathKey.DOCS}>
                {children}
              </LinkLastPath>
            ),
          },
          // {
          //   icon: <ArticleIcon />,
          //   label: <T>news</T>,
          //   selected: false,
          //   menuItemWrapper: ({ children }) => (
          //     <div className="cr-pd">{children}</div>
          //   ),
          // },
          // {
          //   icon: <ArticleIcon />,
          //   label: <T>blog</T>,
          //   selected: false,
          //   menuItemWrapper: ({ children }) => (
          //     <div className="cr-pd">{children}</div>
          //   ),
          // },
          // {
          //   icon: <ArticleIcon />,
          //   label: <T>about us</T>,
          //   selected: false,
          //   menuItemWrapper: ({ children }) => (
          //     <div className="cr-pd">{children}</div>
          //   ),
          // },
        ]}
        menuViewMode={MenuViewMode.HORIZONTAL}
        moreApps={
          <>
            <Link href="https://judge.juki.app">
              <div className="jk-row gap left">
                <Image
                  width={100}
                  height={50}
                  src={`https://images.juki.pub/assets/juki-judge-horizontal-${userPreferredTheme === Theme.DARK ? 'white' : 'color'}-logo.png`}
                  alt="juki judge"
                />
                <div className="link">judge.juki.app</div>
              </div>
            </Link>
            <Link href="https://utils.juki.app">
              <div className="jk-row gap left">
                <Image
                  width={100}
                  height={50}
                  src={`https://images.juki.pub/assets/juki-utils-horizontal-${userPreferredTheme === Theme.DARK ? 'white' : 'color'}-logo.png`}
                  alt="juki utils"
                />
                <div className="link">utils.juki.app</div>
              </div>
            </Link>
            <Link href="https://coach.juki.app">
              <div className="jk-row gap left">
                <Image
                  width={100}
                  height={50}
                  src={`https://images.juki.pub/assets/juki-coach-horizontal-${userPreferredTheme === Theme.DARK ? 'white' : 'color'}-logo.png`}
                  alt="juki coach"
                />
                <div className="jk-row nowrap" style={{ alignItems: 'baseline' }}>
                  <T className="link">coach.juki.app</T>
                </div>
              </div>
            </Link>
          </>
        }
      >
        {children}
      </MainMenu>
    </>
  );
};
