// eslint-disable-next-line import/no-unresolved
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'block',
  },
  chatButton: {
    top: '88vh',
    left: '94%',
    display: 'flex',
    position: 'fixed !important',
    borderRadius: '100% !important',
    height: '10vh',
    [theme.breakpoints.down('sm')]: {
      height: '7vh',
      left: '83%',
    },
    backgroundColor: 'green !important',
    zIndex: 1000,
  },
  chatIcon: {
    display: 'block',
    position: 'fixed',
    zIndex: '100',
  },
  chatButtonWarning: {
    top: '76vh',
    left: '94%',
    display: 'flex',
    position: 'fixed !important',
    borderRadius: '100% !important',
    height: '10vh',
    [theme.breakpoints.down('sm')]: {
      height: '7vh',
      left: '83%',
      top: '79vh',
    },
    backgroundColor: 'green !important',
    zIndex: 1000,
  },
  chatIconWarning: {
    display: 'block',
    position: 'fixed',
    zIndex: '100',
  },
}));
