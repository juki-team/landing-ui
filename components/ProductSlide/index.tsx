'use client';

import { ArrowBackIcon, ArrowForwardIcon, Button, NavigateNextIcon, T } from 'components';
import Image from 'next/image';
import { useState } from 'react';

export const ProductSlide = ({ name, description, logoUrl, sections, urlDescription, even }: any) => {
  
  const [ currentSection, setCurrentSection ] = useState(0);
  
  const contentParagraph = (name: string, description: string) => {
    const descriptionArray = description.split(name);
    const descriptionParagraph = descriptionArray.map((item, index) => {
      if (index === descriptionArray.length - 1) {
        return <span key={index}>{item}</span>;
      }
      return <span key={index}>{item}<span className="cr-py">{name}</span></span>;
    });
    return <p className="tx-l cr-g3 fw-bd">{descriptionParagraph}</p>;
  };
  
  const background = even ? 'bc-we' : 'bc-w2';
  
  return (
    <div className={'jk-row extend ' + background}>
      <div className="jk-col" style={{ width: 'var(--modal-width)' }}>
        <div className="jk-col pad-top">
          <div
            className="jk-row center nowrap gap jk-pad-md"
            style={{ width: 'calc(var(--modal-width) - 4 * var(--screen-col-width))' }}
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
          {
            sections.map((section: any, index: number) => (
              <Button
                key={section.name + index}
                //className="bc-g6 cr-bk"
                className={currentSection === index ? 'bc-sy cr-we' : 'bc-g6 cr-bk'}
                style={{ textTransform: 'none', borderRadius: '30px' }}
                onClick={() => setCurrentSection(index)}
              >
                <T>{section.name}</T>
              </Button>
            ))
          }
        </div>
        {
          <div className="jk-row gap jk-pad-lg nowrap">
            <div className="jk-col jk-pad-lg">
              <div className="jk-col left extend jk-pad-md">
                <div className="jk-row extend left">
                  <h1><span className="cr-py"><T>{sections[currentSection].name}</T></span></h1>
                </div>
                <div>
                  <p className="tx-s"><T>{sections[currentSection].description}</T></p>
                </div>
              </div>
              
              <div className="jk-row left extend jk-pad-md">
                <a href="#" className="cr-py fw-bd tx-l">
                  <div className="jk-row"><span><T>{urlDescription}</T></span>
                    <NavigateNextIcon /></div>
                </a>
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
                >
                  <ArrowBackIcon />
                </a>
                <div className="jk-row gap">
                  {
                    sections.map((section: any, index: number) => (
                      <Button
                        key={section.name + index}
                        className={currentSection === index ? 'bc-bk' : 'bc-g3'}
                        style={{ width: '5px', minHeight: '5px', height: '5px' }}
                        onClick={() => setCurrentSection(index)}
                      ></Button>
                    ))
                  }
                </div>
                <a
                  href="#"
                  onClick={() => setCurrentSection(prev => {
                    if (prev === sections.length - 1) {
                      return 0;
                    }
                    return prev + 1;
                  })}
                >
                  <ArrowForwardIcon />
                </a>
              </div>
            </div>
            <div className="jk-row">
              <Image src={sections[currentSection].image} alt="Juki Logo" width={700} height={500} />
            </div>
          </div>
        }
      </div>
    </div>
  );
};
