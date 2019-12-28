import React from "react";

import Count from "../Counter/CounterContainer";

const Countview = Amount => {
  let Counters = [];
  if (Amount !== 0) {
    for (let i = 0; i < Amount; i++) {
      Counters[i] = <Count />;
    }
  } else Amount = 0;
  return Counters;
};
const CounterListView = props => {
  return (
    <>
      <div className="Counterlistviewdiv">
        <button onClick={props.statepl} className="Counterlistvievbut">
          Add Counter
        </button>
        <button onClick={props.statemn} className="Counterlistvievbut">
          Erase Counter
        </button>
      </div>
      <div className="Counterlistviewdiv2">{Countview(props.amount)}</div>
    </>
  );
};
export default CounterListView;
