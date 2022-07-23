import React from 'react';
import { Grid } from '@mui/material';
import whaleImage from '../../assets/whale.png';

import useStyles from './style.js';

function About() {
  const classes = useStyles();

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={classes.gridd}>
      <Grid item xs={5} md={4}>
        <img src={`${whaleImage}`} className={classes.image} />
      </Grid>
      <Grid item xs={7} md={8} className={classes.tekst}>
        <p>Neki tekst</p>
      </Grid>
    </Grid>
  );
}

export default About;
