import React from "react";
import Helloworld from "./HelloWorld";
import ImageSoul from "./ImageSoul";
import "./style.css";
import DropDown from "./DropDown";
import Count from "./Counter";
function App() {
  return (
    <>
      <div className="suck">
        <Helloworld />
        <ImageSoul />
      </div>
      <DropDown />
      <Count />
    </>
  );
}

export default App;
