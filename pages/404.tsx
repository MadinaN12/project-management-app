import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { titleStyle, linkStyle } from '../styles/404/404_style';

export default function ErrorPage() {
  const [seconds, setSeconds] = useState(3);

  const [countStatus, setCountStatus] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!countStatus) {
      setTimeout(() => router.push('/'), 3000);
      if (seconds) setInterval(() => setSeconds((e) => e - 0.5), 1000);
    }
    setCountStatus(true);
  }, [countStatus, router, seconds]);

  return (
    <>
      <Container sx={titleStyle}>
        <Typography variant="h3">Oops, this page not found</Typography>

        <Typography variant="subtitle1" sx={titleStyle}>
          Redirecting to{' '}
          <Link href={'/'} passHref>
            <a style={linkStyle}> main page </a>
          </Link>
          in {seconds} seconds...
        </Typography>
      </Container>
    </>
  );
}
