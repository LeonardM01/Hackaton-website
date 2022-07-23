import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
    color: theme.palette.mode === 'dark' ? 'black' : 'white',
    position: 'absolute',
  },
  link: {
    textDecoration: 'none !important',
    paddingRight: '2em',
    color: theme.palette.mode === 'dark' ? 'black !important' : 'white !important',
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer !important',
    },
  },
  login: {
    textDecoration: 'none !important',
    marginLeft: '10px',
    color: `${theme.palette.success.main} !important`,
    display: 'block',
    float: 'right',
    justifyContent: 'end',
    '&:hover': {
      color: `${theme.palette.success.light} !important`,
      textDecoration: 'none',
      cursor: 'pointer !important',
    },
  },
  drawerPaper: {
    backgroundColor: theme.palette.mode === 'dark' ? 'white !important' : 'black !important',
  },
  linkDrawer: {
    color: theme.palette.mode === 'dark' ? 'black !important' : 'white !important',
    fontSize: '1.5em',
    textDecoration: 'none !important',
    padding: '1em 1em 0',
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer !important',
    },
  },
  loginDrawer: {
    color: `${theme.palette.success.main} !important`,
    fontSize: '1.5em',
    textDecoration: 'none !important',
    padding: '1em 1em 0',
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer !important',
    },
  },
}));
