import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Layout } from 'antd/lib';
// import { Menu, Button } from 'antd/lib';
import { Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
// const { Header, Footer, Content } = Layout;
// const { Header } = Menu;
import "./index.css";
    

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              id = "home"            >
              Home
            </Link>            
            <Link
              to="/user"
              id = "user"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link
              to="/hall"
              id = "hall"
               >
              <FontAwesomeIcon icon={faVideo} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;