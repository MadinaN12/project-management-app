import { Provider } from 'react-redux';
import MainPageComponent from '../components/main-page';
import { store } from '../stores/boards/store';

export default function MainPage() {
  return (
    <div>
      <MainPageComponent />
    </div>
  );
}
