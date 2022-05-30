import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { titleStyle, linkStyle } from '../styles/404/404_style';
import img404 from '../images/404.gif';

export default function ErrorPage() {
  const [seconds, setSeconds] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const interval = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    setTimeout(() => router.push('/'), 3000);
  }, [router]);

  return (
    <>
      <Container sx={titleStyle}>
        <Image src={img404} alt="404" style={{ width: '30%' }} />
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
