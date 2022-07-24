import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import { MapAdmin, Usertable, Report } from '..';

import useStyles from './styles.js';

// eslint-disable-next-line no-unused-vars
function Marker({ markerId, latitude, longitude, storage, type, mode }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.postBox}>
      <CardContent>
        {mode !== 'create' && (
        <Typography variant="h6" component="div" className={classes.title}>
          <TagIcon />{markerId}
        </Typography>
        )}
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Geo. visina: {latitude}°<br />
          Geo. dužina: {longitude}°
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {mode !== 'create' && (
            `Kapacitet: ${storage * 100}%`
          )}
        </Typography>
      </CardContent>
      {mode === 'create' && (
      <Button type="submit" color="success" className={classes.buttonCreate}>
        Create
      </Button>
      )}
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
      </Box>
      <Box className={classes.table}>
        <Usertable />
        <Report />
      </Box>
    </>
  );
}

export default AdminDashboard;
