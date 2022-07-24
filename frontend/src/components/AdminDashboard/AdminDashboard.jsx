import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { MapAdmin } from '..';

import useStyles from './styles.js';

function Marker({ markerId, body, date }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.postBox}>
      <CardContent>
        <Typography variant="h4" component="div" className={classes.title}>
          {markerId}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

function AdminDashboard() {
  const classes = useStyles();

  return (
    <Box className={classes.map}>
      <MapAdmin />
      <Marker className={classes.markerBox} />
    </Box>
  );
}

export default AdminDashboard;
