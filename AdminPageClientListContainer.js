import React from "react";
import AdminPageClientListView from "../components/AdminPageClientList/AdminPageClientListView";
class AdminPageClientListContainer extends React.Component {
  state = {
    rows: []
  };
  componentDidMount() {
    this.getusers();
  }

  getusers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ rows: data });
      });
    console.log(this.state.rows);
  };
  render() {
    return <AdminPageClientListView rows={this.state.rows} />;
  }
}
export default AdminPageClientListContainer;
