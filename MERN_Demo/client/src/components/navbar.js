import React from "react";

import './styles/nav.css';

import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <img className="d-flex align-items-center" id="nav-mern_icon" src="./images/mern-icon.png" alt="icon" />
          <a className="navbar-brand" href="/">MERN App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <NavLink className="nav-link" to="/create-log">
              <button type="button" className="btn btn-primary me-2">Create Log</button>
            </NavLink>
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;