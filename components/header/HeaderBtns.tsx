import { Button } from '@mui/material';
import router from 'next/router';

export default function HeaderBtns({ handleSignOut }: { handleSignOut: VoidFunction }) {
  return (
    <>
      <Button variant="text" size="small" onClick={() => router.push('/')}>
        Edit Profile
      </Button>
      <Button variant="contained" size="small" onClick={handleSignOut}>
        Sign out
      </Button>
    </>
  );
}
