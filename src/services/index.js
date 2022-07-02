import axios from "axios";
import { getItem } from "../persist-storage";

export const BASE_URL = "";

export const getToken = async () => {
    const token = await getItem("token");
    return token
}

export const getUser = async () => {
    const user = await getItem("user");
    return JSON.parse(user)
}

export const fetchAPI = async (method, api, data, headers=null, params=null) => {

    const url = `${BASE_URL}/public/api/${api}`;
    const config = {
        method, // *GET, POST, PUT, DELETE, etc.
        headers: {
            //'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data // body data type must match "Content-Type" header
    }
    if(headers){
        config.headers.Authorization = 'Bearer '+await getToken()
    }
    console.log(config)
    return await fetch(url, config);
    // return response.json(); // parses JSON response into native JavaScript objects

    // var config = {
    //     method,
    //     url: `${BASE_URL}/public/api/${api}`,
    //     // headers: {
    //     //     'Accept': 'application/json', 
    //     // },
    //     data,
    //     params
    // }
    // if(headers){
    //     config.headers.Authorization = 'Bearer '+await getToken()
    // }
    
    // console.log("config", config)
    // return await axios(config);
}