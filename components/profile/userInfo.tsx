import { Box, Typography } from '@mui/material';
import { style } from '../../styles/user/UserProfile';
import { UserProfile } from '../../types/types';

export default function UserInfo({
  data,
}: {
  data: UserProfile;
  setIsEditing: (arg0: boolean) => void;
}) {
  return (
    <>
      {data.name ? (
        <>
          <Box sx={style.box}>
            <Box sx={style.userTitleBox}>
              <Typography variant="h3"> {(data.name as string)[0].toUpperCase()}</Typography>
            </Box>
          </Box>
          <Typography sx={style.word} variant="h2">
            {data.name}
          </Typography>
          <Typography sx={{ textAlign: 'center' }} variant="subtitle1">
            @{data.login}
          </Typography>
        </>
      ) : (
        <Typography variant={'subtitle2'} sx={{ textAlign: 'center' }}>
          Loading
        </Typography>
      )}
    </>
  );
}
