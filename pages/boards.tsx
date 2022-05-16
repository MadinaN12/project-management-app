import MainPageComponent from '../components/main-page';
import { Container } from '@mui/material';
import { Header } from '../components/header/Header';

export default function MainPage() {
  return (
    <>
      <Header />
      <Container sx={{ mt: '50px' }}>
        <MainPageComponent />
      </Container>
    </>
  );
}
