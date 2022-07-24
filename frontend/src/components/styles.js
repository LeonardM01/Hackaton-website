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
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '300px',
    width: '300px',
    backgroundColor: 'white',
    p: 4,
    color: 'white !important',
    display: 'block',
    justifyContent: 'center',
    borderRadius: '5%',
  },
  modalFields: {
    display: 'block',
    margin: '1em 1em 1em 1em !important',
    width: '250px',
  },
  modalTitle: {
    margin: '1em !important',
    fontWeight: 'bold !important',
    color: 'black',
    fontSize: '15px',
  },
}));
