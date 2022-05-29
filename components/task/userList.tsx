import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/users/getAllUsers';
import { SelectProps, Users } from '../../types/types';
import { getToken } from '../../utils';

const UserList = ({ user, setUser }: SelectProps) => {
  const [users, setUsers] = useState<Users[]>();

  useEffect(() => {
    const token = getToken();
    async function fetchData() {
      token && setUsers(await getAllUsers(token));
    }
    fetchData();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };

  return (
    <FormControl style={{ width: 250, alignSelf: 'center' }}>
      <InputLabel id="demo-simple-select-label">Assign</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Assign"
        value={user}
        onChange={handleChange}
      >
        {users &&
          users.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default UserList;
