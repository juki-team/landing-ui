import { JUKI_SERVICE_V2_URL } from './settings';

export const JUKI_API_V1 = {
  AUTH: {
    RESET_PASSWORD: () => {
      return `${JUKI_SERVICE_V2_URL}/auth/reset-password`;
    },
    ACCOUNT_DELETION_REQUEST: () => {
      return `${JUKI_SERVICE_V2_URL}/auth/account-deletion-request`;
    },
  },
};
