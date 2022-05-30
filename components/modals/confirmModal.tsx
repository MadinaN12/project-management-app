import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { ConfirmProps } from '../../types/types';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

const ConfirmDialog = ({ title, active, setActive, handleClose }: ConfirmProps) => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <Dialog
      open={active}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{t.board.confirmQ}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{title}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={handleClose}>
          {t.board.deleteBtn}
        </Button>
        <Button variant="contained" onClick={() => setActive(false)} autoFocus>
          {t.board.closeBtn}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
