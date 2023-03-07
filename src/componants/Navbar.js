import React from "react";
import { Link } from "react-router-dom";



export default function Navbar(props) {
    return (
      <div style={{position:"sticky"}}>
        <nav className={`navbar sticky navbar-expand-lg bg-${props.mode}`} >
          <div className="container-fluid">
            <Link to="/"  className={` nav-link   text-${props.textMode}`} style={{cursor:"pointer"}} >
              
              <div className="container text-center mt-1" style={{fontFamily:"sans",fontStyle:"italic",fontWeight:"bold",fontSize:"2rem" }}>serversight.com</div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse ms-2 ps-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  nav nav-tabs mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`  nav-link  text-${props.textMode}`}
                    aria-current="page"
                    to="/"
                   
                  >
                        AllinOne
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`  nav-link  text-${props.textMode}`}
                    aria-current="page"
                    to="/indiatop"
                   
                  >
                        India
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`  nav-link text-${props.textMode}`}
                    aria-current="page"
                    to="/world"
                   
                  >
                        World
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`  nav-link text-${props.textMode}`}
                    aria-current="page"
                    to="/education"
                   
                  >
                        Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`  nav-link text-${props.textMode}`}
                    aria-current="page"
                    to="/business"
                   
                  >
                        Business
                  </Link>
                </li>
                 
                <li className="nav-item">
                  <Link
                    className={`nav-link  text-${props.textMode}`}
                    aria-current="page"
                    to="/entertainment"
                  >
                        Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  text-${props.textMode}`}
                    aria-current="page"
                    to="/lifestyle"
                  >
                        Lifestyle
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  text-${props.textMode}`}
                    aria-current="page"
                    to="/science"
                  >
                        Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  text-${props.textMode}`}
                    aria-current="page"
                    to="/sports"
                  >
                        Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  text-${props.textMode}`}
                    aria-current="page"
                    to="/tech"
                  >
                        Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${props.textMode}`}
                    aria-current="page"
                    to="/intresting"
                  >
                        Intresting
                  </Link>
                </li>
              </ul>
              
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                style={{cursor:"pointer"}}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                dark mode
              </label>
            </div>
          </div>
        </nav>
      </div>
    );
}
