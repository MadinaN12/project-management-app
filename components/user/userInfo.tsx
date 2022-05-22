import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { style } from '../../styles/user/UserProfile';
import { UserProfile } from '../../types/types';

export default function UserInfo({
  data,
  setIsEditing,
}: {
  data: UserProfile;
  setIsEditing: (arg0: boolean) => void;
}) {
  useEffect(() => {
    // setName(name);
  }, []);

  return (
    <>
      {data.name ? (
        <>
          <Box sx={style.box}>
            <Box sx={style.userTitleBox}>
              <Typography variant="h4"> {(data.name as string)[0].toUpperCase()}</Typography>
            </Box>
          </Box>
          <Typography sx={{ textAlign: 'center' }} variant="h5">
            {data.name}
          </Typography>
          <Typography sx={{ textAlign: 'center' }} variant="subtitle1">
            @{data.login}
          </Typography>
          <Button variant="outlined" sx={style.button} onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </>
      ) : (
        <Typography variant={'subtitle2'} sx={{ textAlign: 'center' }}>
          Loading
        </Typography>
      )}
    </>
  );
}
