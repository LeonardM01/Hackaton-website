import { React, useState } from 'react';
import { Avatar, AppBar, Box, Toolbar, IconButton, Typography, useMediaQuery, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import useStyles from './styles.js';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(true);

  return (
    <Box sx={{ flexGrow: 1 }} height="auto" position="absolute">
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
            {isAuthenticated ? (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile/:id"
                  className={classes.profileButton}
                  onClick={() => {}}
                  disableRipple
                >
                  <Avatar
                    className={classes.login}
                    style={{ width: 30, height: 30, paddingTop: 0 }}
                    alt="Profile"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  />
                </Button>
                <Button to="/login" component={Link} className={classes.login} onClick={() => setAuthenticated((previousAuthenticated) => !previousAuthenticated)}>Log out</Button>
              </>
            ) : (
              <>
                <Button component={Link} variant="contained" color="success" className={classes.login} to="/login">
                  Log in
                </Button>
                <Button component={Link} variant="outlined" className={classes.login} to="/signup">
                  Sign up
                </Button>
              </>
            )}
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
              {!isAuthenticated ? (
                <>
                  <Button component={Link} className={classes.loginDrawer} to="/signup">
                    Sign up
                  </Button>
                  <Button component={Link} className={classes.loginDrawer} to="/login">
                    Log in
                  </Button>
                </>
              ) : (
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile/:id"
                  className={classes.profileButton}
                  onClick={() => {}}
                  disableRipple
                >
                  <Avatar
                    className={classes.login}
                    style={{ width: 30, height: 30 }}
                    alt="Profile"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  />
                </Button>
              )}
            </Drawer>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
