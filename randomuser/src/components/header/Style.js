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
    justifyContent: 'center',
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
  a:{
    color:'white',
    textDecoration:'none',
  },
  link:{
    textTransform:'none',
    textDecoration:'none',
    color:'white'
  }
  // '@font-face':{
  //     fontFamily: 'billabongregular',
  //     src: 'url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot)',
  //     fallbacks:[
  //       {src: 'url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix) format(embedded-opentype)'},
  //       {src: 'url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff) format(woff)'},
  //       {src: 'url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf) format(truetype)'},
  //       {src: 'url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular) format(svg)'},
  //   ]},
//   '@font-face':{
//       fontFamily: 'billabongregular',
//       src: 'url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot)',
//       fallbacks:
//         {src: 'url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix) format(embedded-opentype) url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff) format(woff), url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf) format(truetype), url(https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular) format(svg)'},
//     },
}));

export default useStyles
