// eslint-disable-next-line import/no-unresolved
import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: 1,
    padding: '2em',
  },
}));
