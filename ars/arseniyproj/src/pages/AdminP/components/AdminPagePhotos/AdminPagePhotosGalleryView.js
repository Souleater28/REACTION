import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    minWidth: 800,
    height: 650
  }
}));

const AdminPageClientListView = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.pht.slice(0, 200).map(pht => (
          <GridListTile key={pht.url} cols={pht.cols || 1}>
            <img src={pht.url} alt={pht.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default AdminPageClientListView;
