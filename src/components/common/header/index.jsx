import React, { Fragment } from 'react';

import NavLinks from './NavLinks';
import logoLight from '../../../images/logo-light.png';
import logoDark from '../../../images/logo-dark.png';
import logoDarkText from '../../../images/logo-dark-text.png';
import logoLightText from '../../../images/logo-light-text.png';

export default function Header(props) {
  // handleNavOpen;
  // console.log(props.handlNavOpen);
  return (
    <header className="main-header">
      <div className="d-flex align-items-center logo-box justify-content-center fixed-top">
        {/* <!-- Logo --> */}
        <a href="index.html" className="logo">
          {/* <!-- logo--> */}
          <div className="logo-mini">
            <span className="light-logo">
              <img src={logoLight} alt="logo" />
            </span>
            <span className="dark-logo">
              <img src={logoDark} alt="logo" />
            </span>
          </div>
          {/* <!-- logo--> */}
          <div className="logo-lg">
            <span className="light-logo">
              <img src={logoLightText} alt="logo" />
            </span>
            <span className="dark-logo">
              <img src={logoDarkText} alt="logo" />
            </span>
          </div>
        </a>
      </div>
      {/* <!-- Header Navbar --> */}
      <NavLinks handleNavOpen={props.handleNavOpen} />
    </header>
  );
}
