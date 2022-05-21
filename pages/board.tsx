import { AuthCheck } from '../components/AuthCheck';
import Board from '../components/board';

const AuthBoard = () => {
  return (
    <AuthCheck>
      <Board />
    </AuthCheck>
  );
};

export default AuthBoard;
