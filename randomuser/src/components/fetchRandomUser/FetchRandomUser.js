import React from "react";
import CircularIndeterminate from "../Loading.js";
import styles from "./Style.js";
import { withStyles } from '@material-ui/styles';
import CardOfPerson from '../cardOfPerson/CardOfPerson';
import Button from '@material-ui/core/Button';

class FetchRandomUser extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          loading: true,
          person: null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount(){
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading: false});
  }

  render(){
    const { classes } = this.props;
    return(
      <div className={classes.fetchRandomUser}>
        {this.state.loading || !this.state.person ? (
          <CircularIndeterminate/>
        ):(
          <div className={classes.cardAndButton}>
            <CardOfPerson props={this.state.person}/>
            <Button onClick={this.componentDidMount} className={classes.button} variant="contained" color="secondary">
              Give me someone else!
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(FetchRandomUser);
