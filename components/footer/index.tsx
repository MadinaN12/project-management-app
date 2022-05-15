import { Link } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { footerStyle } from '../../styles/footer';
import Logo from '../../images/rs_school_js.svg';

export default function Footer() {
  const dataUsers = [
    { link: 'https://github.com/MadinaN12', id: '1', name: 'MadinaN12' },
    { link: 'https://github.com/ButerBrot359', id: '2', name: 'ButterBrot359' },
    { link: 'https://github.com/ShamshodIsayev', id: '3', name: 'ShamshodIsayev' },
  ];
  return (
    <>
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
        </Box>
      </footer>
    </>
  );
}
