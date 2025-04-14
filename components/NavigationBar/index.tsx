'use client';

import { Button, ExpandMoreIcon, FlagEnImage, FlagEsImage, Popover, T } from 'components';
import { useJukiUserSettings } from 'hooks';
import Image from 'next/image';
import { Language, ProfileSetting } from '../../types';
import { ProductsMenu } from '../ProductsMenu';

export function NavigationBar() {
  
  const { setSettings, preferredLanguage } = useJukiUserSettings();
  
  const isEs = preferredLanguage === Language.ES;
  
  return (
    <>
      <div
        className="jk-row extend jk-pad-sm cr-pd fw-bd bc-we elevation-1"
        // style={{ position: 'stick', top: 0, zIndex: 3 }}
      >
        <div className="jk-row pad-left-right cr-pd gap space-between tx-m">
          <Image src="https://images.juki.pub/c/juki-head.svg" alt="Juki Logo" height={60} width={60} />
          <div className="jk-pad-sm"></div>
          <Popover
            content={
              <ProductsMenu />
            }
            triggerOn="click"
            placement="bottom-start"
          >
            <div className="jk-row">
              <T>Products</T>
              <ExpandMoreIcon />
            </div>
          </Popover>
          <Button type="light"><T>news</T></Button>
          <Button type="light"><T>blog</T></Button>
          <Button type="light"><T>about us</T></Button>
        </div>
        <div className="jk-row pad-left-right space-between gap">
          <div
            className="jk-row"
            onClick={() => setSettings([
              {
                key: ProfileSetting.LANGUAGE,
                value: isEs ? Language.EN : Language.ES,
              },
            ])}
            style={{ cursor: 'pointer' }}
          >
            {!isEs
              ? <div className="jk-row" style={{ ...{ width: 24, height: 24 }, ...({ margin: '0 var(--pad-xt)' }) }}>
                <FlagEnImage />
              </div>
              : <div className="jk-row" style={{ ...{ width: 24, height: 24 }, ...({ margin: '0 var(--pad-xt)' }) }}>
                <FlagEsImage />
              </div>}
          </div>
          <Button className="bc-we cr-pd" style={{ textTransform: 'none' }}><T>Log in</T></Button>
          <Button className="bc-py" style={{ textTransform: 'none' }}><T>Sign up</T></Button>
        </div>
      </div>
    </>
  );
}
