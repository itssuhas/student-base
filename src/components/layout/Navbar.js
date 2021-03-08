import React from 'react';
import {Link} from "react-router-dom";
import img from '../../assets/logo.svg';
import adimg from '../../assets/2020.jpg';
import {useFirebase} from "react-redux-firebase";

export const Navbar = () => {

  const firebase =useFirebase();

  return (

    <nav className="navbar navbar-expand-sm navbar-light bg-white">
   <div className="container">
    <a className="navbar-brand" href="/">
       <img src={img} height="30px" alt="logo" />
    </a>

    <div>
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/Studentform" className="btn btn-primary mr-3">
            Add Student
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-a dropdown-toggle"
            href="!#"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
            <img src={adimg} height="30px" alt="adminlogo" />
            <span className="ml-2 navbar-text">Suhas Salunke</span>
          </a>
          <div className="dropdown-menu">
            
            <a className="dropdown-item" href="!#" onClick={()=> firebase.logout()}>
              Logout
            </a>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
