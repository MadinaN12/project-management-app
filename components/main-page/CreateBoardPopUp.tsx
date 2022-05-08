import styles from '../../styles/CreatePagePopUp.module.scss';
import { InputLabel, Input, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import InputLabelPart from './InputLabelPart';
import { postDataBoard } from './PostNewBoard';
type InputRef = {
  firstChild?: HTMLElement;
};

export default function CreateBoardPopUp() {
  const [isEmpty, setIsEmpty] = useState(false);
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target as HTMLInputElement).value.length < 1 ? setIsEmpty(true) : setIsEmpty(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newBoard = {
      title: ((inputRef.current as unknown as InputRef).firstChild as HTMLInputElement).value,
      // info: (textAreaRef.current as unknown as HTMLInputElement).value,
    };

    postDataBoard(newBoard, token);
  };

  useEffect(
    () => ((inputRef.current as unknown as InputRef).firstChild as HTMLInputElement).focus(),
    []
  );

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
      <pre></pre>
    </div>
  );
}
