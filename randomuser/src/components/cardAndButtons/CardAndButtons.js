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
          gender: this.props.props.gender,
          nationality: this.props.props.nationality
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.chooseGender = this.chooseGender.bind(this);
    this.chooseNationality = this.chooseNationality.bind(this);
  }

  async componentDidMount(){
    let url = 'https://randomuser.me/api/?gender=female';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], gender:this.props.props.gender, loading: false});
  }

  async chooseGender(x){
    let url;
    x===0 ? (url = 'https://randomuser.me/api/?gender=female'):(url = 'https://randomuser.me/api/?gender=male')
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], gender:x, loading: false, nationality:'all'});
  }

  async chooseNationality(x){
    let url;
    x === 'all' ? (url = 'https://randomuser.me/api') : (url = 'https://randomuser.me/api/?nat=' + x)
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], gender:3, loading: false, nationality:x});
  }

  render(){
    const { classes } = this.props;
    //shiiiiiiiiiiiiiiiiiiiit
    if (this.props.props.basedOn==='gender' && this.state.gender !== this.props.props.gender){
      this.chooseGender(this.props.props.gender);
    }
    if (this.props.props.basedOn==='nationality' && this.state.nationality !== this.props.props.nationality){
      this.chooseNationality(this.props.props.nationality);
    }
    return(
      <div className={classes.fetchRandomUser}>
        {this.state.loading || !this.state.person ? (
          <CircularIndeterminate/>
        ):(
          <div className={classes.cardAndButton}>
            <CardOfPerson props={this.state.person}/>
            <div className={classes.genderButtons}>

              { this.props.props.basedOn === 'gender' ?
                (<React.Fragment>
                <Button onClick={()=>this.chooseGender(this.props.props.gender)} className={classes.button} variant="contained" color="primary">
                  <Icon color="white" size={1} path={mdiHeartBroken} />
                </Button>
                <Button onClick={()=>this.chooseGender(this.props.props.gender)} className={classes.button} variant="contained" color="secondary">
                  <Icon color="white" size={1} path={mdiCardsHeart} />
                </Button>
                </React.Fragment>):

                (<React.Fragment>
                <Button onClick={()=>this.chooseNationality(this.props.props.nationality)} className={classes.button} variant="contained" color="primary">
                  <Icon color="white" size={1} path={mdiHeartBroken} />
                </Button>
                <Button onClick={()=>this.chooseNationality(this.props.props.nationality)} className={classes.button} variant="contained" color="secondary">
                  <Icon color="white" size={1} path={mdiCardsHeart} />
                </Button>
                </React.Fragment>)
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(CardAndButtons);
