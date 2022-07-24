import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import useStyles from './styles.js';

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={3} sm={4} md={3}>
              <h3>Kontakt sa strankama u Dežurnom centru</h3>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <h3>Voditeljica službe za komunalno reddarstvo</h3>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <h3>Komunalna redarka</h3>
            </Grid>
            <Grid item xs={3} sm={4} md={3} className={classes.teks}>
              <h3>Kontakt grada Rijeke</h3>
              <p icon={<HomeIcon color="white" />}>Korzo 16, 51000 Rijeka</p>
              <p><b>Telefon:</b>+385 51 209 334</p>
              <p>faks: +385 51 209 334</p>
            </Grid>
          </Grid>
        </Container>

      </Box>
    </Box>
  );
}

export default Footer;
