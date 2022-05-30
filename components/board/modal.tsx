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
import { useAppDispatch } from '../../hooks/redux';
import { getBoard } from '../../api/board/getBoard';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';
import PopupNotification from '../PopupNotification';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

const Modal = ({ active, setActive }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [errorNotification, setErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const t = router.locale === 'en' ? en : ru;

  const handleClick = async () => {
    try {
      const token = getToken();
      const column = { title: title };
      if (token && id) {
        const response = await createColumn(column, id, token);
        dispatch(getBoard({ boardId: id, token: token }));
        if ('message' in response) {
          setErrorMessage(`${response.statusCode} ${response.message}`);
          throw new Error(response.message);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorNotification(true);
        setTimeout(() => setErrorNotification(false), 3000);
      }
    }
    setActive(false);
    setTitle('');
  };

  const onTextChanged = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  };

  return (
    <>
      <Dialog open={active}>
        <DialogTitle>{t.board.createCol}</DialogTitle>
        <CssBaseline />
        <DialogContent>
          <TextField
            margin="dense"
            id="outlined-basic"
            label={t.boards.titlePl}
            variant="outlined"
            value={title}
            onChange={onTextChanged}
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
      <PopupNotification errorNotification={errorNotification} errorMessage={errorMessage} />
    </>
  );
};

export default Modal;
