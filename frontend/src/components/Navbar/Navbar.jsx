import React, { useState, useEffect } from 'react';
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Drawer,
  Button,
  Modal,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './styles.js';
import { createPost } from '../../app/action-creators/posts';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logout = () => {
    dispatch({ type: 'auth/logout' });
    navigate('/login');
    setUser(null);
  };

  function scrollToPosts() {
    document.getElementById('posts').scrollIntoView({
      behavior: 'smooth',
    });
    console.log('hey');
  }

  const createNewPost = async () => {
    await dispatch(createPost({ ...newPost, personId: user.result._id }));
    handleClose();
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
            <Button onClick={() => scrollToPosts()} className={classes.link} to="/">
              Novosti
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
                <Button
                  component={Link}
                  to="/login"
                  className={classes.login}
                  onClick={() => logout()}
                >
                  Log out
                </Button>
                {(user.result.role === 'superadmin' || user.result.role === 'admin') && (
                  <>
                    <Button
                      component={Link}
                      to="/dashboard"
                      className={classes.login}
                    >
                      Admin dashboard
                    </Button>
                    <Button
                      onClick={handleOpen}
                      className={classes.login}
                    >
                      <AddIcon />
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                    >
                      <Box className={classes.modal}>
                        <Typography className={classes.modalTitle}>Objava</Typography>
                        <TextField variant="standard" required placeholder="Naslov" className={classes.modalFields} value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
                        <TextField variant="standard" required placeholder="Tekst" className={classes.modalFields} value={newPost.body} onChange={(e) => setNewPost({ ...newPost, body: e.target.value })} />
                        <Button type="submit" onClick={createNewPost} className={classes.modalFields}>CREATE</Button>
                      </Box>
                    </Modal>
                  </>
                )}
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  variant="contained"
                  color="success"
                  className={classes.login}
                  to="/login"
                >
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
              <Button onClick={() => scrollToPosts()} className={classes.linkDrawer} to="/">
                Novosti
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
                  <Button
                    component={Link}
                    variant="outlined"
                    to="/login"
                    className={classes.login}
                    onClick={() => logout()}
                  >
                    Log out
                  </Button>
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
