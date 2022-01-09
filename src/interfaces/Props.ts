import { IJobCreationData } from '@state/reducer-types';

export interface IDataPickerProps {
    jobCreationData: IJobCreationData[];
  }

  export interface IDataPickerSummaryProps {
    chosenJobCreationData: IJobCreationData[];
  }