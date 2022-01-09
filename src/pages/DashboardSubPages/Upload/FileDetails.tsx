import {
  List,
  ListItem,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { styled } from '@mui/system';
import Wrapper from '@components/Wrapper';
import Select from '@mui/material/Select';
interface IProps {
  readFields: string[];
  reviewId: string;
  setReviewId: React.Dispatch<React.SetStateAction<string>>;
  dateLabel: string;
  setDateLabel: React.Dispatch<React.SetStateAction<string>>;
  rating: string;
  setRating: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const FileDetails: FC<IProps> = ({
  readFields,
  reviewId,
  setReviewId,
  dateLabel,
  setDateLabel,
  rating,
  setRating,
  text,
  setText,
  country,
  setCountry,
  city,
  setCity,
  user,
  setUser,
}) => {
  const StyledListItem = styled(ListItem)(({ theme }) => ({
    width: '100%!important',
    borderRadius: '5px',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'space-between',
  }));

  const StyledList = styled(List)(({ theme }) => ({}));
  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
  }));
  const StyledSelect = styled(Select)(({ theme }) => ({
    width: '80%',
    color: theme.palette.text.primary,
  }));
  const StyledFormControl = styled(FormControl)(({ theme }) => ({
    width: '80%',

    color: theme.palette.text.primary,
  }));

  const StyledListContainer = styled('div')(({ theme }) => ({
    width: '45%',
  }));

  return (
    <>
      <StyledListContainer>
        <StyledList>
          <Wrapper
            styles={{
              justifyContent: 'space-around',
            }}
          >
            <StyledListItem>
              <div>Column name - Review ID</div>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="simple-select-label">
                  Review Id
                </StyledInputLabel>
                <StyledSelect
                  labelId="simple-select-label"
                  id="simple-select"
                  value={reviewId}
                  label="review_id"
                  onChange={(e) => setReviewId(e.target.value as string)}
                >
                  {readFields.map((field) => {
                    return (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </StyledFormControl>
            </StyledListItem>
          </Wrapper>
          <Wrapper
            styles={{
              justifyContent: 'space-around',
            }}
          >
            <StyledListItem>
              <div>Column name - Date</div>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="date-simple-select-label">
                  date
                </StyledInputLabel>
                <StyledSelect
                  labelId="date-simple-select-label"
                  id="date-simple-select"
                  value={dateLabel}
                  label="date"
                  onChange={(e) => setDateLabel(e.target.value as string)}
                >
                  {readFields.map((field) => {
                    return (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </StyledFormControl>
            </StyledListItem>
          </Wrapper>
          <Wrapper
            styles={{
              justifyContent: 'space-around',
            }}
          >
            <StyledListItem>
              <div>Column name - rating</div>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="rating-simple-select-label">
                  rating
                </StyledInputLabel>
                <StyledSelect
                  labelId="rating-simple-select-label"
                  id="rating-simple-select"
                  value={rating}
                  label="rating"
                  onChange={(e) => setRating(e.target.value as string)}
                >
                  {readFields.map((field) => {
                    return (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </StyledFormControl>
            </StyledListItem>
          </Wrapper>
          <Wrapper
            styles={{
              justifyContent: 'space-around',
            }}
          >
            <StyledListItem>
              <div>Column name - text</div>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="text-simple-select-label">
                  text
                </StyledInputLabel>
                <StyledSelect
                  labelId="text-simple-select-label"
                  id="text-simple-select"
                  value={text}
                  label="text"
                  onChange={(e) => setText(e.target.value as string)}
                >
                  {readFields.map((field) => {
                    return (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </StyledFormControl>
            </StyledListItem>
          </Wrapper>
          <Wrapper
            styles={{
              justifyContent: 'space-around',
            }}
          >
            <StyledListItem>
              <div>Column name - country</div>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="country-simple-select-label">
                  country
                </StyledInputLabel>
                <StyledSelect
                  labelId="country-simple-select-label"
                  id="country-simple-select"
                  value={country}
                  label="country"
                  onChange={(e) => setCountry(e.target.value as string)}
                >
                  {readFields.map((field) => {
                    return (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </StyledFormControl>
            </StyledListItem>
          </Wrapper>
          <Wrapper
            styles={{
              justifyContent: 'space-around',
            }}
          >
            <StyledListItem>
              <div>Column name - city</div>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="city-simple-select-label">
                  city
                </StyledInputLabel>
                <StyledSelect
                  labelId="city-simple-select-label"
                  id="city-simple-select"
                  value={city}
                  label="city"
                  onChange={(e) => setCity(e.target.value as string)}
                >
                  {readFields.map((field) => {
                    return (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </StyledFormControl>
            </StyledListItem>
          </Wrapper>
          <Wrapper
            styles={{
              justifyContent: 'space-around',
            }}
          >
            <StyledListItem>
              <div>Column name - user</div>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="user-simple-select-label">
                  user
                </StyledInputLabel>
                <StyledSelect
                  labelId="user-simple-select-label"
                  id="user-simple-select"
                  value={user}
                  label="user"
                  onChange={(e) => setUser(e.target.value as string)}
                >
                  {readFields.map((field) => {
                    return (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </StyledFormControl>
            </StyledListItem>
          </Wrapper>
        </StyledList>
      </StyledListContainer>
    </>
  );
};
export default FileDetails;
