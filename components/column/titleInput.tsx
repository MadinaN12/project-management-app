import { Button, Grid, InputBase } from '@mui/material';
import React, { useState } from 'react';
import { TitleInputProps } from '../../types/types';
import { updateColumn } from '../../api/column/updateColumn';
import { useAppSelector } from '../../hooks/redux';
import { column } from '../../styles/board/styledBoard';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';

const TitleInput = ({ title, setOpen, setNewTitle }: TitleInputProps) => {
  const [titleInput, setTitleInput] = useState(title);
  const { colId, colOrder } = useAppSelector((state) => state.boardReducer);
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async () => {
    const column = { title: titleInput, order: colOrder };
    const token = getToken();
    token && id && (await updateColumn(column, colId, id, token));
    setNewTitle(titleInput);
    setOpen(false);
  };

  return (
    <>
      <Grid container sx={column.headerGrid}>
        <Button variant="outlined" sx={column.btn} onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          variant="outlined"
          sx={column.btn}
          size="small"
          color="success"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      <InputBase
        sx={column.input}
        autoFocus
        onChange={(e) => setTitleInput(e.target.value)}
        value={titleInput}
      />
    </>
  );
};

export default TitleInput;
