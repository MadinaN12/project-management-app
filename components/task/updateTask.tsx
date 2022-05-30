import { TaskModalProps } from '../../types/types';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateTask } from '../../api/task/updateTask';
import { getBoard } from '../../api/board/getBoard';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';
import TaskModalForm from '../modals/taskModal';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

const UpdateTask = ({ tasks, active, setActive }: TaskModalProps) => {
  const { colId, taskOrder } = useAppSelector((state) => state.boardReducer);
  const [title, setTitle] = useState(tasks.title);
  const [user, setUser] = useState(tasks.userId);
  const [description, setDescription] = useState(tasks.description);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const t = router.locale === 'en' ? en : ru;

  const handleClick = async () => {
    const token = getToken();
    if (token && id) {
      const task = {
        title: title,
        order: taskOrder,
        description: description,
        userId: user,
        boardId: id,
        columnId: colId,
      };
      await updateTask(task, colId, tasks.id, id, token);
      dispatch(getBoard({ boardId: id, token: token }));
    }
    setActive(false);
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
      title={t.board.updateTask}
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

export default UpdateTask;
