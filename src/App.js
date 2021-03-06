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

// import { DndProvider } from 'react-dnd';
// import MultiBackend from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'

import API from "./utils/api";

import { Row } from "antd";

function App() {
  let history = useHistory();

  const [currentUser, setCurrentUser] = useState();

  const [userHalls, setUserHalls] = useState({});

  const [isLoggedIn] = useState(currentUser?.id ? true : false, [currentUser]);

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

    useEffect(() => {
      if (currentUser && userHalls && !currentHall) {
        API.getHallById(hallId).then((res) => {
          const newActiveHall = res.data;
          setCurrentHall(newActiveHall);
          if (newActiveHall?.Main?.[0]?.id) {
            setActiveRoom(newActiveHall.Main[0]);
          } else {
            setActiveRoom({});
          }
        });
      }
    }, [currentHall]);

    return (
      <>
        {currentHall ? (
          <Hall
            currentUser={currentUser}
            userHalls={[]}
            currentHall={currentHall}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
          />
        ) : (
          <>
            <h1>loading...</h1>
          </>
        )}
      </>
    );
  }

  const logout = () => {
    API.logout().then((res) => {
      setCurrentUser({});
      //redirecting home after logout.
      window.location.reload(true);
    });
  };

  return (
    // <DndProvider backend={MultiBackend} options={HTML5toTouch}>
    <Router>
      <Row>
        <NavFrame logout={logout} currentUser={currentUser} isLoggedIn={isLoggedIn}/>
      </Row>
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
          <User
            userHalls={userHalls}
            getHalls={getAllUserHalls}
            currentUser={currentUser}
          />
        </Route>

        {/* PATH not exact path, to hall/:username/:id send window.location.href or. */}

        <Route path={"/hall/:hallId"}>
          <HallLoader />
        </Route>
      </Switch>
    </Router>
    // </DndProvider>
  );
}
export default App;
