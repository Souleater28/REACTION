import React from "react";
import UserPageView from "./UserPageview";
class UserPAgeContainer extends React.Component {
  state = {
    users: []
  };

  render() {
    return <UserPageView />;
  }
}
export default UserPAgeContainer;
