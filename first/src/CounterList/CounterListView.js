import React from "react";

import CounterContainer from "../Counter/CounterContainer";

const Countview = (amount, boolshit) => {
  let counters = [];
  if (amount > 0) {
    for (let i = 0; i < amount; i++) {
      counters[i] = <CounterContainer boolshit={boolshit} />;
    }
  }
  return counters;
};
const CounterListView = props => {
  return (
    <>
      <div className="Counterlistviewdiv">
        <button onClick={props.amountpl} className="Counterlistvievbut">
          Add Counter
        </button>
        <button onClick={props.amountmn} className="Counterlistvievbut">
          Erase Counter
        </button>
      </div>
      <div className="Counterlistviewdiv2">
        {Countview(props.amount, props.boolshit)}
      </div>
    </>
  );
};
export default CounterListView;
