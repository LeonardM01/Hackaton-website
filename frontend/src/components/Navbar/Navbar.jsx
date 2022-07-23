import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, useMediaQuery, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import useStyles from './styles.js';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, disolay: { xs: 'none', sm: 'block' } }}
          >
            <Link className={classes.link} to="/">
              Početna
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
