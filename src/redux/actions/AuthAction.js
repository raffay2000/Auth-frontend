import { navigate } from '../../navigation';
import { setItem } from '../../persist-storage';
import { fetchAPI } from '../../services';
import  Toast  from 'react-native-toast-message';
import {
    LOGIN,
    LOGIN_DONE,
    REGISTER,
    REGISTER_DONE,
} from '../constant';

export const login = (email, password, context) => {

    return async function (dispatch){
        dispatch({
            type: LOGIN
        });
        // const token = await getFCMToken();
        var data = new FormData();
        data.append('email', email);
        data.append('password', password);
        // data.append('phone_no', phone);
        // data.append('fcm', token);
        // try {
        //     const res = await confirm.confirm(code);
        //     console.log(res)
        //     if(res){

                fetchAPI('post', 'login', data)
                .then((response)=>{
                    response.json().then(data=>{
                        console.log(data)
                        if(data.result){
                            loginDone(dispatch, "Login Successful", data.result);
                            setItem("user", JSON.stringify(data.result));
                            setItem("token", data.token);
                            context();
                        }else{
                            loginDone(dispatch, "Incorrect Email or Password");
                        }
                    }).catch(error=>{
                        console.log(error);
                        loginDone(dispatch, "Some Problem Occurred")
                    })
                   
                }).catch((error)=>{
                    console.log(error);
                    loginDone(dispatch, "Some Problem Occurred")
                })

        //     }else{
        //         loginDone(dispatch, "Some Problem Occurred")
        //     }
        // }catch (error) {
        //       console.log(error);
        //       loginDone(dispatch, "Invalid Code")
        // }
    }
}
const loginDone = (dispatch, message, payload = {}) => {
    Toast.show({text1: message})
    dispatch({
        type: LOGIN_DONE,
        message,
        payload
    })
}