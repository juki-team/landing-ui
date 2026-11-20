'use client';

import { FetcherLayer } from 'components';
import { jukiApiManager } from 'config';
import { ContentResponseType, WorksheetDataResponseDto } from 'types';
import { DocsPage } from './DocsPage';

const DOCS_WORKSHEET_KEY = 'w-NZ3';

export default function Page() {
  
  return (
    <FetcherLayer<ContentResponseType<WorksheetDataResponseDto>>
      url={jukiApiManager.API_V2.worksheet.getData({ params: { key: DOCS_WORKSHEET_KEY } }).url}
    >
      {({ data }) => (
        <DocsPage worksheet={data.content} />
      )}
    </FetcherLayer>
  );
};
