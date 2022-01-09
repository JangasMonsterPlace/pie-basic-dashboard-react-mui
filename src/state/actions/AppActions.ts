import { IToast } from '@state/reducer-types';
import { AppActionTypes } from '../action-types';

interface SwitchTheme {
  type: AppActionTypes.SWITCH_THEME;
  payload: boolean;
}

interface AppReady {
  type: AppActionTypes.APP_READY;
  payload: boolean;
}

interface AddToast {
  type: AppActionTypes.ADD_TOAST;
  payload: IToast;
}

interface RemoveToast {
  type: AppActionTypes.REMOVE_TOAST;
  payload: IToast;
}

export type Actions = SwitchTheme | AppReady | AddToast | RemoveToast;
