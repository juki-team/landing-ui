import { JUKI_SERVICE_V1_URL } from './settings';

export const JUKI_API_V1 = {
  AUTH: {
    RESET_PASSWORD: () => {
      return `${JUKI_SERVICE_V1_URL}/auth/reset-password`;
    },
    ACCOUNT_DELETION_REQUEST: () => {
      return `${JUKI_SERVICE_V1_URL}/user/account-deletion-request`;
    },
  },
};
