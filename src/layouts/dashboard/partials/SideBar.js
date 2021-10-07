import React from 'react'

export default function SideBar() {
    return (

        <ul className="sidebar-menu" data-widget="tree">
            <li className="header">Applicant </li>
            <li className="treeview">
                <a href="#">
                    <i className="icon-Layout-4-blocks"><span className="path1"></span><span className="path2"></span></i>
                    <span>Applicant MGT</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right"></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li className=''><a href=""><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Create Applicant</a></li>
                    <li className=''><a href=""><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>View Applicant</a></li>
                </ul>
            </li>
            <li className="header">Exam </li>
            <li className="treeview">
                <a href="#">
                    <i className="icon-Chat-check"><span className="path1"></span><span className="path2"></span></i>
                    <span>Exam MGT</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right"></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li className=''><a href=""><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Create Exam</a></li>
                </ul>
            </li>
        </ul >

    )
}
