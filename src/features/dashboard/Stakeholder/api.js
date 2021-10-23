import axios from 'axios';
import React from 'react'
import { baseUrl } from '../../../api';
import { TOKEN_KEY } from '../../../constant';
import { getToken } from '../../../helpers';

//https://upay-api.herokuapp.com/
//https://upay-api.herokuapp.com/stakeholder/register

export const stakeHolderRegistration = formData => {
    return new Promise(async (resolve, reject) => {
        let token = await getToken(TOKEN_KEY);
            if(!token){
                return reject(new Error('Token is invalid'))
            }
        try {
            const res = await axios.post(`${baseUrl}/stakeholder/register`, formData, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            resolve(res.data);
            if(res?.data?.success){
                // console.log('data', res.data);
            }
        } catch (error) {
            // console.log(error.message);
            reject(error);
        }
       
    })
}



export const stakeHolderList =  () => {
    
    return new Promise(async (resolve, reject) => {
        try {
            let token = await getToken(TOKEN_KEY);
            if(!token){ 
                reject(new Error(`Token not found`));
            }
            const res = await axios.get(`${baseUrl}/stakeholder/list`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            resolve(res.data);

        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })
}
export const profile =  () => {
    
    return new Promise(async (resolve, reject) => {
        try {
            let token = await getToken(TOKEN_KEY);
            if(!token){ 
                reject(new Error(`Token not found`));
            }
            const res = await axios.get(`${baseUrl}/stakeholder/me`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            resolve(res.data);

        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })
}
export const passwordUpdate = (data) => {
    
    return new Promise(async (resolve, reject) => {
        try {
            let token = await getToken(TOKEN_KEY);
            if(!token){ 
                reject(new Error(`Token not found`));
            }
            const res = await axios.put(`${baseUrl}/stakeholder/password`,data, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            resolve(res.data);

        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })
}