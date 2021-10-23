import React from 'react';
import { Link } from 'react-router-dom';
import { UserAccount } from './components';

export default function NavLinks(props) {
  return (
    <nav className="navbar navbar-static-top pl-10">
      {/* <!-- Sidebar toggle button--> */}
      <div className="app-menu">
        <ul className="header-megamenu nav">
          <li className="btn-group nav-item">
            <Link
              to="#"
              className="waves-effect waves-light nav-link rounded push-btn"
              data-toggle="push-menu"
              role="button"
              onClick={() => {
                props.handleNavOpen();
              }}
            >
              <span className="icon-Align-left">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </span>
            </Link>
          </li>
          {/* <li className="btn-group nav-item d-none d-xl-inline-block">
            <Link
              to="contact_app_chat.html"
              className="waves-effect waves-light nav-link rounded svg-bt-icon"
              title="Chat"
            >
              <i className="icon-Chat">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </Link>
          </li> */}
          {/* <li className="btn-group nav-item d-none d-xl-inline-block">
            <Link
              to="mailbox.html"
              className="waves-effect waves-light nav-link rounded svg-bt-icon"
              title="Mailbox"
            >
              <i className="icon-Mailbox">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </Link>
          </li> */}
          {/* <li className="btn-group nav-item d-none d-xl-inline-block">
            <Link
              to="extra_taskboard.html"
              className="waves-effect waves-light nav-link rounded svg-bt-icon"
              title="Taskboard"
            >
              <i className="icon-Clipboard-check">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </i>
            </Link>
          </li> */}
        </ul>
      </div>

      <div className="navbar-custom-menu r-side">
        <ul className="nav navbar-nav">
          {/* <li className="btn-group nav-item d-lg-inline-flex d-none">
            <Link
              to="#"
              data-provide="fullscreen"
              className="waves-effect waves-light nav-link rounded full-screen"
              title="Full Screen"
            >
              <i className="icon-Expand-arrows">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </Link>
          </li> */}
          <li className="btn-group d-lg-inline-flex d-none">
            <div className="app-menu">
              <div className="search-bx mx-5">
                <form>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="submit" id="button-addon3">
                        <i className="ti-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </li>
          {/* <!-- Notifications --> */}
          {/* <li className="dropdown notifications-menu">
            <Link
              to="#"
              className="waves-effect waves-light dropdown-toggle"
              data-toggle="dropdown"
              title="Notifications"
            >
              <i className="icon-Notifications">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </Link>
            <ul className="dropdown-menu animated bounceIn">
              <li className="header">
                <div className="p-20">
                  <div className="flexbox">
                    <div>
                      <h4 className="mb-0 mt-0">Notifications</h4>
                    </div>
                    <div>
                      <Link to="#" className="text-danger">
                        Clear All
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <ul className="menu sm-scrol">
                  <li>
                    <Link to="#">
                      <i className="fa fa-users text-info"></i> Curabitur id
                      eros quis nunc suscipit blandit.
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-warning text-warning"></i> Duis
                      malesuada justo eu sapien elementum, in semper diam
                      posuere.
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-users text-danger"></i> Donec at nisi
                      sit amet tortor commodo porttitor pretium Link erat.
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-shopping-cart text-success"></i> In
                      gravida mauris et nisi
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-user text-danger"></i> Praesent eu
                      lacus in libero dictum fermentum.
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-user text-primary"></i> Nunc fringilla
                      lorem
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-user text-success"></i> Nullam euismod
                      dolor ut quam interdum, at scelerisque ipsum imperdiet.
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="footer">
                <Link to="#">View all</Link>
              </li>
            </ul>
          </li> */}

          {/* <!-- User Account--> */}
            <UserAccount />

          {/* <!-- Control Sidebar Toggle Button --> */}
          {/* <li>
            <Link
              to="#"
              data-toggle="control-sidebar"
              title="Setting"
              className="waves-effect waves-light"
            >
              <i className="icon-Settings">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
