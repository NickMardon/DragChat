import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Hall from "./pages/Hall";
import Home from "./pages/Home";
import User from "./pages/User";
import 'antd/dist/antd.css';
import NavFrame from "./components/Navframe/NavFrame"

// //need to import dnd provider to wrap anything that will possibly use drag and drop interface
// import { DndProvider } from 'react-dnd';
// //have to pass a backend to it, here is where we switch out for the combo one later
// import { HTML5Backend } from "react-dnd-html5-backend";
// import Rooms from './components/dnd/rooms/rooms'


function App() {

  // const [currentUser, setCurrentUser] = useState()
 
  // useEffect(() => {
  //   API.getCurrentUser().then(res => {
  //     setCurrentUser(res.data.user);
  //   })
  // }, [])

  // const logout = ()=>{
  //   API.logout().then(res=>{
  //     setCurrentUser();
  //   })
  // }

  return  (
    <div>
  <Router>
      <NavFrame logout={logout} currentUser={currentUser}/>
    <Switch>
    <Route exact path={"/"}>
      <Home currentUser={currentUser}/>
    </Route>
    <Route exact path={"/user"}>
      <User currentUser={currentUser}/>
    </Route>
    <Route exact path={"/hall"}>
      <Hall currentUser={currentUser}/>
    </Route>
    {/* TODO: do we have to pass params into the Hall page being rendered for that to work? */}
    {/* <Route path={`/hall/:id`}>
      <Hall currentUser={currentUser}/>
    </Route> */}
    </Switch>
  </Router>
  
  </div>
  )
}
export default App;


