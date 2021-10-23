import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../../Features/dashboard/Stakeholder/stakeholderAction';
import Menu from '../components/Menu';


const adminMenu = [
    { title: 'Dashboard', items:[], icon: 'ti-dashboard', link:'/home' },
    { title: 'Profile', items:[], icon: 'ti-user', link:'/profile' },
    { title: 'Stakeholder MGT.', items:[{"name": 'create', link:'/stakeholders'}], icon: 'fa fa-group' },
    { title: 'Revenue MGT.', items:[{name:"add", link:'/revenue'}], icon: 'ti-money' },

]
const AdminMenu = () => {
    const {profile} = useSelector(state => state.stakeholder);
    const dispatch = useDispatch();
    let menu = [];
    let menuLabel = "Anonymous"
    let role = profile?.data?.role;
    useEffect(() => {
        loadMenu()
    }, [])
    function loadMenu() {
        if (!role) {  
            dispatch(getProfile());
        }
    }
    switch (role) {
        case 'admin':
            menu = adminMenu;
            menuLabel = "Admin Menu";
            break;
        default:
            break;
    }
    return (
        <Fragment>
            <li class="header"> {menuLabel} </li>
            {
                adminMenu.map((menu, i) =>(
                    <Menu key={i} title={menu.title} items={menu.items} icon={menu.icon} link={menu?.link} />
                ))
            }
        </Fragment>
    )
}

export default AdminMenu;