import React from "react";
import Helloworld from "./HelloWorld";
import ImageSoul from "./ImageSoul";
import "./style.css";
import DropDown from "./DropDown/DropDown";
import CounterList from "./CounterList/CounterListContainer";
function App() {
  return (
    <>
      <div className="suck">
        <Helloworld />
        <ImageSoul />
      </div>
      <DropDown />
      <CounterList />
    </>
  );
}

export default App;
