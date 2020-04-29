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
  TitleAndLogo:{
    display:'flex'
  },
  Hidden:{
    width: '48px',
    height: '24px',
    paddingTop: '6px',
    paddingBottom: '6px',
    paddingRight: '8px',
    paddingLeft: '8px',
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
