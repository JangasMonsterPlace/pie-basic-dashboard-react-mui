import { JobActionCreators, State } from '@state';
import { IJobCreationData } from '@state/reducer-types';
import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '@state';
import { styled } from '@mui/system';
import { Input, Box, alpha } from '@mui/material';

interface IProps {
  job: IJobCreationData;
}
const ListBox: FC<IProps> = ({ job }) => {
  const dispatch = useDispatch();
  const jobState = useSelector((state: State) => state.job);

  return (
    <>
      {jobState.chosenJobCreationData.filter(entry => entry.id === job.id).length ? (
        <StyledListItemActive
            onClick={() => dispatch(JobActionCreators.removeFromChosenJobData(job))}
        >
          <h3>
            From {job.origin}
          </h3>
          <p>
            Uploaded by{job.uploadedBy} at {job.uploadDate.toLocaleDateString()}
          </p>
          <p>
            Origin: {job.origin} - data points: {job.totalReviews}
          </p>
        </StyledListItemActive>
      ) : (
        <StyledListItem
          onClick={() => dispatch(JobActionCreators.choseJobData(job))}
        >
          <h3>
            From {job.origin}
          </h3>
          <p>
            Uploaded by{job.uploadedBy} at {job.uploadDate.toLocaleDateString()}
          </p>
          <p>
            Origin: {job.origin} - data points: {job.totalReviews}
          </p>
        </StyledListItem>
      )}
    </>
  );
};

const StyledListItem = styled('div')(({ theme }) => ({
  border: `3px solid ${theme.palette.text.primary}`,
  borderRadius: '0.5rem',
  padding: '1rem',
  margin: '1rem',
  width: '25%',
  // height: 'fit-content',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
  },
  
  // '@media (max-width: 1730px)': {
  //   width: '53vw',
  // },
}));

const StyledListItemActive = styled('div')(({ theme }) => ({
  border: `3px solid ${theme.palette.primary.main}`,
  padding: '1rem',
  margin: '1rem',
  width: '25%',
  // height: 'fit-content',
  borderRadius: '0.5rem',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  // '@media (max-width: 1730px)': {
  //   width: '53vw',
  // },
}));

export default ListBox;
