'use client';

import { usePageStore } from '@juki-team/base-ui';
import { ArrowBackIcon, ArrowForwardIcon, Button, NavigateNextIcon, T } from 'components';
import { Fragment, useState } from 'react';
import { PRODUCTS } from '../../config/constants';
import { useUIStore } from '../../hooks';

type ProductType = typeof PRODUCTS[number]

export const ProductSlide = ({ name, description, logoUrl, sections, url, urlDescription, even }: ProductType & {
  even: boolean
}) => {
  
  const [ currentSection, setCurrentSection ] = useState(0);
  const { Link, Image } = useUIStore(store => store.components);
  const viewPortWidth = usePageStore(store => store.viewPort.width);
  
  const contentParagraph = (name: string, description: string) => {
    const descriptionArray = description.split(name);
    const descriptionParagraph = descriptionArray.map((item, index) => {
      if (index === descriptionArray.length - 1) {
        return <T key={item + index}>{item}</T>;
      }
      return (
        <Fragment key={item + index}>
          <T>{item}</T>
          <span className="cr-py fw-bd">{name}</span>
        </Fragment>
      );
    });
    return <p className="tx-l cr-g2">{descriptionParagraph}</p>;
  };
  
  const background = even ? 'bc-we' : 'bc-w2';
  
  return (
    <div className={'jk-row extend ' + background}>
      <div className="jk-col" style={{ width: 'var(--modal-width-md)' }}>
        <div className="jk-col jk-pg-t">
          <div
            className="jk-row center nowrap gap jk-pg-md"
            style={{ width: 'calc(var(--modal-width-md) - 4 * var(--screen-col-width))' }}
          >
            <div className="jk-row">
              <Image src={logoUrl} alt="Juki Logo" width={247} height={120} />
            </div>
            <div className="jk-row">
              {contentParagraph(name, description)}
            </div>
          </div>
        </div>
        <div className="jk-row gap">
          {sections.map((section, index) => (
            <Button
              key={section.name + index}
              onClick={() => setCurrentSection(index)}
            >
              <T className="tt-se">{section.name}</T>
            </Button>
          ))}
        </div>
        <div className="jk-row gap jk-pg-lg nowrap">
          <div className="jk-col">
            <div className="jk-col left extend jk-pg-md">
              <div className="jk-row extend left">
                <h2><T className="cr-py tt-se">{sections[currentSection].name}</T></h2>
              </div>
              <div>
                <p><T>{sections[currentSection].description}</T></p>
              </div>
            </div>
            <div className="jk-row left extend jk-pg-md">
              <Link href={sections[currentSection].url} className="cr-py fw-bd tx-l" target="_blank">
                <div className="jk-row">
                  <span><T>{urlDescription}</T> / <T className="tt-se">{sections[currentSection].name}</T></span>
                  <NavigateNextIcon />
                </div>
              </Link>
            </div>
            <div className="jk-row nowrap gap">
              <a
                href="#"
                onClick={() => setCurrentSection(prev => {
                  if (prev === 0) {
                    return sections.length - 1;
                  }
                  return prev - 1;
                })}
                className="jk-row"
              >
                <ArrowBackIcon />
              </a>
              <div className="jk-row gap">
                {sections.map((section: any, index: number) => (
                  <Button
                    key={section.name + index}
                    className={currentSection === index ? 'bc-pd' : 'bc-g4'}
                    style={{ width: '12px', minHeight: '12px', height: '12px' }}
                    onClick={() => setCurrentSection(index)}
                  />
                ))}
              </div>
              <a
                href="#"
                onClick={() => setCurrentSection(prev => {
                  if (prev === sections.length - 1) {
                    return 0;
                  }
                  return prev + 1;
                })}
                className="jk-row"
              >
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
          <div className="jk-row">
            <Image
              src={sections[currentSection].image}
              alt="Juki Logo"
              width={Math.min(700, viewPortWidth * 0.4)}
              height={Math.min(700, viewPortWidth * 0.4) * 0.7}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
