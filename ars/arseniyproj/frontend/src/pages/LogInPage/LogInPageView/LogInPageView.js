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
import { TextField } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    },
    maxWidth: 400,
    maxHeight: 500,
    position: "absolute",
    top: 100,
    left: 200
  },
  button: {
    position: "absolute",
    right: "10px",
    bottom: "65px",
    width: "140px",
    height: "75px",
    backgroundColor: "#5ED1BA",
    fontSize: "30px",
    color: "rgb(62, 0, 110)"
  }
}));

const LogInView = props => {
  const {
    handlePasswordChange,
    handleUsernameChange,
    handleSubmit,
    error_user,
    error_password
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Log In" subheader="Write down the info" />
      <CardContent>
        <form onSubmit={event => handleSubmit(event)}>
          <TextField
            onChange={event => handleUsernameChange(event.target.value)}
            id="filled-user-input"
            label="Your Username"
            type="text"
            autoComplete="current-user"
            variant="filled"
            helperText={error_user ? "invalid user" : null}
          />

          <TextField
            onChange={event => handlePasswordChange(event.target.value)}
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            helperText={error_password ? "invalid password" : null}
          />
          <Button type="submit" className={classes.button}>
            {/* <Link to="/admin">*/}Submit {/* </Link> */}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
export default LogInView;
