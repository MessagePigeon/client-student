import { useRequest } from 'ahooks';
import { API } from '../../http/apis';
import { useAppDispatch } from '../../state/hooks';
import { connectCodeActions } from '../../state/slices/connect-code.slice';

export function useInitUserData({ ready }: { ready: boolean }) {
  const dispatch = useAppDispatch();

  const { loading: getTeacherUrlLoading } = useRequest(API.getTeacherUrl, {
    ready,
    onSuccess(response) {
      dispatch(connectCodeActions.setTeacherUrl(response.data.url));
    },
  });

  const { loading: getConnectCodeLoading } = useRequest(API.getConnectCode, {
    ready,
    onSuccess(response) {
      dispatch(connectCodeActions.setConnectCode(response.data.connectCode));
    },
  });

  const loading = getTeacherUrlLoading || getConnectCodeLoading;
  return { loading };
}
