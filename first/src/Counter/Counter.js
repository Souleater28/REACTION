import React from "react";

const Counter = props => {
  return (
    <div className="CounterView">
      <button onClick={props.statepl} className="CounterBut">
        +
      </button>
      <button onClick={props.statemn} className="CounterBut">
        -
      </button>
      <div className="Countertimes">{props.times}</div>
    </div>
  );
};
export default Counter;
