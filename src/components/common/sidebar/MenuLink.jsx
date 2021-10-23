import React from 'react';
import AdminMenu from './partials/AdminMenu';
export default function MenuLink() {
  return (
    <ul class="sidebar-menu tree" data-widget="tree">
      <AdminMenu />
    </ul>
  );
}
