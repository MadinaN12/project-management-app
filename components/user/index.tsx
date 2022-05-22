import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { style } from '../../styles/user/UserProfile';
import { getUserInfo } from '../ApiController/configureUserInfo';
import AlterUser from './alterUserInfo';
import UserInfo from './userInfo';

export default function UserComponent() {
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  console.log(data);

  useEffect(() => {
    const getDatas = async () => {
      const id = localStorage.getItem('userId') || '';
      const res = await getUserInfo(localStorage.getItem('token') as string, id);
      if (res) setData(res);
    };
    getDatas();
  }, []);

  return (
    <>
      <Box sx={style.box}>
        <UserInfo data={data} setIsEditing={setIsEditing} />
        {!isEditing ? '' : <AlterUser data={data} control={{ isEditing, setIsEditing, setData }} />}
      </Box>
    </>
  );
}
