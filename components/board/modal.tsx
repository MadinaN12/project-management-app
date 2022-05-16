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
import { getColumns, token } from '../../api/column/getAllColumns';

const Modal = ({ active, setActive }: ModalProps) => {
  const { columns } = useAppSelector((state) => state.boardReducer);
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const column = { title: title, order: columns.length + 1 };
    await createColumn(column);
    dispatch(getColumns(token));
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
