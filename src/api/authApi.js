import axios from "axios";
import { baseUrl } from ".";
import { storeToken } from "../helpers";
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    console.log('mey errors',error.response);
    return Promise.reject(error);
  });
export const userLogin = formData => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(`${baseUrl}/stakeholder/login`, formData);
            // const {response} = res
            // return response;
            resolve(res.data);
            if(res?.data?.success){
                
                // console.log('data', res.data);
                storeToken('TOKEN', res.data?.token);

                
            }
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
       
    })
}