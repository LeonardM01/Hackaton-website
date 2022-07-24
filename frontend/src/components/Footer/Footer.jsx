import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

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
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Kontakt sa strankama u Dežurnom centru</h3>
              <LocalPhoneIcon /><span>+385 51 209 497</span><br />
              <LocalPhoneIcon /><span>0800 51 00</span><br />
              <EmailIcon /><span>komunalno.dezurstvo@rijeka.hr</span><br />
            </Grid>
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Voditeljica službe za komunalno reddarstvo</h3>
              <LocalPhoneIcon /><span>+385 51 209 487</span><br />
              <PersonIcon /><span>Jukić Lovrić Jelena</span><br />
              <EmailIcon /><span>jelena.jukic-lovric@rijeka.hr</span><br />
            </Grid>
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Komunalna redarka</h3>
              <LocalPhoneIcon /><span>+385 51 209 497</span><br />
              <PersonIcon /><span>Jurkić Mirjana</span><br />
              <EmailIcon /><span>mirjana.jurkic@rijeka.hr</span><br />
            </Grid>
            <Grid item xs={3} sm={4} md={3} className={classes.tekst}>
              <h3>Kontakt grada Rijeke</h3>
              <HomeIcon /><span>Korzo 16, 51000 Rijeka</span><br />
              <LocalPhoneIcon /><span>+385 51 209 334</span><br />
              <LocalPhoneIcon /><span>faks: +385 51 209 334</span><br />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
