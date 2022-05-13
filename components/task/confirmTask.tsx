import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/storeSlice';
import { ConfirmModalProps } from '../../types/types';

const ConfirmTask = ({ title, active, setActive }: ConfirmModalProps) => {
  const { tasks } = useAppSelector((state) => state.boardReducer);
  const { deleteTasks } = storeSlice.actions;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    const res = tasks.filter((item) => item.id !== title);
    dispatch(deleteTasks(res));
    setActive(false);
  };

  return (
    <Dialog
      open={active}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You will delete this task.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Delete
        </Button>
        <Button variant="contained" onClick={() => setActive(false)} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmTask;
