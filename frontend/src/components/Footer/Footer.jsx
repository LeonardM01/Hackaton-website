import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import useStyles from './styles.js';

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 3, sm: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Kontakt sa strankama u Dežurnom centru</h3>
              <p>+385 51 209 497</p>
              <p>0800 51 00</p>
              <p>komunalno.dezurstvo@rijeka.hr</p>
            </Grid>
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Voditeljica službe za komunalno reddarstvo</h3>
              <p>+385 51 209 487</p>
              <p>Jukić Lovrić Jelena</p>
              <p>jelena.jukic-lovric@rijeka.hr</p>
            </Grid>
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Komunalna redarka</h3>
              <p>+385 51 209 497</p>
              <p>Jurkić Mirjana</p>
              <p>mirjana.jurkic@rijeka.hr</p>
            </Grid>
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Kontakt grada Rijeke</h3>
              <p>Korzo 16, 51000 Rijeka</p>
              <p>+385 51 209 334</p>
              <p><b>faks:</b> +385 51 209 334</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
