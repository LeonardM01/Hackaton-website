import React from 'react';
import { Grid } from '@mui/material';
import whaleImage from '../../assets/whale.png';

import useStyles from './style.js';

function About() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.gridd}>
      <Grid item xs={6} md={4}>
        <img src={`${whaleImage}?w=164&h=164&fit=crop&auto=format`} />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Neki tekst</p>
      </Grid>
    </Grid>
  );
}

export default About;
