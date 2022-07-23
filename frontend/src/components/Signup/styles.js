// eslint-disable-next-line import/no-unresolved
import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  form: {
    height: '100vh',
    width: '100%',
    paddingTop: '30vh',
    display: 'block !important',
    backgroundImage: 'url("loginBg")',
  },
  inputList: {
    display: 'block',
  },
  input: {
    maxWidth: '30%',
  },
}));
