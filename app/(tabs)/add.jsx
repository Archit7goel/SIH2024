import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile

const Add = () => {
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
        <Image source={require('../../assets/images/logocityforge.png')} style={{ width: 300, height: 80 }} resizeMode="contain" />


        {/* Profile Icon */}
        <TouchableOpacity onPress={() => Alert.alert("Profile clicked")}>
          <Ionicons name="person-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Add;