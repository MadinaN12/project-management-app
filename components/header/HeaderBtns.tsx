import { Button } from '@mui/material';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

export default function HeaderBtns({ handleSignOut }: { handleSignOut: VoidFunction }) {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <>
      <Button variant="text" size="small" onClick={() => router.push('/profile')}>
        {t.boards.editBtn}
      </Button>
      <Button variant="contained" size="small" sx={{ mr: 2 }} onClick={handleSignOut}>
        {t.boards.signOut}
      </Button>
    </>
  );
}
