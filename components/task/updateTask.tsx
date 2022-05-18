import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ModalProps } from '../../types/types';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { updateTask } from '../../api/task/updateTask';

const UpdateTask = ({ active, setActive }: ModalProps) => {
  const { taskId } = useAppSelector((state) => state.taskReducer);
  const [title, setTitle] = useState(taskId);
  const [description, setDescription] = useState('');

  const handleClick = () => {
    const task = {
      title: title,
      order: 0,
      description: description,
      userId: '1234',
    };
    updateTask(task);
    setActive(false);
  };

  const onTextChanged = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  };

  const onDescriptionChanged = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setDescription(target.value);
  };

  return (
    <Dialog open={active}>
      <DialogTitle>Update task</DialogTitle>
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
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Description"
          style={{ width: 250, height: 66, overflow: 'auto' }}
          value={description}
          onChange={onDescriptionChanged}
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

export default UpdateTask;
