import React from "react";
import Drop2 from "./DropDown2";
class Drop extends React.Component {
  state = {
    isOpen: false
  };
  toggleDropDown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <h2 style={{ color: "red" }} onClick={this.toggleDropDown}>
          Click me,senpai ☼
        </h2>
        {this.state.isOpen && (
          <div>
            <h2 style={{ color: "chocolate" }}>
              Fuck me, please *removes her panties*
            </h2>
            <Drop2 />
          </div>
        )}
      </>
    );
  }
}

export default Drop;
