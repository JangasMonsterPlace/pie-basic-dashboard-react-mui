import React from 'react';
import TopNavigation from '../components/navigation/TopNavigation';
import SideNavigation from '../components/navigation/SideNavigation';
import { AppActionCreators, useSelector } from '@state';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { IToast } from '@state/reducer-types';

export default function Dashboard() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const handleClose = (toast: IToast) => {
    dispatch(AppActionCreators.removeToast(toast));
  };
  const action = (toast: IToast) => {
    return (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={(e) => handleClose(toast)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  };
  return (
    <>
      <TopNavigation />
      <SideNavigation />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {app.toasts.length > 0
          ? app.toasts.map((toast, index) => {
              return (
                <Snackbar
                  key={toast.id}
                  open={true}
                  autoHideDuration={toast.duration ? toast.duration : 5000}
                  onClose={() => handleClose(toast)}
                  action={action(toast)}
                >
                  <Alert
                    onClose={(e) => handleClose(toast)}
                    severity={toast.type}
                    sx={{ width: '100%' }}
                  >
                    {toast.message}
                  </Alert>
                </Snackbar>
              );
            })
          : null}
      </div>
    </>
  );
}
