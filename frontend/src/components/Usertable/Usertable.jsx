import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../app/action-creators/auth.js';

function createData(username, name, surname, mail, role) {
  return { username, name, surname, mail, role };
}

const rows = [
  createData('Nice test', 'Test', 'Test', 'nice@test.com', 'admin'),
  createData('IceCreamSandwich', 'nameT', 'surnameT', 'name@gmail.com', 'user'),
  createData('Eclair', 'nameTh', 'surnameTh', 'name@gmail.com', 'user'),
  createData('Cupcake', 'nameF', 'surnameF', 'name@gmail.com', 'user'),
  createData('Gingerbread', 'nameFi', 'surnameFi', 'name@gmail.com', 'user'),
];

function Usertable() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="left">Ime</TableCell>
            <TableCell align="left">Prezime</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            const dispatch = useDispatch();

            return (
              <TableRow
                key={user._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="left">{user.firstName}</TableCell>
                <TableCell align="left">{user.lastName}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">
                  <Select
                    onChange={(e) => console.log(e.target.value)}
                    id="demo-simple-select"
                    value={user.role}
                    label="Role"
                  >
                    <MenuItem value="admin">admin</MenuItem>
                    <MenuItem value="user">user</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Usertable;
