import { React, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, useMediaQuery, Link, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import useStyles from './styles.js';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [mobileOpen, setMobileOpen] = useState(false);

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
              onClick={() => setMobileOpen((previousMobileOpen) => !previousMobileOpen)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link className={classes.link} to="/">
              Početna
            </Link>
            <Link className={classes.link} to="/">
              Novosti
            </Link>
            <Link className={classes.link} to="/">
              Karta
            </Link>
          </Typography>
          {isMobile && (
            <Drawer
              varianty="temporary"
              anchor="top"
              open={mobileOpen}
              onClose={() => setMobileOpen((previousMobileOpen) => !previousMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
            >
              <Link className={classes.linkDrawer} to="/">
                Početna
              </Link>
              <Link className={classes.linkDrawer} to="/">
                Novosti
              </Link>
              <Link className={classes.linkDrawer} to="/">
                Karta
              </Link>
              <Link className={classes.login} to="/" paddingBottom="1em">
                Log in
              </Link>
            </Drawer>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
