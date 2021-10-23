import React from 'react'
import { combineReducers } from 'redux'
import loginReducer from './Features/auth/Login/loginSlice'
import stakeholderReducer from './Features/dashboard/Stakeholder/stakeholderSlice'
import sidebarSlice from './components/common/sidebar/sidebarSlice'
export default combineReducers({
    login : loginReducer,
    stakeholder : stakeholderReducer,
    sidebar: sidebarSlice,
})