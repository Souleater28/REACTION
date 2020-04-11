import PropTypes from "prop-types";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import "../../styles.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";
import AdminPageClientListContainer from "../../containers/AdminPageClientListContainer";
import Box from "@material-ui/core/Box";
import AdminPagePhotosGalleryContainer from "../AdminPagePhotos/AdminPagePhotosGalleryContainer";
import EventCardListContainer from "../AdminPageClientList/EventCards/EventCardListContainer";

const useStyles = makeStyles(theme => ({
  appbarMenu: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    width: "70px",
    height: "25px",
    backgroundColor: "MediumAquaMarine",
    fontSize: "12px"
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
const AdminPageNavigation = ({ value, handleChange }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <div className={classes.appbarMenu}>
          <Typography component="span">
            <FormatAlignLeftIcon /> Menu
          </Typography>

          <Button className={classes.button}>
            <Link to="/login">Log IN </Link>
          </Button>
        </div>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0} label="Common clients" />
          <Tab value={1} label="Prime clients" />
          <Tab value={2} label="Moders" />
          <Tab value={3} label="To DO" />
          <Tab value={4} label="Photos" />
          <Tab value={5} label="Comments" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AdminPageClientListContainer />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EventCardListContainer />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdminPagePhotosGalleryContainer />
      </TabPanel>
    </>
  );
};
export default AdminPageNavigation;
