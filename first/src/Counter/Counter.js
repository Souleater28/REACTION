import React from "react";

const Counter = props => {
  return (
    <div className="CounterView">
      <button onClick={props.countpl} className="CounterBut">
        +
      </button>
      <button onClick={props.countmn} className="CounterBut">
        -
      </button>
      <div className="Countercount">{props.count}</div>
    </div>
  );
};
export default Counter;
