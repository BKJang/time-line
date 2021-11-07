import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./styles/timeline.css";
// import TimeLine from "./containers/TimeLine";
import { routePath } from "./constants";
import Dangjin1 from "./views/Dangjin1";

function App() {
  return (
    <BrowserRouter>
    <Route component={Dangjin1} exact path={routePath.dangjin1.path} />
    </BrowserRouter>
    // <TimeLine />
  );
}

export default App;
