import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
// import { styled } from 'nativewind';  // NativeWind import
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const Prediction = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Delay Prediction */}
      <Link href="/delayprediction" asChild>
        <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
        <View>
          <Text  className='text-blue-50 text-xl'>Delay Prediction</Text>
        </View> 
        </TouchableOpacity>
      </Link>

      {/* Injury Prediction */}
      <Link href="/injuryprediction" asChild>
        <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
        <View>
          <Text className='text-blue-50 text-xl'>Injury Prediction</Text>
        </View> 
        </TouchableOpacity>
      </Link>
      

      {/*Cost Overrun Prediction*/}
      <Link href="/overrunprediction" asChild>
        <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
        <View>
          <Text className='text-blue-50 text-xl'>Cost Overrun Prediction</Text>
        </View> 
        </TouchableOpacity>
      </Link>


    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Prediction;