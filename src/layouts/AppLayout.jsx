import React, { useState } from 'react';

import LeftSideBar from '../components/common/sidebar';
import Headers from '../components/common/header';
import { Route } from 'react-router';

export default function AppLayout({ children, ...rest }) {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <Route {...rest}>
      <div
        className={`light-skin sidebar-mini theme-primary ${
          toggleNav ? 'sidebar-collapse' : 'sidebar-open'
        }`}
        // className="hold-transition light-skin sidebar-mini theme-primary sidebar-collapse sidebar-open"
        style={{ height: 'auto', minHeight: '100%' }}
      >
        <div className="wrapper">
          <LeftSideBar />
          <Headers handleNavOpen={() => setToggleNav(!toggleNav)} />
          <div className="content-wrapper">{children}</div>
        </div>
      </div>
    </Route>
  );
}
