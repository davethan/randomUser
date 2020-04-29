import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiChevronDown  } from '@mdi/js';

import useStyles from './Style.js';

function MonthInLetters(number){
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  if (number[0]=='0'){number = number[1];}
  number--;
  number = months[number];
  return number;
}

function createPseudorandomColor(number) {
  var color = '#';
  let i=0;
  while (color.length<7) {
    let parsed = parseInt(number[i], 10);
    if (Number.isInteger(parsed)){
      color += number[i];
    }
    i++;
  }
  return color;
}


export default function CardOfPerson(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const sequenceOfBirth = props.props.dob.date;
  const yearOfBirth = sequenceOfBirth.substr(0,4);
  let monthOfBirth = sequenceOfBirth.substr(5,2);
  const dayOfBirth = sequenceOfBirth.substr(8,2);
  monthOfBirth = MonthInLetters(monthOfBirth);

  const sequenceOfRegistry = props.props.registered.date;
  const yearOfRegistry = sequenceOfRegistry.substr(0,4);
  let monthOfRegistry = sequenceOfRegistry.substr(5,2);
  const dayOfRegistry = sequenceOfRegistry.substr(8,2);
  monthOfRegistry = MonthInLetters(monthOfRegistry);

  const backgroundColor = createPseudorandomColor(props.props.cell);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: backgroundColor}} className={classes.avatar}>
            {props.props.name.first[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={props.props.name.title + " " + props.props.name.first + " " + props.props.name.last}
        subheader={dayOfBirth + " " + monthOfBirth + " " + yearOfBirth + " (" + props.props.dob.age+ ")"}
      />
      <CardMedia
        className={classes.media}
        image = {props.props.picture.large}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.props.location.street.number + " " + props.props.location.street.name + ", " + props.props.location.postcode + ", " + props.props.location.city + ", " + props.props.location.country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <Icon color="#1976d2" size={1} path={mdiChevronDown} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Contact:</Typography>
          <Typography paragraph>
            <div>cell: {props.props.cell}</div>
            <div>cell: {props.props.phone}</div>
            <div>email: {props.props.email}</div>
          </Typography>
          <Typography variant="h6">Member since:</Typography>
          <Typography paragraph>
            {dayOfRegistry + " " + monthOfRegistry + " " + yearOfRegistry + " (" + props.props.registered.age+ " years)"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
