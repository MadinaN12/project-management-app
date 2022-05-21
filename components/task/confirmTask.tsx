import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useRouter } from 'next/router';
import { getBoard } from '../../api/board/getBoard';
import { deleteTask } from '../../api/task/deleteTask';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TaskModalProps } from '../../types/types';
import { getToken } from '../../utils';

const ConfirmTask = ({ tasks, active, setActive }: TaskModalProps) => {
  const { colId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  const handleClose = async () => {
    const token = getToken();
    if (token && id) {
      await deleteTask(colId, tasks.id, id, token);
      dispatch(getBoard({ boardId: id, token: token }));
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
