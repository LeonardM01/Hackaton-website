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
  postBox: {
    marginLeft: '30px',
    marginTop: '150px',
    maxWidth: '25%',
    width: '25%',
    maxHeight: '50%',
    height: '100%',
  },
  table: {
    display: 'flex',
    margin: '3em',
  },
}));
