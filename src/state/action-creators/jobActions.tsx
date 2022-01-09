import apiService from '@service/APIService';
import { JobActionTypes } from '@state/action-types';
import { JobActions } from '@state/actions';
import { IJobCreationData } from '@state/reducer-types';
import { Dispatch } from 'react';
// import store from '/store';

export const createJobStepper =
  (activeJobCreateStep: number) => (dispatch: Dispatch<JobActions>) => {
    console.log('createJobStepper');
    return dispatch({
      type: JobActionTypes.SET_ACTIVE_JOB_CREATE_STEP,
      payload: { activeJobCreateStep: activeJobCreateStep },
    });
  };

export const setCurrentSmallBarChartValue =
  (value: number) => (dispatch: Dispatch<JobActions>) => {
    return dispatch({
      type: JobActionTypes.CHANGE_CURRENT_SMALL_BAR_CHART_VALUE,
      payload: value,
    });
  };

export const loadJobCreateData =
  (id: string) => async (dispatch: Dispatch<JobActions>) => {
    console.log('loadJobCreateData');
    await apiService
      .getCreationData({ userId: id })
      .then((data: Array<IJobCreationData>) => {
        return dispatch({
          type: JobActionTypes.LOAD_JOB_CREATE_DATA,
          payload: data,
        });
      });
  };

export const choseJobData =
  (data: IJobCreationData) => (dispatch: Dispatch<JobActions>) => {
    console.log('choseJobData', data);
    return dispatch({
      type: JobActionTypes.CHOSE_JOB_DATA,
      payload: {...data},
    });
  };
  export const removeFromChosenJobData =
  (data: IJobCreationData) => (dispatch: Dispatch<JobActions>) => {
    return dispatch({
      type: JobActionTypes.REMOVE_FROM_CHOSEN_JOB_DATA,
      payload: data,
    });
  };
