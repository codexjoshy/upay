import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuth: false,
    loginError: '',
}
const loginSlice = createSlice({ 
    name:'login', 
    initialState,
    reducers:{
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.loginError = null;
        },
        loginFailure: (state, {payload}) => {
            
            state.isLoading = false;
            state.loginError = payload
        },
        logoutAuth:(state)=>{
            state.isAuth = false;
            state.isLoading = false;
        },

    },
});

const {reducer, actions} = loginSlice;
export const {loginPending, loginSuccess, loginFailure, logoutAuth } = actions;
export default  reducer;