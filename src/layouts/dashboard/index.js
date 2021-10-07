import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'
import SideBar from './partials/SideBar'

export default function index({children}) {
    return (
        <React.Fragment>
            <Header />
            <SideBar />
            {children}
            <Footer />
        </React.Fragment>
    )
}
