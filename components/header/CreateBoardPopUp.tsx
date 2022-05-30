import styles from '../../styles/header/CreatePagePopUp.module.scss';
import { InputLabel, Input, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import InputLabelPart from './InputLabelPart';
import { postDataBoard } from '../ApiController/PostNewBoard';
import { InputRef } from '../../types/types';
import { useDispatch } from 'react-redux';
import { refreshBoard } from '../../stores/boards/slices';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

export default function CreateBoardPopUp({
  setPopUpStatus,
}: {
  setPopUpStatus: (value: boolean) => void;
}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const [token, setToken] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target as HTMLInputElement).value.length < 1 ? setIsEmpty(true) : setIsEmpty(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newBoard = {
      title: ((inputRef.current as unknown as InputRef).firstChild as HTMLInputElement).value,
    };

    if (token) {
      postDataBoard(newBoard, token);
      dispatch(refreshBoard('a'));
      setTimeout(() => dispatch(refreshBoard('a')), 200);
    }
    setPopUpStatus(false);
  };

  useEffect(() => {
    if (window != undefined) setToken(localStorage.getItem('token') as string);
    ((inputRef.current as unknown as InputRef).firstChild as HTMLInputElement).focus();
  }, []);

  const handleCloseBtn = () => {
    setPopUpStatus(false);
  };

  return (
    <div className={styles.pop_up}>
      <form onSubmit={handleSubmit}>
        <h2 color="error">{t.boards.createTitle}</h2>
        <p>{t.boards.createPh}</p>

        <InputLabel htmlFor="my-input">
          <Input
            placeholder={t.boards.titlePl}
            className={styles.input}
            margin="dense"
            type="text"
            required
            ref={inputRef}
            onChange={handleInputChange}
            autoFocus
            error={isEmpty ? true : false}
          />
          <FormHelperText>
            {isEmpty && t.boards.ifEmpty}
            {!isEmpty && t.boards.titleOpt}
          </FormHelperText>
        </InputLabel>

        <InputLabelPart textAreaRef={textAreaRef} />
        <Button type="submit" variant="contained">
          {t.boards.createBtn}
        </Button>
      </form>
      <pre onClick={handleCloseBtn}></pre>
    </div>
  );
}
