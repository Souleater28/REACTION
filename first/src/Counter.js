import React from "react";

class Count extends React.Component {
  state = {
    times: 0
  };
  statepl = () => {
    this.setState({ times: this.state.times + 1 });
  };
  statemn = () => {
    this.setState({ times: this.state.times - 1 });
  };
  render() {
    return (
      <>
        <button
          onClick={this.statepl}
          style={{
            display: "block",
            width: "100px",
            height: "40px",
            color: "darkslateblue",
            fontSize: "30px"
          }}
        >
          +
        </button>
        <button
          onClick={this.statemn}
          style={{
            display: "block",
            width: "100px",
            height: "40px",
            color: "darkslateblue",
            fontSize: "30px"
          }}
        >
          -
        </button>
        <div style={{ color: "red", fontSize: "20px" }}>{this.state.times}</div>
      </>
    );
  }
}

export default Count;
