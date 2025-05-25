'use client';

import { NavigateNextIcon, T } from 'components';
import { PRODUCTS } from 'config/constants';
import { useJukiUI } from 'hooks';

export const ProductsMenu = () => {
  
  const { components: { Image, Link } } = useJukiUI();
  
  return (
    <div style={{ width: 'var(--modal-width-md)' }} className="jk-col cr-pd bc-we jk-pg jk-br-ie">
      <div className="jk-row stretch top gap nowrap">
        {PRODUCTS.map((product, index) => (
          <>
            <div key={index} className="jk-row left top gap flex-1">
              <div className="jk-row stretch top nowrap">
                <div className="jk-col top jk-pad-sm">
                  <Image src="https://images.juki.pub/c/juki-head.svg" alt="Juki Logo" height={100} width={100} />
                </div>
                <div className="jk-col gap stretch left">
                  <h2 className="fw-bd cr-g2 jk-pg-tb">{product.name}</h2>
                  <div className="tx-m pad-bottom">{product.summary}</div>
                  <Link href={product.url} target="_blank">
                    <div className="jk-row left nowrap pad-bottom tx-m cr-py fw-bd">
                      {product.urlDescription}
                      <NavigateNextIcon />
                    </div>
                  </Link>
                  <div className="jk-col stretch left">
                    {product.sections.map((url, index) => (
                      <div key={index} className="tx-m cr-py fw-bd jk-pg-sm-l">
                        <Link href={url.url} target="_blank">
                          <T className="tt-se">{url.name}</T>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {index < PRODUCTS.length - 1 && (
              <div className="jk-row jk-divider horizontal" style={{ height: 'unset' }}>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
