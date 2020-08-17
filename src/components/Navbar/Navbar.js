import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar(){
        return (
            <nav>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/hall">Meeting</Link>
                <Link className="navLink" to="/user">User</Link>
            </nav>
          );  
}

export default Navbar;