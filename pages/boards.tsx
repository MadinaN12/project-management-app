import MainPageComponent from '../components/main-page';
import { Container } from '@mui/material';
import { Header } from '../components/header/Header';

export default function MainPage() {
  return (
    <>
      <Header path="/boards" />
      <Container sx={{ mt: '50px' }}>
        <MainPageComponent />
      </Container>
    </>
  );
}
