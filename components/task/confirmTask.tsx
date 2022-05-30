import { useRouter } from 'next/router';
import { getBoard } from '../../api/board/getBoard';
import { deleteTask } from '../../api/task/deleteTask';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TaskModalProps } from '../../types/types';
import { getToken } from '../../utils';
import ConfirmDialog from '../modals/confirmModal';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

const ConfirmTask = ({ tasks, active, setActive }: TaskModalProps) => {
  const { colId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const t = router.locale === 'en' ? en : ru;

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
      title={t.board.confirmTask}
      active={active}
      setActive={setActive}
      handleClose={handleClose}
    />
  );
};

export default ConfirmTask;
