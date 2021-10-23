import React from 'react'
import { Link } from 'react-router-dom'

export default function SideMenu({title, active, link='/', setItemMenu}) {

    return (
        <li className={active ? 'active' : ''} >
            <Link to={link} onClick={()=>setItemMenu(title)}>
            <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
            </i>
            {title}
            </Link>
        </li>
    )
}
