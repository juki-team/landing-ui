import { Footer, WorksheetViewer } from 'components';
import { useRouterStore } from 'hooks';
import React from 'react';
import { QueryParam, WorksheetDataResponseDTO } from 'types';

export const DocsPage = ({ worksheet }: { worksheet: WorksheetDataResponseDTO }) => {
  
  const searchParams = useRouterStore(state => state.searchParams);
  const setSearchParams = useRouterStore(state => state.setSearchParams);
  let page = +(searchParams.get(QueryParam.PAGE) ?? 1);
  page = Number.isNaN(page) || page < 1 ? 1 : page;
  let subPage = +(searchParams.get(QueryParam.SUB_PAGE) ?? 1);
  subPage = Number.isNaN(subPage) || subPage < 1 ? 1 : subPage;
  
  return (
    <div className="jk-col top nowrap stretch" style={{ overflowY: 'scroll', maxHeight: '100%' }}>
      <div className="jk-pg-tb">
        <WorksheetViewer
          worksheetKey={worksheet.key}
          content={worksheet.content}
          isEditor={worksheet.user?.isManager}
          isSolvable={worksheet.isSolvable}
          page={page}
          subPage={subPage}
          onPageChange={(newPage, newSubPage, entries) => {
            setSearchParams([
              { name: QueryParam.PAGE, value: `${newPage}` },
              { name: QueryParam.SUB_PAGE, value: `${newSubPage}` },
              ...(Array.isArray(entries) ? entries : [ entries ]),
            ]);
          }}
          readOnly
        />
      </div>
      <Footer />
    </div>
  );
};
