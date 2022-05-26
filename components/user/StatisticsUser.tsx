import { useEffect, useState } from 'react';
import { ColumnResponse } from '../../types/types';
import { getBoards, getLastColumn, getLastTask } from '../ApiController/userBoards';

export default function StatisticsUser() {
  const [boardsCount, setBoardsCount] = useState(0);
  // const [lastBoard, setLastBoard] = useState({});
  // const [lastColumn, setLastColumn] = useState({});
  // const [lastTask, setLastTask] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    // const id = localStorage.getItem('userId');

    getBoards(token as string).then((i) => {
      setBoardsCount(i.length);
      const lastBoard = i[i.length - 1];
      // setLastBoard(lastBoard);

      getLastColumn(token as string, lastBoard.id).then((i) => {
        if (i) {
          // setLastColumn(i);
          const columnId = (i as unknown as ColumnResponse).id;
          getLastTask(token as string, lastBoard.id as string, columnId)
            .then
            // (i) => {
            //  setLastTask(i[i.length - 1])
            // }
            ();
        }
      });
    });
  }, []);
  return <>boards: {boardsCount}</>;
}
