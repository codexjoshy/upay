import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { stakeholderLogout } from '../../../../Features/auth/Login/loginAction';

export default function UserAccount() {
  const [showMenu, setShowMenu] = useState('')
  const dispatch = useDispatch();
  const toggleMenu = () => {
    if (showMenu == 'show') {
      setShowMenu(false)
      return true;
    }
    setShowMenu('show')
  }
  const logout =() => {
    dispatch(stakeholderLogout());
  }
    return (
        <React.Fragment>
            <li className="dropdown user user-menu">
            <Link
              to="#"
              className="waves-effect waves-light dropdown-toggle"
              data-toggle="dropdown"
              title="User"
              onClick={toggleMenu}
            >
              <i className="icon-User">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </Link>
            <ul className={`dropdown-menu animated flipInX ${showMenu}`} >
              <li className="user-body">
                {/* <Link className="dropdown-item" to="#">
                  <i className="ti-user text-muted mr-2"></i> Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="ti-wallet text-muted mr-2"></i> My Wallet
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="ti-settings text-muted mr-2"></i> Settings
                </Link> */}
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#" onClick={logout}>
                  <i className="ti-lock text-muted mr-2"></i> Logout
                </Link>
              </li>
            </ul>
          </li>
        </React.Fragment>
    )
}
