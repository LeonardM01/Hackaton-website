// eslint-disable-next-line import/no-unresolved
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  postBox: {
    display: 'inline-block',
    border: '1.5px solid #00CA2C !important',
    maxWidth: '20em',
    maxHeight: '19.5em',
    height: '19.5em',
    width: '20em',
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
  loadMore: {
    display: 'block',
    marginLeft: '45% !important',
    justifyContent: 'center',
    position: 'relative',
    color: 'gray !important',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5% !important',
      marginLeft: '40% !important',
    },
  },
}));
