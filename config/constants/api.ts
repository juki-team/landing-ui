import { API_VERSION, JUKI_SERVICE_BASE_URL } from './settings';

export const JUKI_API_V1 = {
  AUTH: {
    RESET_PASSWORD: () => {
      return `${JUKI_SERVICE_BASE_URL}/${API_VERSION}/auth/reset-password`;
    },
  },
};
