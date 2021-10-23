import React from 'react';
import { Link } from 'react-router-dom';
export default function MenuLink() {
  return (
    <ul class="sidebar-menu tree" data-widget="tree">
      <li class="header">Menu </li>
      <li class="treeview active menu-open">
        <Link to="#">
          <i class="icon-Layout-4-blocks">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Dashboard</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="index.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Analytics
            </Link>
          </li>
          <li>
            <Link to="index2.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              CRM
            </Link>
          </li>
          <li class="active">
            <Link to="index3.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Hospital
            </Link>
          </li>
          <li>
            <Link to="index4.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Analisis
            </Link>
          </li>
          <li>
            <Link to="index5.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Sales Analisis
            </Link>
          </li>
        </ul>
      </li>
      <li class="header">Apps </li>
      <li>
        <Link to="mailbox.html">
          <i class="icon-Incoming-mail">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Mailbox</span>
        </Link>
      </li>
      <li>
        <Link to="extra_calendar.html">
          <i span="" class="icon-Layout-grid">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Calendar</span>
        </Link>
      </li>
      <li>
        <Link to="contact_app.html">
          <i class="icon-Adress-book">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Contact List</span>
        </Link>
      </li>
      <li>
        <Link to="contact_app_chat.html">
          <i class="icon-Chat">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Chat</span>
        </Link>
      </li>
      <li>
        <Link to="extra_taskboard.html">
          <i class="icon-Clipboard-check">
            <span class="path1"></span>
            <span class="path2"></span>
            <span class="path3"></span>
          </i>
          <span>Todo</span>
        </Link>
      </li>
      <li class="header">Components </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Write">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Utilities</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="ui_grid.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Grid System
            </Link>
          </li>
          <li class="treeview">
            <Link to="#">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Card
              <span class="pull-right-container">
                <i class="fa fa-angle-right pull-right"></i>
              </span>
            </Link>
            <ul class="treeview-menu">
              <li>
                <Link to="box_cards.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  User Card
                </Link>
              </li>
              <li>
                <Link to="box_advanced.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Advanced Card
                </Link>
              </li>
              <li>
                <Link to="box_basic.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Basic Card
                </Link>
              </li>
              <li>
                <Link to="box_color.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Card Color
                </Link>
              </li>
              <li>
                <Link to="box_group.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Card Group
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="ui_badges.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Badges
            </Link>
          </li>
          <li>
            <Link to="ui_border_utilities.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Border
            </Link>
          </li>
          <li>
            <Link to="ui_buttons.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Buttons
            </Link>
          </li>
          <li>
            <Link to="ui_color_utilities.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Color
            </Link>
          </li>
          <li>
            <Link to="ui_dropdown.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Dropdown
            </Link>
          </li>
          <li>
            <Link to="ui_dropdown_grid.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Dropdown Grid
            </Link>
          </li>
          <li>
            <Link to="ui_progress_bars.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Progress Bars
            </Link>
          </li>
          <li class="treeview">
            <Link to="#">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Icons
              <span class="pull-right-container">
                <i class="fa fa-angle-right pull-right"></i>
              </span>
            </Link>
            <ul class="treeview-menu">
              <li>
                <Link to="icons_fontawesome.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Font Awesome
                </Link>
              </li>
              <li>
                <Link to="icons_glyphicons.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Glyphicons
                </Link>
              </li>
              <li>
                <Link to="icons_material.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Material Icons
                </Link>
              </li>
              <li>
                <Link to="icons_themify.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Themify Icons
                </Link>
              </li>
              <li>
                <Link to="icons_simpleline.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Simple Line Icons
                </Link>
              </li>
              <li>
                <Link to="icons_cryptocoins.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Cryptocoins Icons
                </Link>
              </li>
              <li>
                <Link to="icons_flag.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Flag Icons
                </Link>
              </li>
              <li>
                <Link to="icons_weather.html">
                  <i class="icon-Commit">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Weather Icons
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="ui_ribbons.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Ribbons
            </Link>
          </li>
          <li>
            <Link to="ui_sliders.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Sliders
            </Link>
          </li>
          <li>
            <Link to="ui_typography.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Typography
            </Link>
          </li>
          <li>
            <Link to="ui_tab.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Tabs
            </Link>
          </li>
          <li>
            <Link to="ui_timeline.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Timeline
            </Link>
          </li>
          <li>
            <Link to="ui_timeline_horizontal.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Horizontal Timeline
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Brush">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Components</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="component_bootstrap_switch.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Bootstrap Switch
            </Link>
          </li>
          <li>
            <Link to="component_date_paginator.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Date Paginator
            </Link>
          </li>
          <li>
            <Link to="component_media_advanced.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Advanced Medias
            </Link>
          </li>
          <li>
            <Link to="component_rangeslider.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Range Slider
            </Link>
          </li>
          <li>
            <Link to="component_rating.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Ratings
            </Link>
          </li>
          <li>
            <Link to="component_animations.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Animations
            </Link>
          </li>
          <li>
            <Link to="extension_fullscreen.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Fullscreen
            </Link>
          </li>
          <li>
            <Link to="extension_pace.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Pace
            </Link>
          </li>
          <li>
            <Link to="component_nestable.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Nestable
            </Link>
          </li>
          <li>
            <Link to="component_portlet_draggable.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Draggable Portlets
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-File">
            <span class="path1"></span>
            <span class="path2"></span>
            <span class="path3"></span>
          </i>
          <span>Forms</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="forms_advanced.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Form Elements
            </Link>
          </li>
          <li>
            <Link to="forms_general.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Form Layout
            </Link>
          </li>
          <li>
            <Link to="forms_wizard.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Form Wizard
            </Link>
          </li>
          <li>
            <Link to="forms_validation.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Form Validation
            </Link>
          </li>
          <li>
            <Link to="forms_mask.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Formatter
            </Link>
          </li>
          <li>
            <Link to="forms_xeditable.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Xeditable Editor
            </Link>
          </li>
          <li>
            <Link to="forms_dropzone.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Dropzone
            </Link>
          </li>
          <li>
            <Link to="forms_code_editor.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Code Editor
            </Link>
          </li>
          <li>
            <Link to="forms_editors.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Editor
            </Link>
          </li>
          <li>
            <Link to="forms_editor_markdown.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Markdown
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Layout-top-panel-1">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Tables</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="tables_simple.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Simple tables
            </Link>
          </li>
          <li>
            <Link to="tables_data.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Data tables
            </Link>
          </li>
          <li>
            <Link to="tables_editable.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Editable Tables
            </Link>
          </li>
          <li>
            <Link to="tables_color.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Table Color
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Chart-pie">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Charts</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="charts_chartjs.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              ChartJS
            </Link>
          </li>
          <li>
            <Link to="charts_flot.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Flot
            </Link>
          </li>
          <li>
            <Link to="charts_inline.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Inline charts
            </Link>
          </li>
          <li>
            <Link to="charts_morris.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Morris
            </Link>
          </li>
          <li>
            <Link to="charts_peity.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Peity
            </Link>
          </li>
          <li>
            <Link to="charts_chartist.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Chartist
            </Link>
          </li>
          <li>
            <Link to="charts_c3_axis.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Axis Chart
            </Link>
          </li>
          <li>
            <Link to="charts_c3_bar.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Bar Chart
            </Link>
          </li>
          <li>
            <Link to="charts_c3_data.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Data Chart
            </Link>
          </li>
          <li>
            <Link to="charts_c3_line.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Line Chart
            </Link>
          </li>
          <li>
            <Link to="charts_echarts_basic.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Basic Charts
            </Link>
          </li>
          <li>
            <Link to="charts_echarts_bar.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Bar Chart
            </Link>
          </li>
          <li>
            <Link to="charts_echarts_pie_doughnut.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Pie &amp; Doughnut Chart
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Marker"></i>

          <span>Maps</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="map_google.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Google Map
            </Link>
          </li>
          <li>
            <Link to="map_vector.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Vector Map
            </Link>
          </li>
        </ul>
      </li>
      <li class="header">Collections </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Library">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Widgets</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="widgets_blog.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Blog
            </Link>
          </li>
          <li>
            <Link to="widgets_chart.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Chart
            </Link>
          </li>
          <li>
            <Link to="widgets_list.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              List
            </Link>
          </li>
          <li>
            <Link to="widgets_social.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Social
            </Link>
          </li>
          <li>
            <Link to="widgets_statistic.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Statistic
            </Link>
          </li>
          <li>
            <Link to="widgets_weather.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Weather
            </Link>
          </li>
          <li>
            <Link to="widgets.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Widgets
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Book-open">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Modals</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="component_modals.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Modals
            </Link>
          </li>
          <li>
            <Link to="component_sweatalert.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Sweet Alert
            </Link>
          </li>
          <li>
            <Link to="component_notification.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Toastr
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Cart">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Ecommerce</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="ecommerce_products.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Products
            </Link>
          </li>
          <li>
            <Link to="ecommerce_cart.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Products Cart
            </Link>
          </li>
          <li>
            <Link to="ecommerce_products_edit.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Products Edit
            </Link>
          </li>
          <li>
            <Link to="ecommerce_details.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Product Details
            </Link>
          </li>
          <li>
            <Link to="ecommerce_orders.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Product Orders
            </Link>
          </li>
          <li>
            <Link to="ecommerce_checkout.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Products Checkout
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="email_index.html">
          <i class="icon-Mail-notification">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Emails</span>
        </Link>
      </li>
      <li class="header">User Pages</li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-User">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Usefull Page</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="invoice.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Invoice
            </Link>
          </li>
          <li>
            <Link to="invoicelist.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Invoice List
            </Link>
          </li>
          <li>
            <Link to="extra_app_ticket.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Support Ticket
            </Link>
          </li>
          <li>
            <Link to="extra_profile.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              User Profile
            </Link>
          </li>
          <li>
            <Link to="contact_userlist_grid.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Userlist Grid
            </Link>
          </li>
          <li>
            <Link to="contact_userlist.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Userlist
            </Link>
          </li>
          <li>
            <Link to="sample_faq.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              FAQs
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Clipboard">
            <span class="path1"></span>
            <span class="path2"></span>
            <span class="path3"></span>
            <span class="path4"></span>
          </i>
          <span>Extra Pages</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="sample_blank.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Blank
            </Link>
          </li>
          <li>
            <Link to="sample_coming_soon.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Coming Soon
            </Link>
          </li>
          <li>
            <Link to="sample_custom_scroll.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Custom Scrolls
            </Link>
          </li>
          <li>
            <Link to="sample_gallery.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="sample_lightbox.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Lightbox Popup
            </Link>
          </li>
          <li>
            <Link to="sample_pricing.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Pricing
            </Link>
          </li>
        </ul>
      </li>
      <li class="header">Login &amp; Error</li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Chat-locked">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Authentication</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="auth_login.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Login
            </Link>
          </li>
          <li>
            <Link to="auth_regi ster.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Register
            </Link>
          </li>
          <li>
            <Link to="auth_lockscreen.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Lockscreen
            </Link>
          </li>
          <li>
            <Link to="auth_user_pass.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Recover password
            </Link>
          </li>
        </ul>
      </li>
      <li class="treeview">
        <Link to="#">
          <i class="icon-Chat-check">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <span>Miscellaneous</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-right pull-right"></i>
          </span>
        </Link>
        <ul class="treeview-menu">
          <li>
            <Link to="error_404.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Error 404
            </Link>
          </li>
          <li>
            <Link to="error_500.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Error 500
            </Link>
          </li>
          <li>
            <Link to="error_maintenance.html">
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Maintenance
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
