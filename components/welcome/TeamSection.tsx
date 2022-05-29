import { Avatar, Stack } from '@mui/material';

export const TeamSection = () => {
  return (
    <Stack direction="row" spacing={5}>
      <Avatar alt="Remy Sharp" src="/shamshod.jpg" sx={{ width: 150, height: 150 }} />
      <Avatar alt="Remy Sharp" src="/madina.jpg" sx={{ width: 150, height: 150 }} />
      <Avatar alt="Remy Sharp" src="/batyr.jpg" sx={{ width: 150, height: 150 }} />
    </Stack>
  );
};
