import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
// import { styled } from 'nativewind';  // NativeWind import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectForm from '../delayprediction';  // Import the form component
import delayresult from '../delayresult'; // Import the description page component




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={ProjectForm} />
        <Stack.Screen name="Result" component={delayresult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Delay Prediction */}
      <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
      <View>
        <Link href="../delayprediction" className='text-blue-50 text-xl'>Delay Prediction</Link>
      </View> 
      </TouchableOpacity>

      {/* Injury Prediction */}
      <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
      <View>
        <Link href="/injuryprediction" className='text-blue-50 text-xl'>Injury Prediction</Link>
      </View> 
      </TouchableOpacity>

      {/*Cost Overrun Prediction*/}
      <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
      <View>
        <Link href="/overrunprediction" className='text-blue-50 text-xl'>Cost Overrun Prediction</Link>
      </View> 
      </TouchableOpacity>


    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomePage;