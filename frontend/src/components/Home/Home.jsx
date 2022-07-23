import React from 'react';
import { Box } from '@mui/material';
import { Map } from '..';

import useStyles from './styles.js';

function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.map}>
      <Map />
    </Box>
  );
}

export default Home;
