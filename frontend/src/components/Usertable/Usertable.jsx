import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(username, name, surname, mail, role) {
  return { username, name, surname, mail, role };
}

const rows = [
  createData('FrozenYoghurt', 'nameO', 'surnameO', 'name@gmail.com', 'admin'),
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
            <TableCell align="right">Ime</TableCell>
            <TableCell align="right">Prezime</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">{row.mail}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Usertable;
