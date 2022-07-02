import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const Stack = createNativeStackNavigator();

function Routes() {
    const [isSignIn, setIsSignIn] = useState(false)
    const checkToken = async () => {
      
    }
    useEffect(() => {
      checkToken()
    }, [])
  return (
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
    
  );
}

export default Routes;