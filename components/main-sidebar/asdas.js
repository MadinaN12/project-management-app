import { useEffect } from 'react';

export default function Assd() {
  useEffect(() => {
    async function fetchs() {
      const response = await fetch('https://morning-spire-63546.herokuapp.com/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI`,
        },
      });
      const res = await response.json();
      console.log(res);
      return res;
    }
    fetchs();
  }, []);
  return <aside>asdas</aside>;
}

// {id: '3579eb00-5895-44ae-9d84-bb31b80f43bd', name: 'Name', login: 'name'}
// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI';
