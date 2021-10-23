import React, { useEffect } from 'react';
// import logoLight from '../../../images/logo-light.png';
// import logoDark from '../../../images/logo-dark.png';
// import logoDarkText from '../../../images/logo-dark-text.png';
// import logoLightText from '../../../images/logo-light-text.png';
import avatar12 from '../../../images/avatar/avatar-12.png';
import $001Glass from '../../../images/svg-icon/color-svg/001-glass.svg';
import $002Google from '../../../images/svg-icon/color-svg/002-google.svg';
import $003Settings from '../../../images/svg-icon/color-svg/003-settings.svg';
import avatar10 from '../../../images/avatar/avatar-10.png';
import avatar3 from '../../../images/avatar/avatar-3.png';
import avatar4 from '../../../images/avatar/avatar-4.png';
import custom2 from '../../../images/svg-icon/color-svg/custom-2.svg';

import img1 from '../../../images/gallery/creative/img-1.jpg';
import img2 from '../../../images/gallery/creative/img-2.jpg';
import img3 from '../../../images/gallery/creative/img-3.jpg';
import img4 from '../../../images/gallery/creative/img-4.jpg';
import img5 from '../../../images/gallery/creative/img-5.jpg';
// import '../../../assets/css/background-images.css';
import toast from 'react-hot-toast';

