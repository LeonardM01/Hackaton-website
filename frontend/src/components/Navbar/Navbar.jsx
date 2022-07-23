import { React, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, useMediaQuery, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import useStyles from './styles.js';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }} height="auto" position="fixed">
      <AppBar>
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
          >
            <Button component={Link} className={classes.link} to="/">
              Početna
            </Button>
            <Button component={Link} className={classes.link} to="/">
              Novosti
            </Button>
            <Button component={Link} className={classes.link} to="/karta/">
              Karta
            </Button>
            <Button component={Link} className={classes.link} to="/about">
              O nama
            </Button>
            <Button component={Link} variant="outlined" className={classes.login} to="/login">
              Log in
            </Button>
            <Button component={Link} variant="outlined" className={classes.login} to="/signup">
              Sign up
            </Button>
          </Typography>
          {isMobile && (
            <Drawer
              varianty="temporary"
              anchor="top"
              open={mobileOpen}
              onClose={() => setMobileOpen((previousMobileOpen) => !previousMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
            >
              <Button component={Link} className={classes.linkDrawer} to="/">
                Početna
              </Button>
              <Button component={Link} className={classes.linkDrawer} to="/">
                Novosti
              </Button>
              <Button component={Link} className={classes.linkDrawer} to="/karta">
                Karta
              </Button>
              <Button component={Link} className={classes.linkDrawer} to="/about">
                O nama
              </Button>
              <Button component={Link} className={classes.loginDrawer} to="/signup">
                Sign up
              </Button>
              <Button component={Link} className={classes.loginDrawer} to="/login">
                Log in
              </Button>
            </Drawer>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
