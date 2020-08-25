import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar(props) {
  const logoutBtnClick = () => {
    props.logout();
    window.location.reload(true);
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
            {!!props.currentUser?.name? (
              <span></span>
            ) : (
              <Link to="#" className="logout" onClick={logoutBtnClick}>
                <span>Logout</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
