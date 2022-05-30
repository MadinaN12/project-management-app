import { useRouter } from 'next/router';
import { getBoard } from '../../api/board/getBoard';
import { deleteColumn } from '../../api/column/deleteColumn';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ModalProps } from '../../types/types';
import { getToken } from '../../utils';
import ConfirmDialog from '../modals/confirmModal';

const ConfirmModal = ({ active, setActive }: ModalProps) => {
  const { colId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  const handleClose = async () => {
    const token = getToken();
    if (token && id) {
      await deleteColumn(colId, id, token);
      await dispatch(getBoard({ boardId: id, token: token }));
    }
    setActive(false);
  };

  return (
    <ConfirmDialog
      title="You will delete not only the column, but also all the tasks attached to it"
      active={active}
      setActive={setActive}
      handleClose={handleClose}
    />
  );
};

export default ConfirmModal;
