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

const ConfirmModal = ({ title, active, setActive }: ConfirmModalProps) => {
  const { columns } = useAppSelector((state) => state.boardReducer);
  const { deleteColumns } = storeSlice.actions;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    const res = columns.filter((item) => item.id !== title);
    dispatch(deleteColumns(res));
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
          You will delete not only the column, but also all the tasks attached to it.
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

export default ConfirmModal;
