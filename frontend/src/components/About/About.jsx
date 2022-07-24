import React from 'react';
import { Grid, Box } from '@mui/material';
import whaleImage from '../../assets/whale.png';
import riImage from '../../assets/rijeka.jpg';

import useStyles from './style.js';

function About() {
  const classes = useStyles();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} className={classes.gridd}>
      <Grid item xs={5} md={4}>
        <img src={`${whaleImage}`} className={classes.image} />
      </Grid>
      <Grid item xs={7} md={8} className={classes.tekst}>
        <h1>O nama</h1>
        <h2>ecoRijeka</h2>
        <p>Mi smo lokalna tvrtka koja se odvozom otpada brine čistoću našeg grada Rijeke. Imamo 300 zaposlenika koji obuhvaćaju vozače, upravu te IT podršku. Kroz našu stručnost.</p>
      </Grid>
      <Grid item xs={12}>
        <Box m={1} pt={10}>
          <img src={`${riImage}`} className={classes.img} />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridd}>
        <Box m={1} pt={10}>
          <h1> Naš cilj</h1>
          <p>Pružamo informacije za odvoz otpada na jednom mjestu kako bi naš grad Rijeku učinili što čišćom.</p>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;
