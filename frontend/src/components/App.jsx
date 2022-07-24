import React from 'react';
import { CssBaseline, Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import WarningIcon from '@mui/icons-material/Warning';

import useStyles from './styles.js';
import { Navbar, Footer, About, Login, Signup, Dashboard, Home } from './index.js';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Button disableRipple variant="contained" color="success" className={classes.chatButtonWarning}>
        <WarningIcon className={classes.chatIconWarning} />
      </Button>
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
