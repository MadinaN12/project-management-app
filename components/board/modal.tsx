import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { ModalProps } from '../../types/types';
import { createColumn } from '../../api/column/createColumn';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBoard } from '../../api/board/getBoard';
import { getToken } from '../../utils';

const Modal = ({ active, setActive }: ModalProps) => {
  const { board, boardId } = useAppSelector((state) => state.boardReducer);
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const token = getToken();
    const column = { title: title, order: board.columns.length + 1 };
    if (token) {
      await createColumn(column, boardId, token);
      dispatch(getBoard({ boardId: boardId, token: token }));
    }
    setActive(false);
    setTitle('');
  };

  const onTextChanged = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  };

  return (
    <Dialog open={active}>
      <DialogTitle>Create column</DialogTitle>
      <CssBaseline />
      <DialogContent>
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={onTextChanged}
        />
      </DialogContent>
      <DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setActive(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
