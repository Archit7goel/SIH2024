import { View, Text } from 'react-native'
import { SplashScreen , Stack} from 'expo-router';
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="auth" options={{headerShown:false}} />
    </Stack>
  )
}

export default AuthLayout