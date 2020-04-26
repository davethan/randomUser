import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

import useStyles from './Style.js';

function MonthInLetters(number){
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  if (number[0]=='0'){number = number[1];}
  number--;
  number = months[number];
  return number;
}


export default function CardOfPerson(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(props.props);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const sequenceOfBirth = props.props.dob.date;
  const yearOfBirth = sequenceOfBirth.substr(0,4);
  let monthOfBirth = sequenceOfBirth.substr(5,2);
  const dayOfBirth = sequenceOfBirth.substr(8,2);

  monthOfBirth = MonthInLetters(monthOfBirth);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
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
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >

        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Hea.......................................................................
          </Typography>
          <Typography paragraph>
            Add ric...................................................................
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
