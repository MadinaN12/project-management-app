import { Typography } from '@mui/material';
import React, { useState } from 'react';
import TitleInput from './titleInput';

const Title = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const typogrSx = {
    width: '100%',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <>
      {open ? (
        <TitleInput title={newTitle} setOpen={setOpen} setNewTitle={setNewTitle} />
      ) : (
        <Typography onClick={() => setOpen(!open)} sx={typogrSx}>
          {newTitle}
        </Typography>
      )}
    </>
  );
};

export default Title;
