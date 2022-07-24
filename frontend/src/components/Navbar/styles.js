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
    marginRight: '1em !important',
    borderColor: 'white !important',
    color: 'white !important',
    display: 'block',
    float: 'right',
    justifyContent: 'end',
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
  profileButton: {
    display: 'block',
    float: 'right',
    justifyContent: 'end',
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
