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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createTask } from '../../api/task/createTask';
import { getTasks } from '../../api/task/getAllTasks';

const TaskModal = ({ active, setActive }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { colId } = useAppSelector((state) => state.boardReducer);
  const { tasks } = useAppSelector((state) => state.taskReducer);
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const task = {
      title: title,
      order: tasks.length + 1,
      description: description,
      userId: 'ae26d810-ca02-4d08-af57-adf092a9ebc4',
    };
    await createTask(task, colId);
    dispatch(getTasks(colId));
    setActive(false);
    setTitle('');
    setDescription('');
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

export default TaskModal;
