import React, { useState } from 'react';
import { Box, List, ListItem, Input, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useDispatch } from 'react-redux';
import { createUser } from '../../app/action-creators/auth.js';

import useStyles from './styles.js';
import signUp from '../../assets/signup.jpg';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const initialState = { firstName: '', lastName: '', username: '', email: '', password: '', passwordConfirm: '' };
  const [formData, setFromData] = useState(initialState);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    // eslint-disable-next-line no-debugger
    dispatch(createUser(formData));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={classes.form} sx={{ background: `url(${signUp})`, paddingLeft: { xs: '18%', sm: '30%', md: '40%' } }}>
      <List className={classes.inputList}>
        <ListItem>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={(e) => {
              setFromData({
                ...formData, firstName: e.target.value,
              });
            }}
            startAdornment={(
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
          )}
            placeholder="Name"
            className={classes.input}
          />
        </ListItem>
        <ListItem>
          <Input
            value={formData.lastName}
            onChange={(e) => {
              setFromData({
                ...formData, lastName: e.target.value,
              });
            }}
            name="lastName"
            startAdornment={(
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
        )}
            placeholder="Surname"
            className={classes.input}
          />
        </ListItem>
        <ListItem>
          <Input
            value={formData.username}
            onChange={(e) => {
              setFromData({
                ...formData, username: e.target.value,
              });
            }}
            name="Username"
            startAdornment={(
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
          )}
            placeholder="Username"
            className={classes.input}
          />
        </ListItem>
        <ListItem>
          <Input
            value={formData.email}
            onChange={(e) => {
              setFromData({
                ...formData, email: e.target.value,
              });
            }}
            name="Email"
            startAdornment={(
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
          )}
            placeholder="Email"
            className={classes.input}
          />
        </ListItem>
        <ListItem>
          <Input
            value={formData.password}
            onChange={(e) => {
              setFromData({
                ...formData, password: e.target.value,
              });
            }}
            name="Password"
            startAdornment={(
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            )}
            endAdornment={(
              <InputAdornment position="end">
                <VisibilityIcon onClick={() => setShowPassword((s) => !s)} />
              </InputAdornment>
            )}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className={classes.input}
          />
        </ListItem>
        <ListItem>
          <Input
            startAdornment={(
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
          )}
            type="password"
            placeholder="Confirm password"
            className={classes.input}
          />
        </ListItem>
      </List>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}

export default Signup;
