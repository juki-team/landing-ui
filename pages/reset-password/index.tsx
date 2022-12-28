import { yupResolver } from '@hookform/resolvers/yup';
import {
  authorizedRequest,
  cleanRequest,
  notifyResponse,
  SetLoaderStatusOnClickType,
  useNotification,
} from '@juki-team/base-ui';
import { ContentResponseType, HTTPMethod, Status } from '@juki-team/commons';
import { JUKI_API_V1 } from 'config/constants/api';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonLoader, InputPassword, T } from '../../components';

export type ProfileChangePasswordInput = {
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
    .oneOf([yup.ref('newPassword'), ''], 'both passwords must match'),
});

function ResetPassword() {
  
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ProfileChangePasswordInput>({
    resolver: yupResolver(profileSettingsChangePasswordSchema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });
  
  const setLoaderRef = useRef<SetLoaderStatusOnClickType>();
  const { query: { resetPasswordToken } } = useRouter();
  const { addNotification } = useNotification();
  
  return (
    <div className="jk-col extend stretch">
      <div className="jk-row extend stretch">
        <div className="jk-col gap nowrap bc-we jk-pad-lg jk-border-radius">
          <div className="jk-col extend stretch nowrap">
            <div className="jk-row jk-pad-sm"><h3><T className="tt-se">forgot your password?</T></h3></div>
            <form
              onSubmit={handleSubmit(async (data: ProfileChangePasswordInput) => {
                setLoaderRef.current?.(Status.LOADING);
                const response = cleanRequest<ContentResponseType<any>>(await authorizedRequest(JUKI_API_V1.AUTH.RESET_PASSWORD(), {
                  method: HTTPMethod.POST,
                  body: JSON.stringify({ password: data.newPassword, resetPasswordToken }),
                }));
                notifyResponse(response, addNotification, setLoaderRef.current);
              })}
              className="jk-col gap extend stretch"
            >
              <div className="jk-form-item">
                <label>
                  <T>password</T>
                  <InputPassword register={register('newPassword') as any} />
                </label>
                <p><T>{errors.newPassword?.message || ''}</T></p>
              </div>
              <div className="jk-form-item">
                <label>
                  <T>confirm password</T>
                  <InputPassword register={register('newPasswordConfirmation')} />
                </label>
                <p><T>{errors.newPasswordConfirmation?.message || ''}</T></p>
              </div>
              <div className="jk-row gap right">
                <ButtonLoader
                  type="primary"
                  setLoaderStatusRef={setLoader => setLoaderRef.current = setLoader}
                  disabled={!isValid}
                  submit
                  extend
                >
                  <T>change my password</T>
                </ButtonLoader>
              </div>
            </form>
            <div className="jk-divider" />
            {/*<div className="jk-row center gap">*/}
            {/*  <Button type="text" size="small">sign in</Button>*/}
            {/*  <div className="jk-divider horizontal" />*/}
            {/*  <Button type="text" size="small">sign up</Button>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ResetPassword;
