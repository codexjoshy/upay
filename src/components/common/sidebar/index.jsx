import React from 'react';
import MenuLink from './MenuLink';
import SideBarFooter from './SideBarFooter';

export default function LeftSideBar() {
  return (
    <aside className="main-sidebar " style={{position: 'fixed'}}>
      {/* <!-- sidebar--> */}
      <section className="sidebar">
        {/* <!-- sidebar menu--> */}
        <MenuLink />
      </section>
      <div className="sidebar-footer">
        <SideBarFooter />
      </div>
    </aside>
  );
}
