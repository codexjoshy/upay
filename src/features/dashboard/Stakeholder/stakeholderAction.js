import React from 'react'
import { useDispatch } from 'react-redux'
import { TOKEN_KEY } from '../../../constant'
import { getToken, storeToken } from '../../../helpers'
import { passwordUpdate, profile, stakeHolderList, stakeHolderRegistration } from './api'
import { failure, loading, success, stakeholderSuccess, loadingProfile, profileLoaded, profileFailed, loadingPassword, passwordUpdateFailed, passwordLoaded } from './stakeholderSlice'

export const registerStakeHolders =  (data) => async dispatch=>{
    dispatch(loading());
    try {
        const details = await stakeHolderRegistration(data);
        // console.log('details',details);
        dispatch(success());
    } catch (error) {
        let message = error.response.data?.error;
        dispatch(failure(message));
    }
}

export const getAllStakeHolders =  () => async dispatch=>{
    dispatch(loading());
    try {
        const details = await stakeHolderList();
        dispatch(stakeholderSuccess(details?.data ?? []));
    } catch (error) {
        let message = error.response?.data?.error;
        console.log(error.response);
        dispatch(failure(message));
    }
}
export const getProfile =  () => async dispatch=>{
    dispatch(loadingProfile());
    try {
        const details = await profile();
        dispatch(profileLoaded(details?.data ?? []));
    } catch (error) {
        let message = error.response?.data?.error;
        dispatch(profileFailed(message));
    }
}

export const updatePassword = data => async dispatch => {
    dispatch(loadingPassword());
    try {
        const details = await passwordUpdate(data);
        if(details?.success){            
            dispatch(passwordLoaded(details));
        }
    } catch (error) {
        let message = error.response?.data?.error;
        dispatch(passwordUpdateFailed(message));
    }
}


export const updateStakeHolders = () => {

}

export const deleteStakeHolders = () => {

}