import { PATH, URL } from '../../utils';

export async function getColumn(columnId: string) {
  try {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ZWRmMjQwYy02YjdlLTQ4MDUtOTcyMi00NGVmYWY4MDk0YTQiLCJsb2dpbiI6ImZha2V1c2VyMDAxIiwiaWF0IjoxNjUxNzU2MzIwfQ.mwukYn23JFDDX2u7Kn94xvP56poGufTrMcsBDHxUf4I`;
    const boardId = '66fef433-3dcc-4501-9bbd-e990dab1c68e';
    const response = await fetch(`${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    throw new Error('not found');
  }
}
