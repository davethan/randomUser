import React, {Component} from 'react';
import HideAppBar from '../header/Header.js';
import CardAndButtons from '../cardAndButtons/CardAndButtons.js'
import styles from "./Style.js";
import { withStyles } from '@material-ui/styles';

class App extends Component {
  state = {
    gender:0,
    nationality: 'all',
    basedOn: 'gender'
  }

  chooseGender = (index) => {
    this.setState({gender:index, basedOn:'gender'});
  }

  chooseNationality = (index) => {
    const abbreviations = ['all', 'au', 'br', 'ca', 'de', 'fi', 'fr', 'gb', 'ir', 'ie', 'dk', 'nl', 'nz', 'no', 'es', 'ch', 'tr', 'us'];
    this.setState({nationality:abbreviations[index], basedOn:'nationality'});
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.mainPage} >
        <HideAppBar chooseGender={this.chooseGender} chooseNationality={this.chooseNationality}/>
        <CardAndButtons props={this.state} />
      </div>
    );
  }

}

export default withStyles(styles)(App);
