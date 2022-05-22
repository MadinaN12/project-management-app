import { useEffect, useState } from 'react';
import { getUserInfo } from '../ApiController/configureUserInfo';
import AlterUser from './alterUserInfo';
import UserInfo from './userInfo';

export default function UserComponent() {
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      const id = localStorage.getItem('userId') || '';
      const res = await getUserInfo(localStorage.getItem('token') as string, id);
      if (res) setData(res);
    };
    getDatas();
  }, [data]);

  return (
    <>
      <UserInfo data={data} setIsEditing={setIsEditing} />
      {!isEditing ? '' : <AlterUser data={data} control={{ isEditing, setIsEditing, setData }} />}
    </>
  );
}
