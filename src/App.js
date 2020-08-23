import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Hall from "./pages/Hall";
import Home from "./pages/Home";
import User from "./pages/User";
import "antd/dist/antd.css";
import NavFrame from "./components/Navframe/NavFrame";
import API from "./utils/api";

// //need to import dnd provider to wrap anything that will possibly use drag and drop interface
// import { DndProvider } from 'react-dnd';
// //have to pass a backend to it, here is where we switch out for the combo one later
// import { HTML5Backend } from "react-dnd-html5-backend";
// import Rooms from './components/dnd/rooms/rooms'
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  const [currentUser, setCurrentUser] = useState();

  const [userHalls, setUserHalls] = useState({});

  const [isLoggedIn] = useState(currentUser?.id ? true : false, [currentUser]);


  const [currentHall, setCurrentHall] = useState()

  const [activeRoom, setActiveRoom ] = useState()

  
  // one for getting current user
  useEffect(() => {
    API.getCurrentUser().then((res) => {
      setCurrentUser(res.data.user);
    });
  }, [isLoggedIn]);

  //this useEffect fires the below getAllUserHalls function on load, which is dependant on currentUser
  useEffect(() => {
    getAllUserHalls();
  }, [currentUser]);
  // TODO: find out why freshly added hall lags behind a bit.

  useEffect(() => {
    if (currentHall&&currentHall.Main[0].id){
      setActiveRoom(currentHall.Main[0])
    } else {
      setActiveRoom({})
    }
  }, [currentHall])

  //TODO: WORKSPACE
  
  const getAllUserHalls = () => {
    currentUser?.id? 
    API.getAllUserHalls(currentUser.id).then((res) => {
        //ADDS A 'CURRENT' status of FALSE to the room list except first one.
        const hallsCurrent = res.data.map(hall => {
          if (hall === res.data[0]) {
            hall.current = true

            // this todo block sets the current hall to the first one in the list
            setCurrentHall(hall)
            setActiveRoom(hall.Main[0])
          } else {
            hall.current = false
          }
        })
        setUserHalls(res.data);
        })
      : setUserHalls({});
  }


  //TODO: WORKSPACE END-------------COMMENTS----------------------
  //TODO:2. make a deletehall method, pass it into user page
  //TODO: WORKSPACE----------------------------------------------


  const logout = () => {
    API.logout().then((res) => {
      setCurrentUser();
      //redirecting home after logout.
      history.push("/home");
    });
  };

  return (
    <Router>
      <NavFrame logout={logout} currentUser={currentUser} />
      <Switch>
        <Route exact path={"/"}>
          <Home
            isLoggedIn={isLoggedIn}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            getHalls={getAllUserHalls}
          />
        </Route>

        <Route exact path={"/user"}>
          <User userHalls={userHalls} currentUser={currentUser} />
        </Route>

        <Route exact path={"/hall"}>
          {currentUser?.id ? (
            <Hall 
            currentUser={currentUser} 
            userHalls={userHalls} 
            currentHall={currentHall} 
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
              
            />
          ) : (
            <h1>Loading (spinner)</h1>
          )}

        </Route>
      </Switch>
    </Router>
  );
}
export default App;




