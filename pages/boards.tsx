import MainPageComponent from '../components/main-page';
import { Container } from '@mui/material';

export default function MainPage() {
  return (
    <Container sx={{ mt: '50px' }}>
      <MainPageComponent />
    </Container>
  );
}
