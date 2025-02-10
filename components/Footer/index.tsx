'use client';

import { FacebookIcon, T } from 'components';
import { useJukiUI } from 'hooks';
import Image from 'next/image';

export function Footer() {
  
  const { components: { Link } } = useJukiUI();
  
  return (
    <div className="jk-row extend cr-pd tx-m bc-we">
      <div className="jk-col pad-left-right stretch" style={{ width: 'var(--modal-width)' }}>
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
              <FacebookIcon />
              <FacebookIcon />
            </div>
          </div>
          
          <div className="jk-row stretch gap nowrap">
            <div className="jk-col stretch top left jk-pad-lg flex-1">
              <div className="jk-row left cr-pd fw-bd pad-bottom tt-ue tx-t">Juki Judge</div>
              <div className="jk-row left jk-pg-sm-b"><T>Contests</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Problems</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Positions</T></div>
            </div>
            <div className="jk-col stretch top left jk-pad-lg flex-1">
              <div className="jk-row left cr-pd fw-bd pad-bottom tt-ue tx-t">Juki Couch</div>
              <div className="jk-row left jk-pg-sm-b"><T>Courses</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Tasks</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Teams</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Schedules</T></div>
            </div>
            <div className="jk-col stretch top jk-pad-lg flex-1">
              <div className="jk-row left cr-pd fw-bd pad-bottom tt-ue tx-t">Juki Utils</div>
              <div className="jk-row left jk-pg-sm-b"><T>Codes</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Documents</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Board</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>Input test case generator</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>URL Shortener</T></div>
            </div>
            <div className="jk-col stretch top jk-pad-lg flex-1">
              <div className="jk-row left cr-pd fw-bd pad-bottom tt-ue tx-t">Resources</div>
              <div className="jk-row left jk-pg-sm-b"><T>Blog</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>News</T></div>
              <div className="jk-row left jk-pg-sm-b"><T>About us</T></div>
              <Link href="/policies/privacy-policy">
                <div className="jk-row left jk-pg-sm-b"><T>Privacy policies</T></div>
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
