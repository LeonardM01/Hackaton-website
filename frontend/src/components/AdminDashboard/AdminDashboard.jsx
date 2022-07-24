import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
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
  const [editTrash, setEditTrash] = useState({});
  // markerId, latitude, longitude, storage, type

  return (
    <>
      <Box className={classes.map}>
        <MapAdmin editState={setEditTrash} />
        <Marker className={classes.markerBox} mode={editTrash.mode} markerId={editTrash._id} latitude={editTrash.latitude} longitude={editTrash.longitude} storage={editTrash.lastCan} />
        {editTrash.mode === 'create' && (
          <Button variant="outlined" type="submit" className={classes.buttonCreate}>
            Create
          </Button>
        )}
      </Box>
      <Usertable className={classes.table} />
      <Box />
    </>
  );
}

export default AdminDashboard;
