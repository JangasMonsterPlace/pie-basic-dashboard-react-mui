import { useRef, useEffect, useState, useMemo } from 'react';
import { State, useSelector } from '@state';
import BarChart from '@charts/BarChart';
import Wrapper from '@components/Wrapper';
import DataPicker from '@components/DataPicker';
import { IDataPickerProps } from '@interfaces/Props';


const data = [
  {
    name: 'Simon',
    value: 50,
  },
  {
    name: 'John',
    value: 80,
  },
  {
    name: 'Dave',
    value: 100,
  },
  {
    name: 'Tim',
    value: 60,
  },
  {
    name: 'Ti',
    value: 80,
  },
  {
    name: 'Mark',
    value: 40,
  },
];
const options = {
  chartWidth: 800,
  chartHeight: 400,
  chartMargin: { top: 20, right: 20, bottom: 30, left: 40 },
};
const ChooseData: React.FC<IDataPickerProps> = ({jobCreationData}) => {
  const DataPickerMemo = useMemo(() => <DataPicker jobCreationData={jobCreationData} />, [jobCreationData]);
  return (
    <div className="">
      <h1>Choose your data</h1>
      {DataPickerMemo}
    </div>
  );
}

export default ChooseData;