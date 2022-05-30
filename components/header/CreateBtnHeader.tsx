import { Button } from '@mui/material';
import { useState } from 'react';
import CreateBoardPopUp from './CreateBoardPopUp';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

export default function CreateBtn() {
  const [popUpStatus, setPopUpStatus] = useState(false);
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const handleCreateBtnClick = () => {
    setPopUpStatus(true);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ ml: 2, background: '#1769aa' }}
        size="small"
        onClick={handleCreateBtnClick}
      >
        {t.boards.createBtn}
      </Button>
      {popUpStatus ? <CreateBoardPopUp setPopUpStatus={setPopUpStatus} /> : ''}
    </>
  );
}
