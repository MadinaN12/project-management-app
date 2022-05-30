import { ModalProps } from '../../types/types';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createTask } from '../../api/task/createTask';
import { getBoard } from '../../api/board/getBoard';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';
import TaskModalForm from '../modals/taskModal';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

const TaskModal = ({ active, setActive }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');
  const { colId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const t = router.locale === 'en' ? en : ru;

  const handleClick = async () => {
    const task = {
      title: title,
      description: description,
      userId: user,
    };
    const token = getToken();
    if (token && id) {
      await createTask(task, colId, id, token);
      dispatch(getBoard({ boardId: id, token: token }));
    }
    setActive(false);
    setTitle('');
    setDescription('');
    setUser('');
  };

  const onTextChanged = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  };

  const onDescriptionChanged = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setDescription(target.value);
  };

  return (
    <TaskModalForm
      title={t.board.createTask}
      text={title}
      active={active}
      user={user}
      description={description}
      onTextChanged={onTextChanged}
      setUser={setUser}
      setActive={setActive}
      handleClick={handleClick}
      onDescriptionChanged={onDescriptionChanged}
    />
  );
};

export default TaskModal;
