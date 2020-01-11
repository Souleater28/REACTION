import React from "react";
import Counter from "./Counter";
class Count extends React.PureComponent {
  componentDidMount() {
    console.log("%c%s", "color: green; font: 1.2rem/1 Tahoma;", "FUCK OFF");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.boolshit) {
      if (this.state.count % 2 === 0)
        this.setState({
          count: this.state.count - 1
        });
    }
    if (!nextProps.boolshit) {
      if (this.state.count % 2 === 1 || this.state.count % 2 === -1)
        this.setState({
          count: this.state.count + 1
        });
    }
  }

  state = {
    count: 0,
    isOpen: false
  };
  countpl = () => {
    this.setState({ count: this.state.count + 1 });
  };
  countmn = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <Counter
        countpl={this.countpl}
        countmn={this.countmn}
        count={this.state.count}
      />
    );
  }
}

export default Count;
