import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { JobActionCreators } from '@state';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { bindActionCreators } from 'redux';
import { useTheme } from '@emotion/react';
import { createStyles } from '@mui/material';
interface IProp {
  children: React.ReactNode;
  steps: string[];
}

const HorizontalStepper: React.FC<IProp> = ({ children, steps }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const dispatch = useDispatch();
  const theme = useTheme();
  const { createJobStepper } = bindActionCreators(JobActionCreators, dispatch);
  // const styles = (theme) =>
  //   createStyles({
  //     root: {
  //       backgroundColor: theme.pallet,
  //     },
  //   });
  useEffect(() => {
    dispatch(createJobStepper(activeStep));
  }, [activeStep]);

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', height: '80%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>
                <span style={{ color: theme.palette }}>{label}</span>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {children}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default HorizontalStepper;