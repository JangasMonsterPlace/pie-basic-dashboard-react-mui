import React from 'react';
import HorizontalStepper from '@components/stepper/HorizontalStepper';
import { State, useSelector } from '@state';
import ChooseData from './ChooseData';
import ChooseDateRange from './ChooseDateRange';
import SummaryJob from './SummaryJob';
import SummaryChosenJobData from '@components/SummaryChosenJobData';

export default function CreateJob() {
  const job = useSelector((state: State) => state.job);
  return (
    <div className="main-container">
      <HorizontalStepper
        steps={['Choose Data', 'Set Date Range', 'Summary&Create']}
      >
        <div className="stepper-inner-container">
          {job.activeJobCreateStep === 0 && (
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}>
              <ChooseData jobCreationData={job.jobCreationData} />
              <SummaryChosenJobData
                chosenJobCreationData={job.chosenJobCreationData}
              />
            </div>
          )}
          {job.activeJobCreateStep === 1 && <ChooseDateRange />}
          {job.activeJobCreateStep === 2 && <SummaryJob />}
        </div>
      </HorizontalStepper>
    </div>
  );
}
