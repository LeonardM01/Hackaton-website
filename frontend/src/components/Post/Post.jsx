import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';

import useStyles from './styles.js';

function Post() {
  const classes = useStyles();
  const cardPost = (
    <CardContent>
      <Typography variant="h5" component="div" className={classes.title}>
        Ovo je prvi naslov
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        datum
      </Typography>
      <Typography variant="body2">
        tekst
      </Typography>
    </CardContent>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className={classes.postBox}>{cardPost}</Card>
    </Box>
  );
}

export default Post;
