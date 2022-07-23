// eslint-disable-next-line import/no-unresolved
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  map: {
    maxWidth: '100%',
    display: 'flex',
    padding: '5em',
    [theme.breakpoints.down('sm')]: {
      padding: '70px 15px 40px 10px',
    },
  },
  posts: {
    padding: '0 2em 2em 2em',
    display: 'flex',
    maxWidth: '100%',
    justifyContent: 'space-between',
  },
  message: {
    margin: '0 2em 4em 40em',
    paddingLeft: '0.5em',
    fontSize: '15px',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
    borderLeft: '7px solid #00CA2C',
  },
}));
