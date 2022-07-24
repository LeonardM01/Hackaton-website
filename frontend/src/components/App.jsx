import React from 'react';
import { CssBaseline, Button, Typography, Modal, TextField, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux';
import WarningIcon from '@mui/icons-material/Warning';
import { createReport } from '../app/action-creators/reports.js';

import useStyles from './styles.js';
import { Navbar, Footer, About, Login, Signup, Dashboard, Home } from './index.js';

function App() {
  const classes = useStyles();
  // report
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
  const [newReport, setNewReport] = React.useState({ title: '', body: '' });
  const createNewReport = async () => {
    await dispatch(createReport({ ...newReport, personId: user.result._id }));
    handleClose();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Button disableRipple variant="contained" color="success" onClick={handleOpen} className={classes.chatButtonWarning}>
        <WarningIcon className={classes.chatIconWarning} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className={classes.modal}>
          <Typography className={classes.modalTitle}>Prijava problema</Typography>
          <TextField variant="standard" required placeholder="Naslov" className={classes.modalFields} value={newReport.title} onChange={(e) => setNewReport({ ...newReport, title: e.target.value })} />
          <TextField variant="standard" required placeholder="Tekst" className={classes.modalFields} value={newReport.body} onChange={(e) => setNewReport({ ...newReport, body: e.target.value })} />
          <Button type="submit" onClick={createNewReport} className={classes.modalFields}>CREATE</Button>
        </Box>
      </Modal>

      <Button disableRipple variant="contained" color="success" className={classes.chatButton}>
        <ChatIcon className={classes.chatIcon} />
      </Button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
