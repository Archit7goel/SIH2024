// import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { Link } from 'expo-router';
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
// import { images } from 'C:/Users/archi/OneDrive/Desktop/SIH2024/constants/images.js';
// import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile
// import { createStackNavigator } from '@react-navigation/stack';


// const Stack = createStackNavigator();


// const Prediction = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar style="dark" />

//       {/* Header */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#fff' }}>
        
//         {/* Menu Icon */}
//         <TouchableOpacity onPress={() => Alert.alert("Menu clicked")}>
//           <Ionicons name="menu" size={40} color="black" />
//         </TouchableOpacity>

//         {/* Logo in the Center */}
//         <Image source={require('../../assets/images/logocityforge.png')} style={{ width: 300, height: 80 }} resizeMode="contain" />


//         {/* Profile Icon */}
//         <TouchableOpacity onPress={() => Alert.alert("Profile clicked")}>
//           <Ionicons name="person-circle-outline" size={40} color="black" />
//         </TouchableOpacity>
//       </View>
  
//     {/* <ScrollView style={styles.container}> */}
//       {/* Delay Prediction */}
//       <Link href="/delayprediction" asChild>
//         <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
//         <View>
//           <Text  className='text-blue-50 text-xl'>Delay Prediction</Text>
//         </View> 
//         </TouchableOpacity>
//       </Link>

//       {/* Injury Prediction */}
//       <Link href="/injuryprediction" asChild>
//         <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
//         <View>
//           <Text className='text-blue-50 text-xl'>Injury Prediction</Text>
//         </View> 
//         </TouchableOpacity>
//       </Link>
      

//       {/*Cost Overrun Prediction*/}
//       <Link href="/overrunprediction" asChild>
//         <TouchableOpacity className="bg-blue-500 p-5 rounded-full items-center my-2">
//         <View>
//           <Text className='text-blue-50 text-xl'>Cost Overrun Prediction</Text>
//         </View> 
//         </TouchableOpacity>
//       </Link>

//     </SafeAreaView>
//     // </ScrollView>
//   );
// };

// const styles = StyleSheet.create({});

// export default Prediction;









// import { images } from '../../constants';
// import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { Link } from 'expo-router';
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
// import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile
// import { createStackNavigator } from '@react-navigation/stack'


// const Stack = createStackNavigator();


// const Prediction = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//     {/* <ScrollView */}
//       <StatusBar style="dark" />

// //       {/* Header */}
// //       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#fff' }}>
        
// //         {/* Menu Icon */}
// //         <TouchableOpacity onPress={() => Alert.alert("Menu clicked")}>
// //           <Ionicons name="menu" size={40} color="black" />
// //         </TouchableOpacity>

// //         {/* Logo in the Center */}
// //         <Image source={require('../../assets/images/logocityforge.png')} style={{ width: 300, height: 80 }} resizeMode="contain"/>

// //         {/* Profile Icon */}
// //         <TouchableOpacity onPress={() => Alert.alert("Profile clicked")}>
// //           <Ionicons name="person-circle-outline" size={40} color="black" />
// //         </TouchableOpacity>
// //       </View>
      
//       {/* Image */}
//       <View className="justify-center items-center">
//       <Image
//         source={images.prediction}
//         className="w-96 h-80"
//         resizeMode="contain"       
//       />
//       </View>

//        {/* Delay Prediction */}
//       <Link href="/delayprediction" asChild>
//         <TouchableOpacity className="bg-blue-500 p-5 rounded-2xl items-center mt-0 mb-2 w-82 mx-3">
//         <View>
//           <Text  className='text-blue-50 text-xl'>Delay Prediction</Text>
//         </View> 
//         </TouchableOpacity>
//       </Link>

//       {/* Injury Prediction */}
//       <Link href="/injuryprediction" asChild>
//         <TouchableOpacity className="bg-blue-500 p-5 rounded-2xl items-center my-2 w-82 mx-3">
//         <View>
//           <Text className='text-blue-50 text-xl'>Injury Prediction</Text>
//         </View> 
//         </TouchableOpacity>
//       </Link>
      

//       {/*Cost Overrun Prediction*/}
//       <Link href="/overrunprediction" asChild>
//         <TouchableOpacity className="bg-blue-500 p-5 rounded-2xl items-center my-2 w-82 mx-3">
//         <View>
//           <Text className='text-blue-50 text-xl'>Cost Overrun Prediction</Text>
//         </View> 
//         </TouchableOpacity>
//       </Link>


//     </SafeAreaView>
//     // </ScrollView
//   );
// };

// const styles = StyleSheet.create({});

// export default Prediction;






import { images } from '../../constants';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile


const Prediction = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => Alert.alert("Menu clicked")}>
          <Ionicons name="menu" size={40} color="black" />
        </TouchableOpacity>

        {/* Logo in the Center */}
        <Image source={require('../../assets/images/logocityforge.png')} style={{ width: 300, height: 80 }} resizeMode="contain" />

        {/* Profile Icon */}
        <TouchableOpacity onPress={() => Alert.alert("Profile clicked")}>
          <Ionicons name="person-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={images.prediction}
          style={styles.predictionImage}
          resizeMode="contain"
        />
      </View>
      
      {/* Delay Prediction */}
      <Link href="/delayprediction" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delay Prediction</Text>
        </TouchableOpacity>
      </Link>

      {/* Injury Prediction */}
      <Link href="/injuryprediction" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Injury Prediction</Text>
        </TouchableOpacity>
      </Link>
      
      {/* Cost Overrun Prediction */}
      <Link href="/overrunprediction" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cost Overrun Prediction</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 0, // Adjust as needed
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10, // Reduced padding
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 80,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0, // Reduced the vertical margin for the image
  },
  predictionImage: {
    width: '100%', // Adjusted width
    height: 300, // Reduced the image height
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 16, // Reduced button padding
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 8, // Reduced vertical margin between buttons
    marginHorizontal: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20, // Adjusted font size
  },
});

export default Prediction;
