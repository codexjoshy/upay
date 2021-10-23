import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    current:{
        menu:'Dashboard', 
        item: ''
    }
}
const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers : {
        setCurrentSidebar : (state, {payload}) => {
            state.current = payload
        }
    },
})

const {actions, reducer} = sidebarSlice;

export const {setCurrentSidebar} = actions;
export default reducer;