import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div style={{ position: "sticky" }}>
      <nav className={`navbar sticky navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link
            to="/"
            className={` nav-link   text-${props.textMode}`}
            style={{ cursor: "pointer" }}
          >
            <div
              className="container text-center mt-1"
              style={{
                fontFamily: "sans",
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              serversight.com
            </div>
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
            <span style={{ fontSize: "1rem" }} className="text-primary">
              News Categories
            </span>
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
                  LATEST
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
                <li>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span style={{fontSize:"1.2rem"}}>More Categories</span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <button
                          class={`btn text-${props.textMode} dropdown-toggle`}
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          More Categories
                        </button>
                        <ul class="dropdown-menu dropdown-menu">
                          <li>
                            <Link className={`dropdown-item `} to="/intresting">
                              Intresting News
                            </Link>
                          </li>
                          <li>
                            <Link className={`dropdown-item `} to="/science">
                              Science News
                            </Link>
                          </li>
                          <li>
                            <Link className={`dropdown-item `} to="/lifestyle">
                              Lifestyle News
                            </Link>
                          </li>
                          <li>
                            <Link className={`dropdown-item `} to="/privacy">
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link className={`dropdown-item `} to="/terms">
                              Terms of Use
                            </Link>
                          </li>
                          <li>
                            <Link className={`dropdown-item `} to="/contact">
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
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
              style={{ cursor: "pointer" }}
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
