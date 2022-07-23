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
  },
  drawerPaper: {
    backgroundColor: theme.palette.mode === 'dark' ? 'white !important' : 'black !important',
  },
  linkDrawer: {
    color: theme.palette.mode === 'dark' ? 'black !important' : 'white !important',
    fontSize: '1.5em',
    textDecoration: 'none !important',
    padding: '1em 1em 0',
  },
  login: {
    color: `${theme.palette.success.main} !important`,
    fontSize: '1.5em',
    textDecoration: 'none !important',
    padding: '1em 1em 0',
  },
}));
