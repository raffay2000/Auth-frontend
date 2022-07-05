import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import {AuthContext} from "../../src/context/index"
import {getItem} from "../persist-storage/index"
import { useDispatch } from 'react-redux';
import { PUT_USER_DATA } from '../redux/constant';
import AuthScreen from '../screens/auth/AuthScreen';

const Stack = createNativeStackNavigator();

function Routes() {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(null)
    useEffect(() => {
      checkToken()
    }, [])
    const checkToken = async () => {
        const token = await getItem("auth")
        if(token){
            setIsSignIn(true)
            dispatch({
              type: PUT_USER_DATA,
              payload: JSON.parse(token)
            })
        }else{
            setIsSignIn(false)

        }
    }
    if(isSignIn === null){
      return <AuthScreen/>
  }
    
  return (
    <AuthContext.Provider value={{updateState:checkToken}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {
            isSignIn ? (
                <>
                <Stack.Screen name="Main" component={MainRoutes} />
                </>
            )
             :( 
               <>
               <Stack.Screen name="Auth" component={AuthRoutes} />
             </>
             )
        }
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>

    
  );
}

export default Routes;