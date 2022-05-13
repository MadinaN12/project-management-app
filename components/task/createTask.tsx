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
import { useState } from 'react';

const TaskModal = ({ active, setActive }: ModalProps) => {
  const [title, setTitle] = useState('');

  const handleClick = () => {
    setActive(false);
  };

  const onTextChanged = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  };

  return (
    <Dialog open={active}>
      <DialogTitle>Create task</DialogTitle>
      <CssBaseline />
      <DialogContent>
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Task title"
          variant="outlined"
          style={{ width: 250 }}
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

export default TaskModal;
