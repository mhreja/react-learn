import React from "react";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Auth from "../auth/Auth";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      curTime: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars" />
          </button>
          {this.state.curTime}
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow">
              <Link className="nav-link dropdown-toggle" to="/profile">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  My Profile
                </span>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>

            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a
                style={{ cursor: "pointer" }}
                className="nav-link dropdown-toggle"
                onClick={() => {
                  if (window.confirm("Are you sure?")) {
                    Auth.logout(() => {
                      localStorage.removeItem("auth");
                      this.props.history.push("/");
                    });
                  }
                }}
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Log Out {this.props.hist}
                </span>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
