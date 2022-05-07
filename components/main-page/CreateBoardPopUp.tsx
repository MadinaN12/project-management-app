import styles from '../../styles/CreatePagePopUp.module.scss';
import { TextareaAutosize, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import InputLabelPart from './InputLabelPart';

export default function CreateBoardPopUp() {
  const [isEmpty, setIsEmpty] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target as HTMLInputElement).value.length < 1 ? setIsEmpty(true) : setIsEmpty(false);

  useEffect(() => inputRef.current.firstChild.focus(), []);

  return (
    <div className={styles.pop_up}>
      <form>
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

        <InputLabelPart />
        <Button variant="contained">Create</Button>
      </form>
      <pre></pre>
    </div>
  );
}
