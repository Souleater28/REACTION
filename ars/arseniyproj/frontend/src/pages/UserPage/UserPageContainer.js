import React from "react";
import UserPageView from "./UserPageview";
class UserPAgeContainer extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getpusers();
  }

  getusers = () => {
    fetch("http://localhost:3000/login")
      .then(response => response.json())
      .then(users => {
        this.setState({ users });
      });
    console.log(this.state.users);
  };
  render() {
    return <UserPageView />;
  }
}
export default UserPAgeContainer;
