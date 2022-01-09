import Wrapper from '@components/Wrapper';
import { Input, Box, alpha } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, State, JobActionCreators } from '@state';
import { IJobCreationData } from '@state/reducer-types';

import ListBox from '@components/ListBox';
import { IDataPickerProps } from '@interfaces/Props';

const DataPicker: React.FC<IDataPickerProps> = ({ jobCreationData }) => {
  return (
    <div>
      <Wrapper
        shouldHover={false}
        styles={{
          width: '51vw',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          overflowY: 'scroll',
          height: '70vh',
          borderRadius: '1rem',
          '@media (max-height: 731px)': {
            height: '60vh',
          },
          '@media (max-width: 1860px)': {
            width: '53vw',
          },
        }}
      >
        {jobCreationData.length > 1 ? (
          jobCreationData.map((data: IJobCreationData) => {
            {
              console.log('execute');
            }
            return (
                <ListBox key={data.id} job={data} />
            );
          })
        ) : (
          <div>No Data Yet</div>
        )}
      </Wrapper>
    </div>
  );
};

export default DataPicker;
