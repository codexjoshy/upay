import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_KEY } from "../../../constant";
import { storeToken } from "../../../helpers";

const initialState = {
    isLoading: false,
    isAuth: false,
    stakeholderError: '',
    stakeholders: [],
    profile: {
        loading: false,
        data: [],
        error: ""
    },
    password: {
        loading: false,
        error: ""
    }
}
const stakeholderSlice = createSlice({
    name: 'stakeholder',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        success: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.stakeholderError = null;
        },
        stakeholderSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.stakeholders = payload;
            state.stakeholderError = null;
        },
        failure: (state, { payload }) => {

            state.isLoading = false;
            state.stakeholderError = payload
        },
        loadingProfile: (state) => {
            state.profile.loading = true;
            state.profile.data = []
        },
        profileLoaded: (state, { payload }) => {
            state.profile.data = payload;
            state.profile.loading = false;
        },
        profileFailed: (state, { payload }) => {

            state.profile.loading = false;
            state.profile.error = payload
        },
        loadingPassword: (state) => {
            state.password.loading = true;
            state.password.error = "";
        },
        passwordLoaded: (state, { payload }) => {
            state.password.loading = false;
            state.password.error = "";
            if(payload?.token){
                console.log('tooks', payload.token);
                storeToken(TOKEN_KEY, payload.token);
            }
        }
        ,
        passwordUpdateFailed: (state, { payload }) => {
            state.password.loading = false;
            state.password.error = payload;
        },
        
    },
});

const { reducer, actions } = stakeholderSlice;
export const { 
    loading, success, failure,stakeholderSuccess,
    loadingProfile, profileLoaded, profileFailed, 
    loadingPassword, passwordLoaded, passwordUpdateFailed,
} = actions;
export default reducer;