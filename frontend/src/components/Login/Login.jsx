import React, { useState } from 'react';
import { Box, List, ListItem, Input, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles.js';
import loginBg from '../../assets/loginBg.jpg';
import { loginUser } from '../../app/action-creators/auth.js';

function Login() {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    await dispatch(loginUser(formData, navigate));
  };

  return (
    <Box component="form" className={classes.form} sx={{ background: `url(${loginBg})`, paddingLeft: { xs: '18%', sm: '30%', md: '40%' } }}>
      <List className={classes.inputList}>
        <ListItem>
          <Input
            startAdornment={(
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
          )}
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            placeholder="Password"
            className={classes.input}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </ListItem>
      </List>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Login
      </Button>
      {authData.errors?.type === 'login' && <div>{authData.errors.message}</div>}
    </Box>
  );
}

export default Login;
