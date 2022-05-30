import React, { SetStateAction, useEffect, useState } from 'react';
import { Box, Button, Modal, FormLabel, Typography } from '@mui/material';
import { UserProfileData, UserProfileProps } from '../../types/types';
import { style } from '../../styles/user/UserProfile';
import { updateUserInfo } from '../ApiController/configureUserInfo';
import PartUserEdit from './alterUserPart';

export default function AlterUser({ data, control }: UserProfileProps) {
  const defaultLoading = { name: 'Loading', login: '', password: '' };
  const [userInfo, setUserinfo] = useState(defaultLoading);

  const handleChangeTitle = (e: { target: { value: SetStateAction<string> } }) =>
    setUserinfo((pre) => ({ ...pre, name: (e.target.value as string).trim() }));

  const handleChangeLogin = (e: { target: { value: SetStateAction<string> } }) =>
    setUserinfo((pre) => ({ ...pre, login: (e.target.value as string).trim() }));

  const handleChangePassword = (e: { target: { value: SetStateAction<string> } }) =>
    setUserinfo((pre) => ({ ...pre, password: (e.target.value as string).trim() as string }));

  const handleSubmit = () => {
    const updatedUser = {
      login: (userInfo as UserProfileData).login?.trim(),
      name: (userInfo as UserProfileData).name?.trim(),
      password: (userInfo as UserProfileData).password?.trim(),
    };

    const id = localStorage.getItem('userId'),
      token = localStorage.getItem('token') as string;
    if (id && token) {
      const res = updateUserInfo(token, id, updatedUser);
      if (res) control.setData(res);
    }
    control.setIsEditing(false);
    (control.setRefresh as (arg: boolean) => void)(true);
  };

  useEffect(() => {
    if (data.name)
      setUserinfo((pre) => ({ ...pre, name: data.name as string, login: data.login as string }));
    else setUserinfo({ name: 'loading', login: 'loading', password: 'loading' });
  }, [data.login, data.name]);

  return (
    <>
      <Modal
        open={control.isEditing}
        onClose={() => control.setIsEditing(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.popUp}>
          <Typography variant="h6">Edit profile</Typography>
          <PartUserEdit
            userInfo={userInfo}
            configureUser={{ handleChangeLogin, handleChangePassword, handleChangeTitle }}
          />
          <FormLabel sx={style.label}>password</FormLabel>
          <Button variant="contained" sx={{ m: '2% 0 0' }} onClick={handleSubmit}>
            Accept
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ m: '2% 0 0 2%' }}
            onClick={() => control.setIsEditing(false)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
}
