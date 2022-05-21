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
import { TaskModalProps } from '../../types/types';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateTask } from '../../api/task/updateTask';
import { getBoard } from '../../api/board/getBoard';
import { getToken } from '../../utils';

const UpdateTask = ({ tasks, active, setActive }: TaskModalProps) => {
  const { colId, boardId } = useAppSelector((state) => state.boardReducer);
  const [title, setTitle] = useState(tasks.title);
  const [description, setDescription] = useState(tasks.description);
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const task = {
      title: title,
      order: 1,
      description: description,
      userId: 'ae26d810-ca02-4d08-af57-adf092a9ebc4',
      boardId: boardId,
      columnId: colId,
    };
    const token = getToken();
    if (token) {
      await updateTask(task, colId, tasks.id, boardId, token);
      dispatch(getBoard({ boardId: boardId, token: token }));
    }
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
