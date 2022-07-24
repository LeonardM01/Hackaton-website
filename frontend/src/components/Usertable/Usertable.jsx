import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.surname}</TableCell>
              <TableCell align="left">{row.mail}</TableCell>
              <TableCell align="left">
                <Select
                  id="demo-simple-select"
                  value={row.role}
                  label="Role"
                  onChange={() => {}}
                >
                  <MenuItem value="admin">admin</MenuItem>
                  <MenuItem value="user">user</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Usertable;
