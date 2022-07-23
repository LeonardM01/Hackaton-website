import React, { useState, useEffect } from 'react';
import { Avatar, AppBar, Box, Toolbar, IconButton, Typography, useMediaQuery, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import useStyles from './styles.js';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: 'auth/logout' });
    navigate('/login');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

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
            {user ? (
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
                    style={{ width: 30, height: 30 }}
                    alt="Profile"
                    src="https://repair.eu/wp-content/uploads/2019/09/R2REurope.png"
                  />
                </Button>
                <Button component={Link} to="/login" className={classes.login} onClick={() => logout()}>Log out</Button>
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
              {!user ? (
                <>
                  <Button component={Link} className={classes.loginDrawer} to="/signup">
                    Sign up
                  </Button>
                  <Button component={Link} className={classes.loginDrawer} to="/login">
                    Log in
                  </Button>
                </>
              ) : (
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
                      style={{ width: 30, height: 30 }}
                      alt="Profile"
                      src="https://repair.eu/wp-content/uploads/2019/09/R2REurope.png"
                    />
                  </Button>
                  <Button component={Link} to="/login" className={classes.login} onClick={() => logout()}>Log out</Button>
                </>
              )}
            </Drawer>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
