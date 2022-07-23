import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';

import useStyles from './styles.js';

function Post() {
  const classes = useStyles();
  const cardPost = (
    <CardContent>
      <Typography variant="h4" component="div" className={classes.title}>
        Title
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        22.7.2022.
      </Typography>
      <Typography variant="body2" className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </Typography>
    </CardContent>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className={classes.postBox}>{cardPost}</Card>
      <Card variant="outlined" className={classes.postBox}>{cardPost}</Card>
      <Card variant="outlined" className={classes.postBox}>{cardPost}</Card>
    </Box>
  );
}

export default Post;
