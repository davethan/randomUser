import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import useStyles from './Style.js';
import Icon from '@mdi/react';
import { mdiDramaMasks } from '@mdi/js';
import SwipeableTemporaryDrawer from '../drawer/Drawer.js';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <SwipeableTemporaryDrawer chooseGender={props.chooseGender} chooseNationality={props.chooseNationality}/>
            <h2 className={classes.h2}>Mr. Random</h2>
            <div className={classes.logo}><Icon color="white" size={1} path={mdiDramaMasks} /></div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
