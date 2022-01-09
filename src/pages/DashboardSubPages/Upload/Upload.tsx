import React, { FC, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { AppActionCreators } from '@state';
import { ToastType } from '@state/reducer-types';
import FileDetails from './FileDetails';
import Wrapper from '@components/Wrapper';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

const Upload: FC = () => {
  const Input = styled('input')({
    display: 'none',
  });

  const [reviewId, setReviewId] = React.useState('');
  const [dateLabel, setDateLabel] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [text, setText] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [user, setUser] = React.useState('');
  const [origin, setOrigin] = React.useState('');
  const [file, setFile] = React.useState('');

  const dispatch = useDispatch();
  const [readFields, setReadFields] = useState<string[]>([]);
  const fileInputRef = useRef();

  const parseFirstLine = (line: string) => {
    const fieldsCommaSeparated = line.trim().split(',');
    setReadFields(fieldsCommaSeparated);
    //@ts-ignore
    fileInputRef.current.value = '';

    // const fieldsSemicolonSeparated = line.split(';');
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = reader.result as string;
      const firstLine = text.split('\n').shift();
      if (firstLine) {
        parseFirstLine(firstLine);
      } else {
        dispatch(
          AppActionCreators.addToast({
            id: Math.random().toString(),
            message:
              'File was empty. Please upload a file with at least one line.',
            type: ToastType.ERROR,
          })
        );
      }
    };
    if (event.target.files) {
      if (event.target.files[0]) {
        setFile(event.target.files[0]);
        reader.readAsText(event.target.files[0]);
      }
    } else {
      dispatch(
        AppActionCreators.addToast({
          id: Math.random().toString(),
          message:
            'Could Not Read given file - please make sure it is a valid csv.',
          type: ToastType.ERROR,
        })
      );
    }
  };

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log('submitHandler');
    console.log(file);
    const data = new FormData();
    data.append('file', file);
    data.append('reviewId', reviewId);
    data.append('dateLabel', dateLabel);
    data.append('rating', rating);
    data.append('text', text);
    data.append('country', country);
    data.append('city', city);
    data.append('user', user);
    data.append('origin', origin);    
    axios
      .post('http://127.0.0.1:8000/api/csv/', 
        data,
        {headers: { 'Content-Type': 'multipart/form-data' }})
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="main-container">
      <h1>Upload your data</h1>
      <label htmlFor="contained-button-file">
        <Input
          //@ts-ignore
          ref={fileInputRef}
          accept=".csv, .txt"
          id="contained-button-file"
          type="file"
          onChange={(e) => onChangeHandler(e)}
        />
        <Button variant="contained" component="span">
          Choose File
        </Button>
      </label>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          margin: '10px',
        }}
      >
        <Wrapper
          shouldHover={false}
          styles={{
            width: '45%',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '40%',
            }}
          >
            <h2>File Requirements</h2>
            <div>
              <ul>
                <li>Date (required)</li>
                <li>Text (required)</li>
                <li>Rating (required)</li>
                <li>Review ID (required)</li>
                <li>city (optional)</li>
                <li>city (optional)</li>
                <li>user (optional)</li>
              </ul>
            </div>
          </div>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: 'text.primary',
              }}
              id="demo-simple-select-label"
            >
              Data Origin
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={origin}
              label="DataOrigin"
              onChange={(e) => setOrigin(e.target.value as string)}
            >
              <MenuItem value={10}>Google</MenuItem>
              <MenuItem value={20}>Apple</MenuItem>
              <MenuItem value={30}>Amazon</MenuItem>
            </Select>
          </FormControl>
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
            }}
          >
            <Button
              onClick={(e) => submitHandler(e)}
              sx={{
                fontSize: '1.5rem',
              }}
            >
              Submit
            </Button>
          </div>
        </Wrapper>
        <FileDetails
          reviewId={reviewId}
          setReviewId={setReviewId}
          dateLabel={dateLabel}
          setDateLabel={setDateLabel}
          rating={rating}
          setRating={setRating}
          text={text}
          setText={setText}
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          user={user}
          setUser={setUser}
          readFields={readFields}
        />
      </div>
    </div>
  );
};
export default Upload;
