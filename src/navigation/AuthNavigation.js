import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Auth/Login';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
