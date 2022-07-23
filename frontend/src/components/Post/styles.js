// eslint-disable-next-line import/no-unresolved
import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  postBox: {
    display: 'inline-block',
    border: '1.5px solid #00CA2C !important',
    maxWidth: '20em',
    maxHeight: '20em',
    height: '20em',
    borderRadius: '2% !important',
    marginLeft: '3.5em',
    marginBottom: '2em',
  },
  title: {
    paddingBottom: '0.5em',
    fontWeight: 'bold',
  },
  text: {
    paddingTop: '0.5em',
    overflow: 'hidden',
    flexWrap: 'wrap',
    textOverflow: 'ellips',
  },
}));
