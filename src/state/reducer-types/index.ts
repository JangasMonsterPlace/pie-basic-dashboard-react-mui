export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export interface IToast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

// App interfaces
export interface IAppState {
  ready: boolean;
  darkMode: boolean;
  toasts: IToast[];
}

// Job interfaces
export enum JobStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export interface IJob {
  id: number;
  title: string;
  author: string;
  creationDate: Date;
  status: JobStatus;
  descriptionShort: string;
}

export interface IJobCreationData {
  id: string;
  averageLenth: number;
  first_review: Date;
  last_review: Date;
  totalReviews: number;
  sourceType: string;
  origin: string;
  uploadDate: Date;
  uploadedBy: string;
}


export interface IJobState {
  jobs: IJob[];
  activeJobCreateStep: 0 | 1 | 2;
  smallBarChartCurrentValue: number;
  jobCreationData: Array<IJobCreationData>;
  chosenJobCreationData: IJobCreationData[];
}
