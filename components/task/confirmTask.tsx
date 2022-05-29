import { useRouter } from 'next/router';
import { getBoard } from '../../api/board/getBoard';
import { deleteTask } from '../../api/task/deleteTask';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TaskModalProps } from '../../types/types';
import { getToken } from '../../utils';
import ConfirmDialog from '../modals/confirmModal';

const ConfirmTask = ({ tasks, active, setActive }: TaskModalProps) => {
  const { colId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  const handleClose = async () => {
    const token = getToken();
    if (token && id) {
      await deleteTask(colId, tasks.id, id, token);
      dispatch(getBoard({ boardId: id, token: token }));
    }
    setActive(false);
  };

  return (
    <ConfirmDialog
      title="You will delete this task."
      active={active}
      setActive={setActive}
      handleClose={handleClose}
    />
  );
};

export default ConfirmTask;
