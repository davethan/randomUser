import React, {Component} from 'react';
import HideAppBar from '../header/Header.js';
import CardAndButtons from '../cardAndButtons/CardAndButtons.js'
import styles from "./Style.js";
import { withStyles } from '@material-ui/styles';

class App extends Component {
  state = {
    gender:0
  }

  handleClickOfGender = (index) => {
    this.setState({gender:index});
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.mainPage} >
        <HideAppBar action={this.handleClickOfGender}/>
        <CardAndButtons gender={this.state.gender} />
      </div>
    );
  }

}

export default withStyles(styles)(App);
