import React from 'react';
import HideAppBar from '../header/Header.js';
import FetchRandomUser from '../fetchRandomUser/FetchRandomUser.js'
import useStyles from './Style.js';


function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainPage}>
      <HideAppBar/>
      <FetchRandomUser className={classes.fetchRandomUser}/>
    </div>
  );
}

export default App;
