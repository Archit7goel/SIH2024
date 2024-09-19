import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { images } from 'C:/Users/archi/OneDrive/Desktop/SIH2024/constants/images.js';
import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const Prediction = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#fff' }}>
        
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => Alert.alert("Menu clicked")}>
          <Ionicons name="menu" size={40} color="black" />
        </TouchableOpacity>

        {/* Logo in the Center */}
        <Image source={require('C:/Users/archi/OneDrive/Desktop/SIH2024/assets/images/logocityforge.png')} style={{ width: 300, height: 80 }} resizeMode="contain" />


        {/* Profile Icon */}
        <TouchableOpacity onPress={() => Alert.alert("Profile clicked")}>
          <Ionicons name="person-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
  
    {/* <ScrollView style={styles.container}> */}
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

    </SafeAreaView>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Prediction;