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
}));
