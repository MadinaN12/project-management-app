import { AuthCheck } from '../components/AuthCheck';
import Board from '../components/board';

const MyApp = () => {
  return (
    <AuthCheck>
      <Board />
    </AuthCheck>
  );
};

export default MyApp;
