'use client';

import { ButtonLoader, Input, InputTextArea, T } from 'components';
import { JUKI_API_V1 } from 'config/constants';
import { authorizedRequest, cleanRequest } from 'helpers';
import { useJukiNotification } from 'hooks';
import { useState } from 'react';
import { ContentResponseType, HTTPMethod, Status } from 'types';

const Page = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ reason, setReason ] = useState('');
  const { notifyResponse } = useJukiNotification();
  
  return (
    <div className="jk-pg-lg">
      <div className="jk-col stretch jk-pg-lg bc-we jk-br-ie">
        <h1 className="ta-cr jk-pg"><T>account deletion request</T></h1>
        <p className="ta-cr">
          <T className="tt-se">por favor complete el siguiente formulario para solicitar la eliminación de su cuenta y
            datos asociados</T>.
          <T className="tt-se">we will process your request within 30 days after</T>.
        </p>
        <form className="jk-col stretch">
          <div className="jk-col gap jk-pg-lg">
            <Input
              extend
              required
              label={<T className="tt-se">name</T>}
              value={name}
              onChange={setName}
            />
            <Input
              extend
              required
              label={<T className="tt-se">email</T>}
              value={email}
              onChange={setEmail}
            />
            <InputTextArea
              extend
              label={<T className="tt-se">reason for request</T>}
              value={reason}
              onChange={setReason}
            />
            <ButtonLoader
              submit
              onClick={async (setLoaderRef) => {
                setLoaderRef(Status.LOADING);
                const response = cleanRequest<ContentResponseType<any>>(await authorizedRequest(JUKI_API_V1.AUTH.ACCOUNT_DELETION_REQUEST(), {
                  method: HTTPMethod.POST,
                  body: JSON.stringify({ name, email, reason }),
                }));
                notifyResponse(response, setLoaderRef);
              }}
            >
              <T>send request</T>
            </ButtonLoader>
            <p className="cr-er ta-cr">
              * <T>by submitting this request, you confirm that you wish to permanently delete your account and all
              associated data</T>.
              <T>this process cannot be reversed</T>.
            </p>
          </div>
        </form>
        <p>
          <T className="tt-se">for more information on how we manage personal data, please see our</T>&nbsp;
          <a href="/policies/privacy-policy" className="link"><T>privacy policy</T></a>.
        </p>
      </div>
    </div>
  );
};

export default Page;
