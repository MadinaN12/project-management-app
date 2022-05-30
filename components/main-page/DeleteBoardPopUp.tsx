import { Button, Modal, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Board } from '../../types/types';
import { deleteBoard } from '../ApiController/PostNewBoard';
import { refreshBoard } from '../../stores/boards/slices';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

export default function DeleteBoardPopUp({
  setStatus,
  board,
}: {
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  board: Board;
}) {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const handleSubmit = () => {
    deleteBoard(board, token as string);
    setStatus(false);
    dispatch(refreshBoard('a'));
    setTimeout(() => dispatch(refreshBoard('a')), 500);
  };

  const boxStyle = {
    width: 400,
    height: 160,
    backgroundColor: 'rgb(255 255 255)',
    m: '10% auto 1%',
  };

  const handleClose = () => setStatus(false);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle} padding="1%" borderRadius={5}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 1 }}>
            {t.boards.modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            {t.boards.modalPh}
          </Typography>
          <Button color="error" variant="contained" onClick={handleSubmit}>
            {t.boards.modalBtn}
          </Button>
        </Box>
      </Modal>
    </>
  );
}
