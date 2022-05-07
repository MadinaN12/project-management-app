import { Column } from '../../types/types';
import { URL, PATH } from '../../utils';

export async function createColumn(column: Column) {
  const bordId = 'b9ad1c39-8c83-462f-b95b-ce13457e0714';
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTAzZDUxMy0zM2QyLTRlNGEtOWFiNy0yODhmNzk4YTM5YjciLCJsb2dpbiI6Im10ZXN0dXNlcjAwMSIsImlhdCI6MTY1MTkwOTIyMH0.xnJKGpaTX42Eto5Pa_g76EK_A2o5FTChwblmmQP3WDU`;
  try {
    const response = await fetch(`${URL}/${PATH.BOARDS}/${bordId}/${PATH.COLUMNS}`, {
      method: 'POST',
      headers: {
        ['Authorization']: `Bearer ${token}`,
        ['Accept']: 'application/json',
        ['Content-Type']: 'application/json',
        ['Access-Control-Allow-Origin']: URL,
        ['Vary']: 'Origin',
      },
      body: JSON.stringify(column),
    });

    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
