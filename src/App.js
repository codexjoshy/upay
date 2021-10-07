import React from 'react';
import $ from 'jquery';
import "./assets/css/vendors_css.css";
import "./assets/css/style.css";
import "./assets/css/color_theme.css";
import Login from "./auth/Login";
import { DashboardLayout } from './layouts';



function App() {
  return (
    <React.Fragment>
      <DashboardLayout />
    </React.Fragment>
  );
}

export default App;
