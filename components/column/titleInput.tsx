import { Button, Grid, InputBase } from '@mui/material';
import React, { useState } from 'react';
import { TitleInputProps } from '../../types/types';

const TitleInput = ({ title, setOpen, setNewTitle }: TitleInputProps) => {
  const [titleInput, setTitleInput] = useState(title);

  const handleSubmit = () => {
    setNewTitle(titleInput);
    setOpen(false);
  };

  const inputSx = {
    maxHeight: '28px',
    border: '1px solid blue',
    borderRadius: 1,
    backgroundColor: 'white',
  };

  const gridSx = {
    displayFlex: 'space-between',
    justifyContent: 'space-around',
  };

  const btnSx = {
    fontSize: '10px',
    maxWidth: '20px',
    padding: '6px 0px',
  };

  return (
    <>
      <Grid container sx={gridSx}>
        <Button variant="contained" sx={btnSx} onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button variant="contained" sx={btnSx} size="small" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
      <InputBase
        sx={inputSx}
        autoFocus
        onChange={(e) => setTitleInput(e.target.value)}
        value={titleInput}
      />
    </>
  );
};

export default TitleInput;
