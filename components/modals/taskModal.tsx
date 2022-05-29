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
import UserList from '../task/userList';
import { TaskPropsModal } from '../../types/types';

const TaskModalForm = ({
  title,
  text,
  active,
  user,
  description,
  onTextChanged,
  setUser,
  setActive,
  handleClick,
  onDescriptionChanged,
}: TaskPropsModal) => {
  return (
    <Dialog open={active}>
      <DialogTitle>{title}</DialogTitle>
      <CssBaseline />
      <DialogContent>
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Task title"
          variant="outlined"
          style={{ width: 250 }}
          value={text}
          onChange={onTextChanged}
        />
      </DialogContent>
      <UserList user={user} setUser={setUser} />
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

export default TaskModalForm;
