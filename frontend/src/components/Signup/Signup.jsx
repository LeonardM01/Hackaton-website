import React from 'react';
import { Box, List, ListItem, Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import useStyles from './styles.js';
import loginBg from '../../assets/loginBg.jpg';

function Signup() {
  const classes = useStyles();

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
            placeholder="Password"
            className={classes.input}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Signup;
