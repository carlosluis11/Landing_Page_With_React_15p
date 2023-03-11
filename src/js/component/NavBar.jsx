import React from "react";

export const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <a className="navbar-brand text-light ms-4" href="#">Start Bootstrap</a>
            </div>
            <ul className="navbar-nav me-4">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-secondary" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary disabled">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary disabled">Contact</a>
              </li>
            </ul>
        </div>
      </nav>
    );
};