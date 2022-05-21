import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { getBoard } from '../../api/board/getBoard';
import { deleteColumn } from '../../api/column/deleteColumn';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ModalProps } from '../../types/types';
import { getToken } from '../../utils';

const ConfirmModal = ({ active, setActive }: ModalProps) => {
  const { colId, boardId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();

  const handleClose = async () => {
    const token = getToken();
    if (token) {
      await deleteColumn(colId, boardId, token);
      dispatch(getBoard({ boardId: boardId, token: token }));
    }
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
