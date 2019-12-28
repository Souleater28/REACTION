import React from "react";
class Drop2 extends React.Component {
  state = {
    isOpen: false
  };
  toggleDropDown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <h2 className="green" onClick={this.toggleDropDown}>
          -Fuck this shit I'm OUT
        </h2>
        {this.state.isOpen && (
          <>
            <h2>Please,senpai ї</h2>
            <Drop2 />{" "}
          </>
        )}
      </>
    );
  }
}

export default Drop2;
