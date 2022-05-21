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
import { getBoard } from '../../api/board/getBoard';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';

const TaskModal = ({ active, setActive }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { colId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  const handleClick = async () => {
    const task = {
      title: title,
      order: 1,
      description: description,
      userId: 'b0c79d80-66b0-4117-803b-cb4507013085',
    };
    const token = getToken();
    if (token && id) {
      await createTask(task, colId, id, token);
      dispatch(getBoard({ boardId: id, token: token }));
    }
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
