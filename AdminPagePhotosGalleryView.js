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
  console.log(props.photos);
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {props.photos.slice(0, 200).map(photo => (
          <GridListTile key={photo.previewURL} cols={1}>
            <img src={photo.previewURL} alt={photo.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default AdminPageClientListView;
