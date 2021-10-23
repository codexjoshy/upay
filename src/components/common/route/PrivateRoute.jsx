import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { TOKEN_KEY } from '../../../constant';
import { loginSuccess } from '../../../Features/auth/Login/loginSlice';
import { getProfile } from '../../../Features/dashboard/Stakeholder/stakeholderAction';
import { getToken } from '../../../helpers';
import AppLayout from '../../../layouts/AppLayout';
export default function PrivateRoute({children, ...rest}) {
    const {isAuth} = useSelector(state => state.login)
    const dispatch = useDispatch();
    useEffect(() => {
        checkAuth();
    }, [isAuth])
    const checkAuth = ()=>{
        const token = sessionStorage.getItem(TOKEN_KEY)
        if (!isAuth && token) {
            dispatch(loginSuccess())
            dispatch(getProfile());
        }
    }
    console.log('private', isAuth);
    return (
        <Route 
            {...rest}
            render={()=>isAuth ? <AppLayout>{children}</AppLayout>  : <Redirect to="/" />} 
        />
    )
}
