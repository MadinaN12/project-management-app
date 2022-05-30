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
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <Dialog open={active}>
      <DialogTitle>{title}</DialogTitle>
      <CssBaseline />
      <DialogContent>
        <TextField
          margin="dense"
          id="outlined-basic"
          label={t.board.taskTitle}
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
          placeholder={t.board.description}
          style={{ width: 250, height: 66, overflow: 'auto' }}
          value={description}
          onChange={onDescriptionChanged}
        />
      </DialogContent>
      <DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setActive(false)}>
            {t.board.cancelBtn}
          </Button>
          <Button variant="contained" onClick={handleClick}>
            {t.board.submitBtn}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModalForm;
