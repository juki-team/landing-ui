'use client';

import { FacebookIcon, T } from 'components';
import { useJukiUI } from 'hooks';
import Image from 'next/image';
import { PRODUCTS } from '../../config/constants';

export function Footer() {
  
  const { components: { Link } } = useJukiUI();
  
  return (
    <div className="jk-row extend cr-pd tx-m bc-we">
      <div className="jk-col pad-left-right stretch" style={{ width: 'var(--modal-width-md)' }}>
        <div className="jk-row stretch space-between extend nowrap ">
          <div className="jk-col stretch top left">
            <div className="jk-row left">
              <Image
                src="https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg"
                alt="Juki Logo"
                height={160}
                width={160}
              />
            </div>
            <div className="jk-row cr-g3"> The home for competitive programmers</div>
            <div className="jk-row gap left pad-top">
              <Link href="https://www.facebook.com/jukiApp/" target="_blank" className="link">
                <FacebookIcon />
              </Link>
            </div>
          </div>
          <div className="jk-row stretch gap nowrap">
            {PRODUCTS.map(({ name, sections }) => (
              <div className="jk-col stretch top left jk-pad-lg flex-1 gap">
                <div className="jk-row left cr-pd fw-bd jk-pg-tb tt-ue tx-s">{name}</div>
                {sections.map(({ name, url }) => (
                  <Link href={url} target="_blank" className="link" key={name}>
                    <div className="jk-row left">
                      <T className="tt-se">{name}</T>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
            <div className="jk-col stretch top left jk-pad-lg flex-1 gap">
              <div className="jk-row left cr-pd fw-bd jk-pg-tb tt-ue tx-s">Resources</div>
              <Link href="/docs" className="link">
                <div className="jk-row left"><T className="tt-se">docs</T></div>
              </Link>
              {/*<div className="jk-row left"><T>Blog</T></div>*/}
              {/*<div className="jk-row left"><T>News</T></div>*/}
              {/*<div className="jk-row left"><T>About us</T></div>*/}
              <Link href="/policies/privacy-policy" className="link">
                <div className="jk-row left"><T className="tt-se">privacy policies</T></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="jk-row left extend">
        <span className="tx-s cr-g3">©2021 Juki.app</span>
      </div>
    </div>
  );
}
