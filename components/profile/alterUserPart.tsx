import { style } from '../../styles/user/UserProfile';
import { PartUserEditProps, UserProfileData } from '../../types/types';
import { Input, FormLabel } from '@mui/material';

export default function PartUserEdit({ userInfo, configureUser }: PartUserEditProps) {
  return (
    <>
      <Input
        value={(userInfo as UserProfileData).name}
        sx={style.input}
        onChange={configureUser.handleChangeTitle}
        required
      />
      <FormLabel sx={style.label}>name</FormLabel>
      <Input
        value={(userInfo as UserProfileData).login}
        sx={style.input}
        onChange={configureUser.handleChangeLogin}
        required
      />
      <FormLabel sx={style.label}>login</FormLabel>
      <Input
        value={(userInfo as UserProfileData).password}
        sx={style.input}
        onChange={configureUser.handleChangePassword}
        required
      />
    </>
  );
}
