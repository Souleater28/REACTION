import React from "react";
import AdminPageContainer from "./pages/AdminP";

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
export default App;
