import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Box, List, ListItem, Input, Button, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../app/action-creators/auth.js';

import useStyles from './styles.js';
import signUp from '../../assets/signup.jpg';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const initialState = { firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: '' };
  const [formData, setFromData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createUser(formData, navigate));
  };

  return (
    <Box component="form" className={classes.form} sx={{ background: `url(${signUp})`, paddingLeft: { xs: '18%', sm: '30%', md: '40%' } }}>
      <List className={classes.inputList}>
        <ListItem>
          <Input
            // eslint-disable-next-line quotes
            error={formData.firstName === ''}
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
            required
            error={!formData.lastName !== ''}
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
            required
            name="Username"
            startAdornment={(
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
          )}
            error={!formData.username !== ''}
            placeholder="Username"
            className={classes.input}
          />
        </ListItem>
        <ListItem>
          <Input
            required
            error={!formData.email !== ''}
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
            required
            error={!formData.password !== ''}
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
            required
            startAdornment={(
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
          )}
            error={!formData.passwordConfirm !== '' && formData.passwordConfirm === formData.password}
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFromData({ ...formData, confirmPassword: e.target.value })}
            placeholder="Confirm password"
            className={classes.input}
          />
        </ListItem>
      </List>
      <Button variant="contained" type="submit" color="success" onClick={handleSubmit}>
        Submit
      </Button>
      {authData.errors?.type === 'create' && <div>{authData.errors.message}</div>}

    </Box>
  );
}

export default Signup;
