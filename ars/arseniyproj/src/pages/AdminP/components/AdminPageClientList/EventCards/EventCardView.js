import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const EventCardView = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.event.name}
        subheader={props.event.general.date}
      />
      <CardContent>
        <Typography>{props.event.id}</Typography>
        <Typography component="span">
          {`${props.event.general.CurrentMembers}/${props.event.general.MaxMembers}`}
        </Typography>
        <Typography>{props.event.general.description}</Typography>

        {Object.keys(props.event.other).map((otherProp, index) => (
          <Typography key={index}>
            {otherProp} : {props.event.other[otherProp]}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
export default EventCardView;
