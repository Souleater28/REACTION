import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { GridListTile } from "@material-ui/core";

import EventCardView from "./EventCardView";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const EventCardListView = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {props.events.map((event, index) => (
          <Grid key={index} item>
            <EventCardView event={event} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EventCardListView;
