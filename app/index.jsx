import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './screens/auth';

const AuthStack = createStackNavigator();

export default function App() {
  return (
      <AuthStack.Navigator initialRouteName="auth" screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="auth" component={Auth}/>
      </AuthStack.Navigator>
  );
}