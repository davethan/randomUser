import React from "react";
import CircularIndeterminate from "../Loading.js";
import styles from "./Style.js";
import { withStyles } from '@material-ui/styles';
import CardOfPerson from '../cardOfPerson/CardOfPerson';

class FetchRandomUser extends React.Component {

constructor(props){
  super(props);
  this.state = {
        loading:true,
        person:null
  }
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
          <div>
            <CardOfPerson props={this.state.person}/>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(FetchRandomUser);
