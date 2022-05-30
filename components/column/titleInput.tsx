import { Button, Grid, InputBase } from '@mui/material';
import React, { useState } from 'react';
import { TitleInputProps } from '../../types/types';
import { updateColumn } from '../../api/column/updateColumn';
import { useAppSelector } from '../../hooks/redux';
import { column } from '../../styles/board/styledBoard';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';
import PopupNotification from '../PopupNotification';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

const TitleInput = ({ title, setOpen, setNewTitle }: TitleInputProps) => {
  const [titleInput, setTitleInput] = useState(title);
  const [errorNotification, setErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { colId, colOrder } = useAppSelector((state) => state.boardReducer);
  const router = useRouter();
  const { id } = router.query;
  const t = router.locale === 'en' ? en : ru;

  const handleSubmit = async () => {
    setNewTitle(titleInput);
    try {
      const column = { title: titleInput, order: colOrder };
      const token = getToken();
      if (token && id) {
        const response = await updateColumn(column, colId, id, token);
        if ('message' in response) {
          setErrorMessage(`${response.statusCode} ${response.message}`);
          throw new Error(response.message);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorNotification(true);
        setTimeout(() => setErrorNotification(false), 3000);
        setNewTitle(title);
      }
    }
    setTimeout(() => setOpen(false), 1000);
  };

  return (
    <>
      <Grid container sx={column.headerGrid}>
        <Button variant="outlined" sx={column.btn} onClick={() => setOpen(false)}>
          {t.board.closeBtn}
        </Button>
        <Button
          variant="outlined"
          sx={column.btn}
          size="small"
          color="success"
          onClick={handleSubmit}
        >
          {t.board.submitBtn}
        </Button>
      </Grid>
      <InputBase
        sx={column.input}
        autoFocus
        onChange={(e) => setTitleInput(e.target.value)}
        value={titleInput}
      />
      <PopupNotification errorNotification={errorNotification} errorMessage={errorMessage} />
    </>
  );
};

export default TitleInput;
