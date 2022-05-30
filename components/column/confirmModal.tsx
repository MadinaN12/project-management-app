import { useRouter } from 'next/router';
import { getBoard } from '../../api/board/getBoard';
import { deleteColumn } from '../../api/column/deleteColumn';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ModalProps } from '../../types/types';
import { getToken } from '../../utils';
import ConfirmDialog from '../modals/confirmModal';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

const ConfirmModal = ({ active, setActive }: ModalProps) => {
  const { colId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const t = router.locale === 'en' ? en : ru;

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
      title={t.board.confirmCol}
      active={active}
      setActive={setActive}
      handleClose={handleClose}
    />
  );
};

export default ConfirmModal;
