import React from "react";
import LogInPageView from "../LogInPageView/LogInPageView";
class LogInPageContainer extends React.Component {
  state = {
    error_user: 0,
    error_password: 0,
    user: " ",
    password: " "
  };

  handleUsernameChange = value => {
    this.setState({ user: value });
  };
  handlePasswordChange = value => {
    this.setState({ password: value });
  };
  handleSubmit = event => {
    alert(`USERNAME ${this.state.user} PASSWORD ${this.state.password}`);
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

export default LogInPageContainer;
