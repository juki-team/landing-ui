'use client';

import { useJukiUI } from '@juki-team/base-ui';
import { NavigateNextIcon, T } from 'components';

export const ProductsMenu = () => {
  
  const { components: { Image, Link } } = useJukiUI();
  
  const productsData = [
    {
      name: 'Juki Judge',
      description: 'Los programadores pueden motivarse a mejorar compitiendo en linea y comparando sus resultados con otros usuarios.',
      image: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
      url: 'https://judge.juki.app',
      urlDescription: 'Explora Juki Judge',
      urls: [
        {
          name: 'problems',
          url: 'https://judge.juki.app/problems',
        },
        {
          name: 'contests',
          url: 'https://judge.juki.app/contests',
        },
        {
          name: 'rankings',
          url: 'https://judge.juki.app/ranking',
        },
        {
          name: 'boards',
          url: 'https://judge.juki.app/boards',
        },
      ],
    },
    {
      name: 'Juki Couch',
      description: 'Los programadores pueden mejorar y avanzar en su carrera al aprender nuevos lenguajes y habilidades de programación',
      image: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
      url: 'https://coach.juki.app',
      urlDescription: 'Explora Juki Couch',
      urls: [
        {
          name: 'worksheets',
          url: 'https://coach.juki.app/worksheets',
        },
        {
          name: 'courses',
          url: 'https://coach.juki.app/courses',
        },
        {
          name: 'classes',
          url: 'https://coach.juki.app/classes',
        },
      ],
    },
    {
      name: 'Juki Utils',
      description: 'El complemento ideal para Juki Judge y Juki Couch, ya que proporciona a los programdores todo lo necesario en un solo lugar',
      image: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
      url: 'https://utils.juki.app',
      urlDescription: 'Explora Juki Utils',
      urls: [
        {
          name: 'Codes',
          url: '/utils',
        },
        {
          name: 'Documents',
          url: '/utils/documents',
        },
        {
          name: 'Images',
          url: '/utils/images',
        },
        {
          name: 'Board',
          url: '/utils/board',
        },
        {
          name: 'Input test case generator',
          url: '/utils/input-generator',
        },
        {
          name: 'URL Shortener',
          url: '/utils/url-shortener',
        },
      ],
    },
  ];
  
  return (
    <div style={{ width: 'var(--modal-width-md)' }} className="jk-col cr-pd bc-we jk-pg jk-br-ie">
      <div className="jk-row stretch top gap nowrap">
        {productsData.map((product, index) => (
          <>
            <div key={index} className="jk-row left top gap flex-1">
              <div className="jk-row stretch top nowrap">
                <div className="jk-col top jk-pad-sm">
                  <Image src="https://images.juki.pub/c/juki-head.svg" alt="Juki Logo" height={100} width={100} />
                </div>
                <div className="jk-col gap stretch left">
                  <h2 className="fw-bd cr-g2 jk-pg-tb">{product.name}</h2>
                  <div className="tx-m pad-bottom">{product.description}</div>
                  <Link href={product.url}>
                    <div className="jk-row left nowrap pad-bottom tx-m cr-py fw-bd">
                      {product.urlDescription}
                      <NavigateNextIcon />
                    </div>
                  </Link>
                  <div className="jk-col stretch left">
                    {product.urls.map((url, index) => (
                      <div key={index} className="tx-m cr-py fw-bd jk-pg-sm-l">
                        <Link href={url.url}>
                          <T className="tt-se">{url.name}</T>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {index < productsData.length - 1 &&
              <div className="jk-row jk-divider horizontal" style={{ height: 'unset' }}>
              
              </div>}
          </>
        ))}
      </div>
    </div>
  );
};
