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
          person: null,
          backgroundColor: 'red'
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.chooseGender = this.chooseGender.bind(this);
  }

  async componentDidMount(){
    let url = 'https://api.randomuser.me';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading: false});
  }

  async chooseGender(x){
    let url;
    x===0 ? (url = 'https://randomuser.me/api/?gender=female'):(url = 'https://randomuser.me/api/?gender=male')
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
            <div className={classes.genderButtons}>
              <Button onClick={()=>this.chooseGender(0)} className={classes.button} variant="contained" color="primary">
                Girl
              </Button>
              <Button onClick={()=>this.chooseGender(1)} className={classes.button} variant="contained" color="secondary">
                Boy
              </Button>
            </div>
            <Button onClick={this.componentDidMount} className={classes.button} variant="contained" >
              Random
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(FetchRandomUser);
