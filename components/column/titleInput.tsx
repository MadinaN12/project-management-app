import { Button, InputBase } from '@mui/material';
import React, { useState } from 'react';

export type TitleInputProps = {
  title: string;
  setOpen: (value: boolean) => void;
  setNewTitle: (value: string) => void;
};

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

  return (
    <>
      <div>
        <Button onClick={() => setOpen(false)}>Colose</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
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
