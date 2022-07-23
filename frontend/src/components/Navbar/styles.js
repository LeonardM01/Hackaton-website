import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
    color: theme.palette.mode === 'dark' ? 'black' : 'white',
    position: 'absolute',
  },
  link: {
    textDecoration: 'none !important',
    color: theme.palette.mode === 'dark' ? 'black !important' : 'white !important',
  },
}));
