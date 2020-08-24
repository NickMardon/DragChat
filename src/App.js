import React, { useState, useEffect, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  useParams,
} from "react-router-dom";
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

function App() {
  let history = useHistory();

  const [currentUser, setCurrentUser] = useState();

  const [userHalls, setUserHalls] = useState({});

  const [isLoggedIn] = useState(currentUser?.id ? true : false, [currentUser]);

  // const [currentHall, setCurrentHall] = useState();

  // const [activeRoom, setActiveRoom] = useState();

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

  const getAllUserHalls = () => {
    currentUser?.id
      ? API.getAllUserHalls(currentUser.id).then((res) => {
          setUserHalls(res.data);
        })
      : setUserHalls({});
  };








  function HallLoader() {
    const [currentHall, setCurrentHall] = useState();

    const [activeRoom, setActiveRoom] = useState();

    let { hallId } = useParams();

    API.getHallById(hallId).then((res) => {
      setCurrentHall(res.data);

      if (currentHall && currentHall.Main[0].id) {
        setActiveRoom(currentHall.Main[0]);
      } else {
        setActiveRoom({});
      }
    });
    return (
      <>
        {currentHall? (
          <Hall
            currentUser={currentUser}
            userHalls={[]}
            currentHall={currentHall}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
          />
        ) : (
          <h1>loading</h1>
        )}
      </>
    );
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

        {/* PATH not exact path, to hall/:username/:id send window.location.href or. */}

        <Route path={"/hall/:hallId"}>
          <HallLoader />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

// setCurrentHall(hall)
// setActiveRoom(hall.Main[0])

// probs dont need

// this wanted to be the hall Component, but guttin them cats man. mee YOUCH
