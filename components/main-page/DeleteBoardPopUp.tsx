import { Button, Modal, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Board } from '../../types/Types';
import { deleteBoard } from './PostNewBoard';
import { refreshBoard } from '../../stores/boards/slices';

export default function DeleteBoardPopUp({
  setStatus,
  board,
}: {
  setStatus: unknown;
  board: Board;
}) {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI';
  const dispatch = useDispatch();

  const handleClose = () => {
    deleteBoard(board, token);
    setStatus(false);
    dispatch(refreshBoard('a'));
  };

  const boxStyle = {
    width: 400,
    height: 200,
    backgroundColor: 'rgb(255 255 255)',
    m: '10% auto',
  };

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
            Deleting the board
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Are you sure to delete the current board?
          </Typography>
          <Button variant="contained" onClick={handleClose}>
            DElete
          </Button>
        </Box>
      </Modal>
    </>
  );
}
