import { Button } from '@mui/material';
import { useState } from 'react';
import CreateBoardPopUp from './CreateBoardPopUp';

export default function CreateBtn() {
  const [popUpStatus, setPopUpStatus] = useState(false);

  const handleCreateBtnClick = () => {
    setPopUpStatus(true);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ ml: 2, background: 'rgb(0 190 255)' }}
        size="small"
        onClick={handleCreateBtnClick}
      >
        Create
      </Button>
      {popUpStatus ? <CreateBoardPopUp setPopUpStatus={setPopUpStatus} /> : ''}
    </>
  );
}
