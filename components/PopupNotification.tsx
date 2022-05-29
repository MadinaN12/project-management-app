import { Collapse, Slide, Alert, AlertTitle } from '@mui/material';
import { IPopupNotification } from '../types/utilsTypes';

const PopupNotification = ({ errorNotification, errorMessage }: IPopupNotification) => {
  return (
    <Collapse in={errorNotification}>
      <Slide in={errorNotification} direction="left">
        <Alert severity="error" style={{ position: 'fixed', top: 20, right: 20 }}>
          <AlertTitle>
            <strong>Error: </strong> {errorMessage}
          </AlertTitle>
        </Alert>
      </Slide>
    </Collapse>
  );
};

export default PopupNotification;
