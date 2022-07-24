import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { MapAdmin, Usertable } from '..';

import useStyles from './styles.js';

function Marker({ markerId, latitude, longitude, storage, type, mode }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.postBox}>
      <CardContent>
        <Typography variant="h4" component="div" className={classes.title}>
          {markerId}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Latitude: {latitude}, longitude: {longitude}
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {storage}
        </Typography>
      </CardContent>
    </Card>
  );
}

function AdminDashboard() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.map}>
        <MapAdmin />
        <Marker className={classes.markerBox} />
      </Box>
      <Box />
    </>
  );
}

export default AdminDashboard;
