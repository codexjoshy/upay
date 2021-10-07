import React from 'react'
import { LOGO } from '../../../constants/Images'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="pull-right d-none d-sm-inline-block">
                <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Purchase Now</a>
                    </li>
                </ul>
            </div>
            &copy; 2020 <a href="alabiansolutions.com">Alabian Solutions</a>. All Rights Reserved.
        </div>
    )
}
function FooterControl() {
    return (
        <>
            <aside className="control-sidebar">

                <div className="rpanel-title"><span className="pull-right btn btn-circle btn-danger"><i className="ion ion-close text-white" data-toggle="control-sidebar"></i></span> </div>
                <ul className="nav nav-tabs control-sidebar-tabs">
                    <li className="nav-item"><a href="#control-sidebar-home-tab" data-toggle="tab" className="active"><i className="mdi mdi-message-text"></i></a></li>
                    <li className="nav-item"><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="mdi mdi-playlist-check"></i></a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="control-sidebar-home-tab">
                        <div className="flexbox">
                            <a href="javascript:void(0)" className="text-grey">
                                <i className="ti-more"></i>
                            </a>
                            <p>Users</p>
                            <a href="javascript:void(0)" className="text-right text-grey"><i className="ti-plus"></i></a>
                        </div>
                        <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                            <input type="text" name="s" placeholder="Search" className="w-p100" />
                        </div>
                        <div className="media-list media-list-hover mt-20">
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-success" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Tyler</strong></a>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-danger" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Luke</strong></a>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-warning" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-primary" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-success" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Tyler</strong></a>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-danger" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Luke</strong></a>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-warning" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-primary" href="#">
                                    <img src={LOGO} alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="font-size-16">
                                        <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="tab-pane" id="control-sidebar-settings-tab">
                        <div className="flexbox">
                            <a href="javascript:void(0)" className="text-grey">
                                <i className="ti-more"></i>
                            </a>
                            <p>Todo List</p>
                            <a href="javascript:void(0)" className="text-right text-grey"><i className="ti-plus"></i></a>
                        </div>
                        <ul className="todo-list mt-20">
                            <li className="py-15 px-5 by-1">
                                <input type="checkbox" id="basic_checkbox_1" className="filled-in" />
                                <label for="basic_checkbox_1" className="mb-0 h-15"></label>
                                <span className="text-line">Nulla vitae purus</span>
                                <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                <input type="checkbox" id="basic_checkbox_2" className="filled-in" />
                                <label for="basic_checkbox_2" className="mb-0 h-15"></label>
                                <span className="text-line">Phasellus interdum</span>
                                <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                <input type="checkbox" id="basic_checkbox_3" className="filled-in" />
                                <label for="basic_checkbox_3" className="mb-0 h-15"></label>
                                <span className="text-line">Quisque sodales</span>
                                <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                <input type="checkbox" id="basic_checkbox_4" className="filled-in" />
                                <label for="basic_checkbox_4" className="mb-0 h-15"></label>
                                <span className="text-line">Proin nec mi porta</span>
                                <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                <input type="checkbox" id="basic_checkbox_5" className="filled-in" />
                                <label for="basic_checkbox_5" className="mb-0 h-15"></label>
                                <span className="text-line">Maecenas scelerisque</span>
                                <small className="badge bg-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                <input type="checkbox" id="basic_checkbox_6" className="filled-in" />
                                <label for="basic_checkbox_6" className="mb-0 h-15"></label>
                                <span className="text-line">Vivamus nec orci</span>
                                <small className="badge bg-info"><i className="fa fa-clock-o"></i> 1 month</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                <input type="checkbox" id="basic_checkbox_7" className="filled-in" />
                                <label for="basic_checkbox_7" className="mb-0 h-15"></label>
                                <span className="text-line">Nulla vitae purus</span>
                                <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                <input type="checkbox" id="basic_checkbox_8" className="filled-in" />
                                <label for="basic_checkbox_8" className="mb-0 h-15"></label>
                                <span className="text-line">Phasellus interdum</span>
                                <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                <input type="checkbox" id="basic_checkbox_9" className="filled-in" />
                                <label for="basic_checkbox_9" className="mb-0 h-15"></label>
                                <span className="text-line">Quisque sodales</span>
                                <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                <input type="checkbox" id="basic_checkbox_10" className="filled-in" />
                                <label for="basic_checkbox_10" className="mb-0 h-15"></label>
                                <span className="text-line">Proin nec mi porta</span>
                                <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
                                <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>

            <div className="control-sidebar-bg" ></div >
        </>
    )
}
