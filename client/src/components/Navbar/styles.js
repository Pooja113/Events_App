import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#f5f5f5',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  appHeading:{
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000000',
    'font-family':'Cookie'
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: '300',
  },
  image: {
     marginRight: '10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration:'none'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
