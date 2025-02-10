import { API_VERSION, JUKI_SERVICE_V1_URL } from './settings';

export const JUKI_API_V1 = {
  AUTH: {
    RESET_PASSWORD: () => {
      return `${JUKI_SERVICE_V1_URL}/${API_VERSION}/auth/reset-password`;
    },
    ACCOUNT_DELETION_REQUEST: () => {
      return `${JUKI_SERVICE_V1_URL}/${API_VERSION}/user/account-deletion-request`;
    },
  },
};
