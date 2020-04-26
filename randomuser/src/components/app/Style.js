import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainPage:{
    display:'flex',
    flexDirection: 'column',
    margin:'auto',
  },
  link:{
    margin:'auto',
    textTransform:'none',
    textDecoration:'none',
    color:'black'
  }
}));

export default useStyles
