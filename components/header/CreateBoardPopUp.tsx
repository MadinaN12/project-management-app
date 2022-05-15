import styles from '../../styles/header/CreatePagePopUp.module.scss';
import { InputLabel, Input, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import InputLabelPart from './InputLabelPart';
import { postDataBoard } from '../ApiController/PostNewBoard';
import { InputRef } from '../../types/types';

export default function CreateBoardPopUp({
  setPopUpStatus,
}: {
  setPopUpStatus: (value: boolean) => void;
}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const [token, setToken] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target as HTMLInputElement).value.length < 1 ? setIsEmpty(true) : setIsEmpty(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newBoard = {
      title: ((inputRef.current as unknown as InputRef).firstChild as HTMLInputElement).value,
    };

    if (token) postDataBoard(newBoard, token);
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
        <h2 color="error">Create a board</h2>
        <p>Boost your productivity by giving your team members easy access to the board.</p>

        <InputLabel htmlFor="my-input">
          <Input
            placeholder="Title"
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
            {isEmpty && 'Enter the name of your team, company or organization.'}
            {!isEmpty && 'Please enter a title'}
          </FormHelperText>
        </InputLabel>

        <InputLabelPart textAreaRef={textAreaRef} />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </form>
      <pre onClick={handleCloseBtn}></pre>
    </div>
  );
}
