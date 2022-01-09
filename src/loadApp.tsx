import { JobActionCreators, store } from '@state';
import { AppActionTypes } from '@state/action-types';
export const loadApp = () => {

  //@ts-ignore
  store.dispatch({ type: AppActionTypes.APP_READY, payload: { ready: true } });
  //@ts-ignore
  store.dispatch(JobActionCreators.loadJobCreateData('1'))
};
