import React, { SetStateAction, useEffect, useState } from 'react';
import { Box, Button, Input, Modal, FormLabel, Typography, FilledInput } from '@mui/material';
import { UserProfile, UserProfileData } from '../../types/types';
import { style } from '../../styles/user/UserProfile';
// import userStyle from '../../styles/user/UserProfile.module.scss';
import { updateUserInfo } from '../ApiController/configureUserInfo';

export default function AlterUser({
  data,
  control,
}: {
  data: UserProfile;
  control: {
    isEditing: boolean;
    setIsEditing: (arg0: boolean) => void;
    setData: (arg0: Array<object> | object) => void;
  };
}) {
  const [userInfo, setUserinfo] = useState({ name: '', login: '', password: '' });

  const handleChangeTitle = (e: { target: { value: SetStateAction<string> } }) =>
    setUserinfo((pre) => ({ ...pre, name: e.target.value as string }));

  const handleChangeLogin = (e: { target: { value: SetStateAction<string> } }) =>
    setUserinfo((pre) => ({ ...pre, login: e.target.value as string }));

  const handleChangePassword = (e: { target: { value: SetStateAction<string> } }) =>
    setUserinfo((pre) => ({ ...pre, password: e.target.value as string }));

  const handleSubmit = () => {
    const updatedUser = {
      login: (userInfo as UserProfileData).login,
      name: (userInfo as UserProfileData).name,
      password: (userInfo as UserProfileData).password,
    };

    console.log(updatedUser);

    // const id = localStorage.getItem('userId'),
    //   token = localStorage.getItem('token') as string;
    // if (id && token) {
    //   const res = updateUserInfo(token, id, updatedUser);
    //   if (res) control.setData(res);
    // }
    // control.setIsEditing(false);
  };

  useEffect(() => {
    if (data.name)
      setUserinfo((pre) => ({ ...pre, name: data.name as string, login: data.login as string }));
    else {
      setUserinfo({ name: 'loading', login: 'loading', password: 'loading' });
    }
    console.log(data);
  }, [data, data.name]);

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
          <Input
            value={(userInfo as UserProfileData).name}
            sx={style.input}
            onChange={handleChangeTitle}
          />
          <FormLabel sx={style.label}>name</FormLabel>
          <Input
            value={(userInfo as UserProfileData).login}
            sx={style.input}
            onChange={handleChangeLogin}
          />
          <FormLabel sx={style.label}>login</FormLabel>
          <Input
            value={(userInfo as UserProfileData).password}
            sx={style.input}
            onChange={handleChangePassword}
          />
          <FormLabel sx={style.label}>password</FormLabel>
          <Button variant="contained" sx={{ m: '2% 0 0' }} onClick={handleSubmit}>
            Accept
          </Button>
          <Button
            variant="outlined"
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
