import React from "react";
import LogInPageView from "../LogInPageView/LogInPageView";
import { withRouter } from "react-router";
import fetchRequest from "../../../utils/fetchRequest";

class LogInPageContainer extends React.Component {
  state = {
    rows: [],
    error: false,
    user: {
      username: "",
      password: ""
    }
  };

  handleUsernameChange = value => {
    this.setState({ user: { ...this.state.user, username: value } });
  };

  handlePasswordChange = value => {
    this.setState({ user: { ...this.state.user, password: value } });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      let response = await fetchRequest(
        "http://localhost:3000/login",
        {
          "Content-Type": "application/json"
        },
        this.state.user,
        "POST"
      );
      if (response.user.role) {
        this.props.history.push(`/${response.user.role}`);
      }
    } catch (err) {
      alert(err.error);
    }
  };

  render() {
    const props = {
      handlePasswordChange: this.handlePasswordChange,
      handleUsernameChange: this.handleUsernameChange,
      handleSubmit: this.handleSubmit
    };
    return <LogInPageView {...props} />;
  }
}

export default withRouter(LogInPageContainer);
