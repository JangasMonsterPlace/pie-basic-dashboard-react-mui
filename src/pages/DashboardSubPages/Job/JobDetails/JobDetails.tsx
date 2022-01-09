import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '@components/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import * as d3 from 'd3';
import { styled, useTheme } from '@mui/material';
import { JobActionCreators, State } from '@state';

export default function JobDetails() {
  const { id } = useParams();

  const BarHolder = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    '& .bar-chart__bar': {
      borderRadius: '5px 5px 0 0',
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      margin: '5px',
    },
  }));

  return (
    <div className="main-container">
      <h1>Job Details {id}</h1>
      <Wrapper shouldHover={false} styles={{ width: '20%' }}>
        <div className="small-bar-chart">
          <div className="flex-container">
            <CurrentValue />
          </div>
          <BarHolder>
            <BarPlot />
          </BarHolder>
        </div>
      </Wrapper>
    </div>
  );
}

function CurrentValue() {
  const theme = useTheme();
  const jobState = useSelector((state: State) => state.job);
  useEffect(() => {}, [jobState.smallBarChartCurrentValue]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      }}
      className="small-bar-chart__number"
    >
      {jobState.smallBarChartCurrentValue
        ? jobState.smallBarChartCurrentValue
        : 0}
    </div>
  );
}

const BarPlot = React.memo(() => {
  const refPlot = useRef(null);
  const [data, setData] = useState([3, 2, 3, 10, 5, 2, 7, 1, 9, 8]);
  const dispatch = useDispatch();

  const BarHolder = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    '& .bar-chart__bar': {
      borderRadius: '5px 5px 0 0',
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      margin: '5px',
    },
  }));
  const setValue = (value: number) => {
    //@ts-ignore
    dispatch(JobActionCreators.setCurrentSmallBarChartValue(value));
  };

  useEffect(() => {
    d3.select(refPlot.current)
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .style('width', (d) => 5 + 'px')
      .style('height', (d) => d * 10 + 'px')
      .attr('class', 'bar-chart__bar')
      .on('mouseover', (d, i: number) => setValue(i));
  });

  return <div ref={refPlot} className="bar-chart"></div>;
});
