import React from 'react';
import { Box } from '@mui/material';
import { Map, Post } from '..';

import useStyles from './styles.js';

function Home() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.map}>
        <Map />
      </Box>
      <Box className={classes.message}>
        Potrudimo se zajedno da živimo u čišćem i urednijem gradu
      </Box>
      <Box className={classes.posts}>
        <Post />
      </Box>
    </>
  );
}

export default Home;
