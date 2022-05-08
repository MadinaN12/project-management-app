import { FormHelperText, InputLabel, TextareaAutosize } from '@mui/material';
import styles from '../../styles/CreatePagePopUp.module.scss';

export default function InputLabelPart({ textAreaRef }) {
  return (
    <>
      <InputLabel htmlFor="my-input">
        <TextareaAutosize
          className={styles.input}
          aria-label="empty textarea"
          minRows={5}
          placeholder="Empty"
          ref={textAreaRef}
        />
        <FormHelperText id="my-helper-text">
          Tell the participants a little about the board.
        </FormHelperText>
      </InputLabel>
    </>
  );
}
