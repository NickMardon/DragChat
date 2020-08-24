import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./index.css";


function Navbar(props) {

  const logoutBtnClick = () => {
    props.logout();
  };
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" id="home">
              Videezy
            </Link>
            <Link to="/user" id="user">
              <FontAwesomeIcon icon={faUser} />

              {props.currentUser?.name ? (
                <span className="cname"> {props.currentUser.name}</span>
              ) : (
                <span></span>
              )}
            </Link>
            <Link to="#" className="logout" onClick={logoutBtnClick}>
              <span>Logout</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Button className="logout" onClick={logoutBtnClick} type="text">
              Logout
            </Button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
