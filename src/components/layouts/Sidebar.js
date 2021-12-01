import React from "react";
import { faLaughWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <FontAwesomeIcon icon={faLaughWink} size="2x" />
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </Link>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>About</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
