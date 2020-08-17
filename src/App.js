import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hall from "./pages/Hall";
import Home from "./pages/Home";
import User from "./pages/User";
import 'antd/dist/antd.css';

function App() {
  return  (

  <Router>
    <switch>
    <Route exact path={"/"}>
      <Home />
    </Route>
    <Route exact path={"/user"}>
      <User />
    </Route>
    <Route exact path={"/hall"}>
      <Hall />
    </Route>

    </switch>
  </Router>
  )
}
export default App;


