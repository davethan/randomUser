import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    bottom: 'auto',
    top: 0,
    height: '3rem'
  },
  toolbar:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 'auto',
    minHeight:'2rem',
  },
  h2:{
    fontFamily: 'billabongregular',
    textAlign: 'center',
    fontWeight: 100,
    fontSize: '1.5rem',
    margin:0,
    fontStyle: 'normal',
  },
  logo:{
    width: '48px',
    margin: '6px',
    display:'flex',
    justifyContent: 'center'
  },
}));

export default useStyles
