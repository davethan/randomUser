import React from "react";
import CircularIndeterminate from "../Loading.js";
import styles from "./Style.js";
import { withStyles } from '@material-ui/styles';
import CardOfPerson from '../cardOfPerson/CardOfPerson';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import { mdiCardsHeart } from '@mdi/js';
import { mdiHeartBroken } from '@mdi/js';

class CardAndButtons extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          loading: true,
          person: null,
          backgroundColor: 'red',
          gender: this.props.gender
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.chooseGender = this.chooseGender.bind(this);
  }

  async componentDidMount(){
    let url = 'https://randomuser.me/api/?gender=female';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], gender:this.props.gender, loading: false});
  }

  async chooseGender(x){
    let url;
    x===0 ? (url = 'https://randomuser.me/api/?gender=female'):(url = 'https://randomuser.me/api/?gender=male')
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], gender:x, loading: false});
  }

  render(){
    const { classes } = this.props;
    //shiiiiiiiiiiiiiiiiiiiit
    if (this.state.gender !== this.props.gender){
      this.chooseGender(this.props.gender);
    }
    return(
      <div className={classes.fetchRandomUser}>
        {this.state.loading || !this.state.person ? (
          <CircularIndeterminate/>
        ):(
          <div className={classes.cardAndButton}>
            <CardOfPerson props={this.state.person}/>
            <div className={classes.genderButtons}>
              <Button onClick={()=>this.chooseGender(this.props.gender)} className={classes.button} variant="contained" color="primary">
                <Icon color="white" size={1} path={mdiHeartBroken} />
              </Button>
              <Button onClick={()=>this.chooseGender(this.props.gender)} className={classes.button} variant="contained" color="secondary">
                <Icon color="white" size={1} path={mdiCardsHeart} />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(CardAndButtons);
