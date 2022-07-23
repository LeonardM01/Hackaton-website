import React from 'react';
import { Navbar, Footer } from '../index.js';

function About() {
  return (
    <>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={6} md={8}>
          <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default About;
