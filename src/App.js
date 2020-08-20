import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Hall from "./pages/Hall";
import Home from "./pages/Home";
import User from "./pages/User";
import 'antd/dist/antd.css';
import NavFrame from "./components/Navframe/NavFrame"
import API from './utils/api';

// //need to import dnd provider to wrap anything that will possibly use drag and drop interface
// import { DndProvider } from 'react-dnd';
// //have to pass a backend to it, here is where we switch out for the combo one later
// import { HTML5Backend } from "react-dnd-html5-backend";
// import Rooms from './components/dnd/rooms/rooms'
import { useHistory } from "react-router-dom";

function App() {

  let history = useHistory();

  const [currentUser, setCurrentUser] = useState()
 
  const [userHalls, setUserHalls] = useState({})


  useEffect(() => {
    API.getCurrentUser().then(res => {
      setCurrentUser(res.data.user);
    })
  }, [])

  const logout = ()=>{
    API.logout().then(res=>{
      setCurrentUser();
      //redirecting home after logout.
      history.push("/home");
    })
  }


  return  (
  <Router>
      <NavFrame logout={logout} currentUser={currentUser}/>
    <Switch>
    <Route exact path={"/"}>
      <Home setCurrentUser={setCurrentUser} currentUser={currentUser}/>
    </Route>
    <Route exact path={"/user"}>
      <User currentUser={currentUser}/>
    </Route>
    <Route exact path={"/hall"}>

    {currentUser?.id ? <Hall currentUser={currentUser}/> : <h1>Loading (spinner)</h1>}
      
    </Route>
    </Switch>
  </Router>
  )
}
export default App;


