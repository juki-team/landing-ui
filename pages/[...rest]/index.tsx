import { useJukiRouter } from '@juki-team/base-ui';
import { useEffect } from 'react';

export default function Rest() {
  const { pushRoute } = useJukiRouter();
  useEffect(() => {
    pushRoute('/');
  }, []);
  return null;
}
