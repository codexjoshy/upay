import React from 'react'
import { LOGO } from '../../../constants/Images'
import Nav from './Nav'

export default function Header() {
    return (
        <div className="main-header">
            <div className="d-flex align-items-center logo-box justify-content-center">
                <a href="index.html" className="logo">
                <div className="logo-mini">
                    <span className="light-logo"><img src={LOGO} alt="logo" /></span>
                    <span className="dark-logo"><img src={LOGO} alt="logo" /></span>
                </div>
                <div className="logo-lg">
                    <span className="light-logo"><img src={LOGO} alt="logo" /></span>
                    <span className="dark-logo"><img src={LOGO} alt="logo" /></span>
                </div>
                </a>	
            </div>  
            <Nav />
        </div>
    )
}
