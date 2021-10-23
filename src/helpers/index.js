import React from 'react';


export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const storeToken = async (key, value) => {
    sessionStorage.setItem(key, value);
    localStorage.setItem('refreshT', value);
}


export const getToken = async (key,  sessionType=true) => {
   let session = await sessionStorage.getItem(key);
   let local = await localStorage.getItem('refreshT');
   if(sessionType) return session;
   return local;
}

export const destroyToken = async (key) => {
    await sessionStorage.removeItem(key);
    await localStorage.removeItem('refreshT');
}
  