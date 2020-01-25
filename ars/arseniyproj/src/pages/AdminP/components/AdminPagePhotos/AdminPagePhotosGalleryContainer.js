import React from "react";
import AdminPagePhotosGalleryView from "./AdminPagePhotosGalleryView";
class AdminPagePhotosGalleryContainer extends React.Component {
  state = {
    pht: []
  };
  componentDidMount() {
    this.getphotos();
  }

  getphotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        this.setState({ pht: data });
      });
    console.log(this.state.pht);
  };
  render() {
    return <AdminPagePhotosGalleryView pht={this.state.pht} />;
  }
}
export default AdminPagePhotosGalleryContainer;