export default function Home() {
  useEffect(() => {
    // toast('Login Successful', {
    //   duration: 4000,
    //   position: 'top-center',
    //   // Styling
    //   style: {},
    //   className: '',
    //   // Custom Icon
    //   icon: '👏',
    //   // Change colors of success/error/loading icon
    //   iconTheme: {
    //     primary: '#000',
    //     secondary: '#fff',
    //   },
    //   // Aria
    //   ariaProps: {
    //     role: 'status',
    //     'aria-live': 'polite',
    //   },
    // });
    // toast.success('Successfully created!');
  }, [])
  
  return (
    <>
      <div className="container-full">
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <section className="content">
          <div className="row">
            <div className="col-xl-8 col-12">
              <div className="row">
                <div className="col-xl-4">
                  <div className="info-box pull-up">
                    <span className="info-box-icon bg-primary-light rounded-circle">
                      <span className="icon-Fan"></span>
                    </span>

                    <div className="info-box-content text-right">
                      <span className="info-box-number">90%</span>
                      <span className="info-box-text">Store Traffic</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="info-box pull-up">
                    <span className="info-box-icon bg-primary-light rounded-circle">
                      <span className="icon-Dollar">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </span>
                    </span>

                    <div className="info-box-content text-right">
                      <span className="info-box-number">$41,410k</span>
                      <span className="info-box-text">Income</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="info-box pull-up">
                    <span className="info-box-icon bg-primary-light rounded-circle">
                      <span className="icon-User">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </span>
                    </span>

                    <div className="info-box-content text-right">
                      <span className="info-box-number">40k</span>
                      <span className="info-box-text">Average Visitor</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="box-header no-border">
                  <h4 className="box-title">Profit</h4>
                  <div className="box-controls pull-right">
                    <ul className="nav nav-pills nav-pills-sm" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link py-2 px-4 b-0"
                          data-toggle="tab"
                          href="#"
                        >
                          <span className="nav-text base-font">Month</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link py-2 px-4 b-0"
                          data-toggle="tab"
                          href="#"
                        >
                          <span className="nav-text base-font">Week</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link py-2 px-4 b-0 active"
                          data-toggle="tab"
                          href="#"
                        >
                          <span className="nav-text base-font">Day</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div id="charts_widget_1_chart"></div>
                </div>
              </div>
              <div className="box">
                <div className="box-body d-flex p-0">
                  <div
                    className="flex-grow-1 bg-primary p-30 flex-grow-1 bg-img"
                    style={{
                      backgroundPosition: 'left bottom',
                      backgroundSize: 'auto 100%',
                      backgroundImage: `url(${custom2})`,
                    }}
                  >
                    <div className="row">
                      <div className="col-12 col-md-5"></div>
                      <div className="col-12 col-md-7">
                        <h4 className="text-white">
                          Join Us now to get 15% off
                        </h4>

                        <p className="text-white-60 my-10 font-size-16">
                          Offering discounts htmlFor your online store can be a
                          powerful weapon in to drive loyalty
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary btn-outline-primary"
                        >
                          Join Now!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12">
              <div className="box">
                <div className="box-body text-center">
                  <div className="mb-20 mt-20">
                    <img
                      src={avatar12}
                      width="150"
                      className="rounded-circle bg-info-light"
                      alt="user"
                    />
                    <h4 className="mt-20 mb-0">johen doe</h4>
                    <a href="mailto:dummy@gmail.com">dummy@gmail.com</a>
                  </div>
                  <div className="badge badge-pill badge-info-light font-size-16">
                    Dashboard
                  </div>
                  <div className="badge badge-pill badge-primary-light font-size-16">
                    UI
                  </div>
                  <div className="badge badge-pill badge-danger-light font-size-16">
                    UX
                  </div>
                  <div
                    className="badge badge-pill badge-warning-light font-size-16"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="3 more"
                  >
                    +10
                  </div>
                </div>
                <div className="p-20 mt-15 bt-1">
                  <div className="row text-center">
                    <div className="col-6 br-1">
                      <a
                        href="#"
                        className="link d-flex align-items-center justify-content-center font-medium"
                      >
                        <span className="icon-Mail font-size-20 mr-5"></span>
                        Message
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="#"
                        className="link d-flex align-items-center justify-content-center font-medium"
                      >
                        <span className="icon-Code1 font-size-20 mr-5">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </span>
                        Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="box-header no-border">
                  <h4 className="box-title">Revenue Overview</h4>
                  <ul className="box-controls pull-right">
                    <li className="dropdown">
                      <a
                        data-toggle="dropdown"
                        href="#"
                        className="btn btn-success-light px-10 base-font"
                      >
                        Export
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="ti-import"></i> Import
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export"></i> Export
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-printer"></i> Print
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          <i className="ti-settings"></i> Settings
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box-body py-0">
                  <div className="row">
                    <div className="col-6">
                      <div className="py-10">
                        <div className="text-fade font-weight-600">
                          Average Profit
                        </div>
                        <div className="font-size-18 font-weight-600">
                          $150K
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-10">
                        <div className="text-fade font-weight-600">Revenue</div>
                        <div className="font-size-18 font-weight-600">
                          $15,250k
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-10">
                        <div className="text-fade font-weight-600">Taxes</div>
                        <div className="font-size-18 font-weight-600">$50k</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-10">
                        <div className="text-fade font-weight-600">
                          Yearly Income
                        </div>
                        <div className="font-size-18 font-weight-600">
                          $44,850k
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-body p-0">
                  <div id="revenue4" className="text-dark"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-4">
              <div className="box bg-transparent no-shadow mb-0">
                <div className="box-header no-border px-0">
                  <h4 className="box-title">Trends</h4>
                  <ul className="box-controls pull-right">
                    <li className="dropdown">
                      <a data-toggle="dropdown" href="#" className="px-10 pt-5">
                        <i className="ti-more-alt"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="ti-import"></i> Import
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export"></i> Export
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-printer"></i> Print
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          <i className="ti-settings"></i> Settings
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box box-body pull-up">
                <div className="d-flex align-items-center">
                  <div className="mr-15 bg-lightest h-50 w-50 l-h-50 rounded text-center">
                    <img src={$001Glass} className="h-30" alt="" />
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2 font-weight-500">
                    <a
                      href="#"
                      className="text-dark hover-primary mb-1 font-size-16"
                    >
                      Duis faucibus lorem
                    </a>
                    <span className="text-fade">
                      Pharetra, Nulla , Nec, Aliquet
                    </span>
                  </div>
                  <span className="badge badge-xl badge-light">
                    <span className="font-weight-600">+125$</span>
                  </span>
                </div>
              </div>
              <div className="box box-body pull-up">
                <div className="d-flex align-items-center">
                  <div className="mr-15 bg-lightest h-50 w-50 l-h-50 rounded text-center">
                    <img src={$002Google} className="h-30" alt="" />
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2 font-weight-500">
                    <a
                      href="#"
                      className="text-dark hover-danger mb-1 font-size-16"
                    >
                      Mauris varius augue
                    </a>
                    <span className="text-fade">
                      Pharetra, Nulla , Nec, Aliquet
                    </span>
                  </div>
                  <span className="badge badge-xl badge-light">
                    <span className="font-weight-600">+125$</span>
                  </span>
                </div>
              </div>
              <div className="box box-body pull-up">
                <div className="d-flex align-items-center">
                  <div className="mr-15 bg-lightest h-50 w-50 l-h-50 rounded text-center">
                    <img src={$003Settings} className="h-30" alt="" />
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2 font-weight-500">
                    <a
                      href="#"
                      className="text-dark hover-success mb-1 font-size-16"
                    >
                      Aliquam in magna
                    </a>
                    <span className="text-fade">
                      Pharetra, Nulla , Nec, Aliquet
                    </span>
                  </div>
                  <span className="badge badge-xl badge-light">
                    <span className="font-weight-600">+125$</span>
                  </span>
                </div>
              </div>
              <div className="box box-body b-dashed b-1 bg-transparent text-center">
                <a href="#" className="d-block">
                  View More
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="box bg-transparent no-shadow mb-0">
                <div className="box-header no-border px-0">
                  <h4 className="box-title">Support Tickets</h4>
                </div>
              </div>
              <div className="box box-body p-0 pull-up">
                <div className="media-list">
                  <div className="media align-items-center">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img
                        src={avatar10}
                        className="bg-success-light"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p className="font-size-16">
                        <a className="hover-primary" href="#">
                          Theron Trump
                        </a>
                      </p>
                      2 day ago
                    </div>
                    <div className="media-right">
                      <span className="badge badge-warning-light">Pending</span>
                    </div>
                  </div>
                  <div className="media pt-0">
                    <p>Lorem ipsum dolor sit amet,consectetuer.</p>
                  </div>
                </div>
              </div>
              <div className="box box-body p-0 pull-up">
                <div className="media-list">
                  <div className="media align-items-center">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img
                        src={avatar3}
                        className="bg-success-light"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p className="font-size-16">
                        <a className="hover-primary" href="#">
                          Johen Doe
                        </a>
                      </p>
                      5 day ago
                    </div>
                    <div className="media-right">
                      <span className="badge badge-success-light">Open</span>
                    </div>
                  </div>
                  <div className="media pt-0">
                    <p>Lorem ipsum dolor sit amet,consectetuer.</p>
                  </div>
                </div>
              </div>
              <div className="box box-body p-0 pull-up">
                <div className="media-list">
                  <div className="media align-items-center">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img
                        src={avatar4}
                        className="bg-success-light"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p className="font-size-16">
                        <a className="hover-primary" href="#">
                          Tyler Mark
                        </a>
                      </p>
                      5 day ago
                    </div>
                    <div className="media-right">
                      <span className="badge badge-success-light">Open</span>
                    </div>
                  </div>
                  <div className="media pt-5">
                    <p>
                      Lorem ipsum dolor sit amet,consectetuer edipiscing
                      elit,sed diam nonummy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="box bg-transparent no-shadow mb-0">
                <div className="box-header no-border px-0">
                  <h4 className="box-title">Top Country Selling</h4>
                </div>
              </div>
              <div className="box">
                <div className="box-body p-0">
                  <div className="media-list media-list-hover media-list-divided">
                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-us"></i>
                      <span className="title">USA </span>
                      <span className="badge badge-pill badge-secondary-light">
                        450
                      </span>
                    </a>

                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-ba"></i>
                      <span className="title">Bahrain</span>
                      <span className="badge badge-pill badge-primary-light">
                        432
                      </span>
                    </a>

                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-ch"></i>
                      <span className="title">China</span>
                      <span className="badge badge-pill badge-info-light">
                        410
                      </span>
                    </a>

                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-de"></i>
                      <span className="title">Denmark</span>
                      <span className="badge badge-pill badge-success-light">
                        400
                      </span>
                    </a>

                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-fr"></i>
                      <span className="title">France</span>
                      <span className="badge badge-pill badge-danger-light">
                        320
                      </span>
                    </a>

                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-ga"></i>
                      <span className="title">Greece</span>
                      <span className="badge badge-pill badge-warning-light">
                        300
                      </span>
                    </a>

                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-in"></i>
                      <span className="title">India</span>
                      <span className="badge badge-pill badge-secondary-light">
                        200
                      </span>
                    </a>

                    <a className="media media-single" href="#">
                      <i className="font-size-18 mr-0 flag-icon flag-icon-ae"></i>
                      <span className="title">UAE</span>
                      <span className="badge badge-pill badge-secondary-light">
                        150
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title align-items-start flex-column">
                    New Arrivals
                    <small className="subtitle">
                      More than 400+ new members
                    </small>
                  </h4>
                </div>
                <div className="box-body">
                  <div className="table-responsive">
                    <table className="table no-border">
                      <thead>
                        <tr className="text-uppercase bg-lightest">
                          <th style={{ minWidth: '250px' }}>
                            <span className="text-dark">products</span>
                          </th>
                          <th style={{ minWidth: '100px' }}>
                            <span className="text-fade">pruce</span>
                          </th>
                          <th style={{ minWidth: '100px' }}>
                            <span className="text-fade">deposit</span>
                          </th>
                          <th style={{ minWidth: '150px' }}>
                            <span className="text-fade">agent</span>
                          </th>
                          <th style={{ minWidth: '130px' }}>
                            <span className="text-fade">status</span>
                          </th>
                          <th style={{ minWidth: '120px' }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 mr-20">
                                <div
                                  className="bg-img h-50 w-50 img-1"
                                  // style={{
                                  //   backgroundImage: `url('${img1}')`,
                                  // }}
                                ></div>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="text-dark font-weight-600 hover-primary mb-1 font-size-16"
                                >
                                  Vivamus consectetur
                                </a>
                                <span className="text-fade d-block">
                                  Pharetra, Nulla , Nec, Aliquet
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45,800k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Sophia
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              Pharetra
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-primary-light badge-lg">
                              Approved
                            </span>
                          </td>
                          <td className="text-right">
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Bookmark"></span>
                            </a>
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Arrow-right">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 mr-20">
                                <div
                                  className="bg-img h-50 w-50"
                                  style={{
                                    backgroundImage: `url(${img2})`,
                                  }}
                                ></div>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="text-dark font-weight-600 hover-primary mb-1 font-size-16"
                                >
                                  Vivamus consectetur
                                </a>
                                <span className="text-fade d-block">
                                  Pharetra, Nulla , Nec, Aliquet
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45,800k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Sophia
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              Pharetra
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-warning-light badge-lg">
                              In Progress
                            </span>
                          </td>
                          <td className="text-right">
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Bookmark"></span>
                            </a>
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Arrow-right">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 mr-20">
                                <div
                                  className="bg-img h-50 w-50"
                                  style={{
                                    backgroundImage: `url(${img3})`,
                                  }}
                                ></div>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="text-dark font-weight-600 hover-primary mb-1 font-size-16"
                                >
                                  Vivamus consectetur
                                </a>
                                <span className="text-fade d-block">
                                  Pharetra, Nulla , Nec, Aliquet
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45,800k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Sophia
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              Pharetra
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-success-light badge-lg">
                              Success
                            </span>
                          </td>
                          <td className="text-right">
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Bookmark"></span>
                            </a>
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Arrow-right">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 mr-20">
                                <div
                                  className="bg-img h-50 w-50"
                                  style={{
                                    backgroundImage: `url(${img4})`,
                                  }}
                                ></div>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="text-dark font-weight-600 hover-primary mb-1 font-size-16"
                                >
                                  Vivamus consectetur
                                </a>
                                <span className="text-fade d-block">
                                  Pharetra, Nulla , Nec, Aliquet
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45,800k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Sophia
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              Pharetra
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-danger-light badge-lg">
                              Rejected
                            </span>
                          </td>
                          <td className="text-right">
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Bookmark"></span>
                            </a>
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Arrow-right">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 mr-20">
                                <div
                                  className="bg-img h-50 w-50"
                                  style={{
                                    backgroundImage: `url(${img5})`,
                                  }}
                                ></div>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="text-dark font-weight-600 hover-primary mb-1 font-size-16"
                                >
                                  Vivamus consectetur
                                </a>
                                <span className="text-fade d-block">
                                  Pharetra, Nulla , Nec, Aliquet
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45,800k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Paid
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              $45k
                            </span>
                          </td>
                          <td>
                            <span className="text-fade font-weight-600 d-block font-size-16">
                              Sophia
                            </span>
                            <span className="text-dark font-weight-600 d-block font-size-16">
                              Pharetra
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-warning-light badge-lg">
                              In Progress
                            </span>
                          </td>
                          <td className="text-right">
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Bookmark"></span>
                            </a>
                            <a
                              href="#"
                              className="waves-effect waves-light btn btn-primary btn-circle mx-5"
                            >
                              <span className="icon-Arrow-right">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <footer className="main-footer">
        <div className="pull-right d-none d-sm-inline-block">
          <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Purchase Now
              </a>
            </li>
          </ul>
        </div>
        &copy; 2020{' '}
        <a href="https://www.multipurposethemes.com/">Multipurpose Themes</a>.
        All Rights Reserved.
      </footer>

      {/* <!-- Control Sidebar --> */}
      <aside className="control-sidebar">
        <div className="rpanel-title">
          <span className="pull-right btn btn-circle btn-danger">
            <i
              className="ion ion-close text-white"
              data-toggle="control-sidebar"
            ></i>
          </span>{' '}
        </div>
        {/* <!-- Create the tabs --> */}
        <ul className="nav nav-tabs control-sidebar-tabs">
          <li className="nav-item">
            <a
              href="#control-sidebar-home-tab"
              data-toggle="tab"
              className="active"
            >
              <i className="mdi mdi-message-text"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#control-sidebar-settings-tab" data-toggle="tab">
              <i className="mdi mdi-playlist-check"></i>
            </a>
          </li>
        </ul>
        {/* <!-- Tab panes --> */}
        <div className="tab-content">
          {/* <!-- Home tab content --> */}
          <div className="tab-pane active" id="control-sidebar-home-tab">
            <div className="flexbox">
              <a href="javascript:void(0)" className="text-grey">
                <i className="ti-more"></i>
              </a>
              <p>Users</p>
              <a href="javascript:void(0)" className="text-right text-grey">
                <i className="ti-plus"></i>
              </a>
            </div>
            <div className="lookup lookup-sm lookup-right d-none d-lg-block">
              <input
                type="text"
                name="s"
                placeholder="Search"
                className="w-p100"
              />
            </div>
            <div className="media-list media-list-hover mt-20">
              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-success" href="#">
                  <img src="../images/avatar/1.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Tyler</strong>
                    </a>
                  </p>
                  <p>Praesent tristique diam...</p>
                  <span>Just now</span>
                </div>
              </div>

              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-danger" href="#">
                  <img src="../images/avatar/2.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Luke</strong>
                    </a>
                  </p>
                  <p>Cras tempor diam ...</p>
                  <span>33 min ago</span>
                </div>
              </div>

              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-warning" href="#">
                  <img src="../images/avatar/3.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Evan</strong>
                    </a>
                  </p>
                  <p>In posuere tortor vel...</p>
                  <span>42 min ago</span>
                </div>
              </div>

              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-primary" href="#">
                  <img src="../images/avatar/4.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Evan</strong>
                    </a>
                  </p>
                  <p>In posuere tortor vel...</p>
                  <span>42 min ago</span>
                </div>
              </div>

              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-success" href="#">
                  <img src="../images/avatar/1.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Tyler</strong>
                    </a>
                  </p>
                  <p>Praesent tristique diam...</p>
                  <span>Just now</span>
                </div>
              </div>

              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-danger" href="#">
                  <img src="../images/avatar/2.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Luke</strong>
                    </a>
                  </p>
                  <p>Cras tempor diam ...</p>
                  <span>33 min ago</span>
                </div>
              </div>

              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-warning" href="#">
                  <img src="../images/avatar/3.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Evan</strong>
                    </a>
                  </p>
                  <p>In posuere tortor vel...</p>
                  <span>42 min ago</span>
                </div>
              </div>

              <div className="media py-10 px-0">
                <a className="avatar avatar-lg status-primary" href="#">
                  <img src="../images/avatar/4.jpg" alt="..." />
                </a>
                <div className="media-body">
                  <p className="font-size-16">
                    <a className="hover-primary" href="#">
                      <strong>Evan</strong>
                    </a>
                  </p>
                  <p>In posuere tortor vel...</p>
                  <span>42 min ago</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.tab-pane --> */}
          {/* <!-- Settings tab content --> */}
          <div className="tab-pane" id="control-sidebar-settings-tab">
            <div className="flexbox">
              <a href="javascript:void(0)" className="text-grey">
                <i className="ti-more"></i>
              </a>
              <p>Todo List</p>
              <a href="javascript:void(0)" className="text-right text-grey">
                <i className="ti-plus"></i>
              </a>
            </div>
            <ul className="todo-list mt-20">
              <li className="py-15 px-5 by-1">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_1"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_1" className="mb-0 h-15"></label>
                {/* <!-- todo text --> */}
                <span className="text-line">Nulla vitae purus</span>
                {/* <!-- Emphasis label --> */}
                <small className="badge bg-danger">
                  <i className="fa fa-clock-o"></i> 2 mins
                </small>
                {/* <!-- General tools such as edit or delete--> */}
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_2"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_2" className="mb-0 h-15"></label>
                <span className="text-line">Phasellus interdum</span>
                <small className="badge bg-info">
                  <i className="fa fa-clock-o"></i> 4 hours
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5 by-1">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_3"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_3" className="mb-0 h-15"></label>
                <span className="text-line">Quisque sodales</span>
                <small className="badge bg-warning">
                  <i className="fa fa-clock-o"></i> 1 day
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_4"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_4" className="mb-0 h-15"></label>
                <span className="text-line">Proin nec mi porta</span>
                <small className="badge bg-success">
                  <i className="fa fa-clock-o"></i> 3 days
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5 by-1">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_5"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_5" className="mb-0 h-15"></label>
                <span className="text-line">Maecenas scelerisque</span>
                <small className="badge bg-primary">
                  <i className="fa fa-clock-o"></i> 1 week
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_6"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_6" className="mb-0 h-15"></label>
                <span className="text-line">Vivamus nec orci</span>
                <small className="badge bg-info">
                  <i className="fa fa-clock-o"></i> 1 month
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5 by-1">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_7"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_7" className="mb-0 h-15"></label>
                {/* <!-- todo text --> */}
                <span className="text-line">Nulla vitae purus</span>
                {/* <!-- Emphasis label --> */}
                <small className="badge bg-danger">
                  <i className="fa fa-clock-o"></i> 2 mins
                </small>
                {/* <!-- General tools such as edit or delete--> */}
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_8"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_8" className="mb-0 h-15"></label>
                <span className="text-line">Phasellus interdum</span>
                <small className="badge bg-info">
                  <i className="fa fa-clock-o"></i> 4 hours
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5 by-1">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_9"
                  className="filled-in"
                />
                <label htmlFor="basic_checkbox_9" className="mb-0 h-15"></label>
                <span className="text-line">Quisque sodales</span>
                <small className="badge bg-warning">
                  <i className="fa fa-clock-o"></i> 1 day
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
              <li className="py-15 px-5">
                {/* <!-- checkbox --> */}
                <input
                  type="checkbox"
                  id="basic_checkbox_10"
                  className="filled-in"
                />
                <label
                  htmlFor="basic_checkbox_10"
                  className="mb-0 h-15"
                ></label>
                <span className="text-line">Proin nec mi porta</span>
                <small className="badge bg-success">
                  <i className="fa fa-clock-o"></i> 3 days
                </small>
                <div className="tools">
                  <i className="fa fa-edit"></i>
                  <i className="fa fa-trash-o"></i>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- /.tab-pane --> */}
        </div>
      </aside>
      {/* <!-- /.control-sidebar --> */}

      {/* <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar --> */}
      <div className="control-sidebar-bg"></div>
    </>
  );
}
