import { Grid } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { link } from '../styles/welcome/localization';

const LocalSwitcher = ({ path }: { path: string }) => {
  const router = useRouter();
  const en = router.locale === 'en' ? link.active : link.notActive;
  const ru = router.locale === 'ru' ? link.active : link.notActive;

  return (
    <Grid>
      <Link href={path} locale="en">
        <a style={en}>En</a>
      </Link>
      |
      <Link href={path} locale="ru">
        <a style={ru}>Ru</a>
      </Link>
    </Grid>
  );
};

export default LocalSwitcher;
