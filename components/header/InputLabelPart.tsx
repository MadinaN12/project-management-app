import { FormHelperText, InputLabel, TextareaAutosize } from '@mui/material';
import { Ref } from 'react';
import styles from '../../styles/header/CreatePagePopUp.module.scss';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

export default function InputLabelPart({
  textAreaRef,
}: {
  textAreaRef: Ref<HTMLTextAreaElement> | undefined;
}) {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <>
      <InputLabel htmlFor="my-input">
        <TextareaAutosize
          className={styles.input}
          aria-label="empty textarea"
          minRows={5}
          placeholder={t.boards.boardDesc}
          ref={textAreaRef}
        />
        <FormHelperText id="my-helper-text">{t.boards.boardOpt}</FormHelperText>
      </InputLabel>
    </>
  );
}
