import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { footerStyle } from '../../styles/footer';
import Logo from '../../images/rs_school_js.svg';
import { dataUsers } from './dataUsers';

export default function Footer() {
  return (
    <footer style={footerStyle.footer}>
      <Box sx={footerStyle.words}>
        {dataUsers.map((user) => (
          <Link underline="hover" sx={footerStyle.link} href={user.link} key={user.id}>
            {user.name}
          </Link>
        ))}
      </Box>
      <Box sx={footerStyle.box}>
        <Link href="https://rs.school/react/" sx={{ width: '100px' }}>
          <Image style={footerStyle.img} src={Logo} alt="rs" />
        </Link>
        <Typography sx={{ m: '14px' }}>2022.05</Typography>
      </Box>
    </footer>
  );
}
