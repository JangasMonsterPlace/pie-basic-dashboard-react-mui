import { AppActionTypes } from '@state/action-types';
import { AppActions } from '@state/actions';
import { IToast } from '@state/reducer-types';
import { Dispatch } from 'react';

export const appReady = (bool: boolean) => (dispatch: Dispatch<AppActions>) => {
  console.log('switchTheme: ', bool);
  return dispatch({
    type: AppActionTypes.APP_READY,
    payload: bool,
  });
};

export const switchTheme =
  (bool: boolean) => (dispatch: Dispatch<AppActions>) => {
    console.log('switchTheme: ', bool);
    return dispatch({
      type: AppActionTypes.SWITCH_THEME,
      payload: bool,
    });
  };

export const addToast = (toast: IToast) => (dispatch: Dispatch<AppActions>) => {
  console.log('addToast: ', toast);
  return dispatch({
    type: AppActionTypes.ADD_TOAST,
    payload: toast,
  });
};

export const removeToast =
  (toast: IToast) => (dispatch: Dispatch<AppActions>) => {
    console.log('removeToast: ', toast);
    return dispatch({
      type: AppActionTypes.REMOVE_TOAST,
      payload: toast,
    });
  };
