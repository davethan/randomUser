import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { mdiFaceOutline } from '@mdi/js';
import { mdiFaceWomanOutline } from '@mdi/js';
import { mdiGift } from '@mdi/js';
import { mdiMap } from '@mdi/js';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Icon color="#1976d2" size={1} path={mdiGift} />
          </ListItemIcon>
          <ListItemText primary={'Upgrade to Finder premium'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Girls', 'Boys'].map((text, index) => (
          <ListItem onClick={()=>props.chooseGender(index)} button key={text}>
            <ListItemIcon>{index % 2 === 1 ?
              <Icon color="#1976d2" size={1} path={mdiFaceOutline} /> : <Icon color="#d81b60" size={1} path={mdiFaceWomanOutline} />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      <ListItem onClick={()=>props.chooseNationality(0)} button>
        <ListItemIcon>
          <Icon color="#1976d2" size={1} path={mdiMap} />
        </ListItemIcon>
        <ListItemText primary={'All'} />
      </ListItem>
        {['Australia', 'Brazil', 'Canada', 'Germany', 'Finland', 'France', 'Great Britain', 'Iran', 'Ireland', 'Korea', 'Netherlands', 'New Zealand', 'Norway', 'Spain', 'Switzerland', 'Turkey', 'United States'].map((text, index) => (
          <ListItem onClick={()=>props.chooseNationality(index+1)} button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
          <Button onClick={toggleDrawer('left', true)}><Icon color="white" size={1} path={mdiMenu} /></Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
    </div>
  );
}
