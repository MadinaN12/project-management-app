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
import { useAppDispatch } from '../../hooks/redux';
import { createColumn } from '../../api/column/createColumn';
import { useState } from 'react';

const Modal = ({ active, setActive }: ModalProps) => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const column = { title: title, order: 1 };
    dispatch(createColumn(column));
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
