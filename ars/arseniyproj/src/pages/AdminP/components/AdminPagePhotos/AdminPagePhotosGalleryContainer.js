import React from "react";
import AdminPagePhotosGalleryView from "./AdminPagePhotosGalleryView";
class AdminPagePhotosGalleryContainer extends React.Component {
  state = {
    photos: []
  };
  componentDidMount() {
    this.getphotos();
  }

  getphotos = () => {
    fetch(
      "https://pixabay.com/api/?key=15107045-08cb84d5310a094f2e0b370ef&image_type=all&per_page=200"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ photos: data.hits });
      });
    console.log(this.state.photos);
  };
  render() {
    return <AdminPagePhotosGalleryView photos={this.state.photos} />;
  }
}
export default AdminPagePhotosGalleryContainer;
