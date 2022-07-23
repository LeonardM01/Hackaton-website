import React from 'react';
import Grid from '@mui/material';
import { whaleImage } from '../../assets/whale.png';

const About = () => {
  return (
    <>
        <Grid container spacing={1}>
            <Grid item xs={6} md={8}>
                <img src={`${whaleImage}?w=164&h=164&fit=crop&auto=format`} />
            </Grid>
        </Grid>
    </>
  )
}

export default About