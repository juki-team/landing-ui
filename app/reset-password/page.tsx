'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLoader, HelpSection, InputPassword, T } from 'components';
import { JUKI_API_V1 } from 'config/constants';
import { authorizedRequest, cleanRequest } from 'helpers';
import { useJukiNotification, useRouterStore, useSearchParams } from 'hooks';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ContentResponseType, HTTPMethod, SetLoaderStatusOnClickType, Status } from 'types';
import * as yup from 'yup';

type ProfileChangePasswordInput = {
  newPassword: string,
  newPasswordConfirmation: string,
}

const profileSettingsChangePasswordSchema = yup.object().shape({
  newPassword: yup.string()
    .required('cannot be empty')
    .min(8, 'password must be at least 8 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?"()-_]{8,}$/,
      'must have at least one uppercase, one lowercase letter and one number'),
  newPasswordConfirmation: yup.string()
    .required('cannot be empty')
    .oneOf([ yup.ref('newPassword'), '' ], 'both passwords must match'),
});

export default function ResetPassword() {
  
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ProfileChangePasswordInput>({
    resolver: yupResolver(profileSettingsChangePasswordSchema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });
  
  const setLoaderRef = useRef<SetLoaderStatusOnClickType>(undefined);
  const { searchParams } = useSearchParams();
  const resetPasswordToken = searchParams.get('resetPasswordToken')!;
  const { notifyResponse } = useJukiNotification();
  const pushRoute = useRouterStore(state => state.pushRoute);
  
  return (
    <div className="jk-col extend stretch">
      <div className="jk-row extend stretch">
        <div className="jk-col gap nowrap bc-we jk-pg-lg jk-border-radius">
          <div className="jk-col extend stretch nowrap">
            <div className="jk-row jk-pg-sm"><h3><T className="tt-se">forgot your password?</T></h3></div>
            <div className="jk-row jk-pg-sm"><T className="tt-se fw-bd">change your password</T></div>
            <form
              onSubmit={handleSubmit(async (data: ProfileChangePasswordInput) => {
                setLoaderRef.current?.(Status.LOADING);
                const response = cleanRequest<ContentResponseType<any>>(await authorizedRequest(JUKI_API_V1.AUTH.RESET_PASSWORD(), {
                  method: HTTPMethod.POST,
                  body: JSON.stringify({ password: data.newPassword, resetPasswordToken }),
                }));
                if (notifyResponse(response, setLoaderRef.current)) {
                  pushRoute('/');
                }
              })}
              className="jk-col gap extend stretch"
            >
              <div className="jk-form-item">
                <InputPassword
                  labelPlacement="top"
                  label={<T className="tt-se">new password</T>}
                  register={register('newPassword') as any}
                />
                <p><T>{errors.newPassword?.message || ''}</T></p>
              </div>
              <div className="jk-form-item">
                <InputPassword
                  labelPlacement="top"
                  label={<T className="tt-se">confirm new password</T>}
                  register={register('newPasswordConfirmation')}
                />
                <p><T>{errors.newPasswordConfirmation?.message || ''}</T></p>
              </div>
              <div className="jk-row gap right">
                <ButtonLoader
                  type="primary"
                  setLoaderStatusRef={setLoader => setLoaderRef.current = setLoader}
                  disabled={!isValid}
                  submit
                  expand
                >
                  <T className="tt-se">change my password</T>
                </ButtonLoader>
              </div>
            </form>
            <div className="jk-divider" />
            <HelpSection />
          </div>
        </div>
      </div>
    </div>
  );
}
