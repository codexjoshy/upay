import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { setCurrentSidebar } from '../sidebarSlice';
import SideMenu from './SideMenu'

export default function Menu({title, items, icon, link="#"}) {
    const [showList, setshowList] = useState(false);
    const caret = showList ? 'fa fa-angle-right pull-right' : 'fa fa-angle-up pull-right';
    const {current} = useSelector(state => state.sidebar);
    const dispatch = useDispatch();
    const handleMenu = (title)=>{ 
        if (title !== current?.title) {
            setshowList(!showList);
            dispatch(setCurrentSidebar({...current, menu:title}))   
        }
    }
    const handleItem = (item)=>{
        // console.log(current);
        dispatch(setCurrentSidebar({...current, item}))
    }
    console.log(current);
    const active = showList && current?.menu === title ? 'active' : '';
    const open = current?.menu === title  ? 'menu-open' : '';

    return (
        <Fragment>
            <li className={`treeview ${active} ${open} fade-out`}>
                <Link to={link} onClick={()=>handleMenu(title)}>
                <i className={icon}>
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
                <span>{title}</span>
                <span className="pull-right-container">
                    {items?.length >0 &&<i className={caret}></i>}
                </span>
                </Link>
                <ul className="treeview-menu">
                    {
                        items && items.map((item, i)=>(
                            <SideMenu key={i} title={item?.name} active={current?.item===item?.name && current?.menu === title} link={item?.link} setItemMenu={handleItem}  />
                        ))
                    }
                    
                </ul>
            </li>
        </Fragment>
    )
}
