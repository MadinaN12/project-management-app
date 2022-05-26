import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { style } from '../../styles/user/UserProfile';
import { getUserInfo } from '../ApiController/configureUserInfo';
import AlterUser from './alterUserInfo';
import RemoveUser from './deleteUserInfo';
import StatisticsUser from './StatisticsUser';
import UserInfo from './userInfo';

export default function UserComponent() {
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const refreshed = () => setRefresh(false);

  useEffect(() => {
    const getDatas = async () => {
      const id = localStorage.getItem('userId') || '';
      const res = await getUserInfo(localStorage.getItem('token') as string, id);
      if (res) setData(res);
      refreshed();
    };
    if (refresh) getDatas();
  }, [data]);

  return (
    <>
      <UserInfo data={data} setIsEditing={setIsEditing} />
      {!isEditing ? (
        ''
      ) : (
        <AlterUser data={data} control={{ isEditing, setIsEditing, setData, setRefresh }} />
      )}
      <Box sx={style.flex}>
        <Button variant="contained" sx={style.button} onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={style.button}
          onClick={() => setIsRemoving(true)}
        >
          Delete
        </Button>
      </Box>
      <RemoveUser controlRemove={{ setIsRemoving, isRemoving }} />
      <div></div>
      <StatisticsUser />
    </>
  );
}
