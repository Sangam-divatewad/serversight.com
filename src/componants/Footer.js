import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mb-0    bg-black">
      <div className="container nav ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
          <ul className="nav nav-tabs col-md-12  ">
            <li className="nav-item">
              <Link
                to="https://www.serversight.com"
                className=" nav-link px-2 py-2  "
              >
                <p className=" mb-0 text-info">
                  &copy; 2023 serversight.com, Inc
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className=" nav-link px-2 py-2  ">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/privacy" className=" nav-link px-2 py-2  ">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/terms" className=" nav-link px-2 py-2  ">
                Terms of Use
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className=" nav-link px-2 py-2  ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/indiatop" className=" nav-link px-2 py-2  ">
                India top News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className=" nav-link px-2 py-2  ">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className=" nav-link px-2 py-2  ">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tect" className=" nav-link px-2 py-2  ">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lifestyle" className=" nav-link px-2 py-2  ">
                Lifestyle
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/education" className=" nav-link px-2 py-2  ">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className=" nav-link px-2 py-2  ">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/intresting" className=" nav-link px-2 py-2  ">
                Intresting News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/world" className=" nav-link px-2 py-2  ">
                World Top News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className=" nav-link px-2 py-2  ">
                Business News
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
