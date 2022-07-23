import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles.js';
import { Navbar, Footer, About, Login } from './index.js';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
