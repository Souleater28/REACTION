import React from "react";
import "../styles.css";
import AdminPageView from "../components/AdminPageView.js";
class AdminPageContainer extends React.Component {
  state = {
    isOpen: false,
    value: 0
  };
  toggleDropDown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const props = {
      value: this.state.value,
      handleChange: this.handleChange
    };

    return <AdminPageView {...props} />;
  }
}
export default AdminPageContainer;
