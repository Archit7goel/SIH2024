import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ProjectCard from 'C:/Users/archi/OneDrive/Desktop/SIH2024/components/Card.jsx';
import { images } from 'C:/Users/archi/OneDrive/Desktop/SIH2024/constants/images.js';
import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile


const Home = () => {
  const [stats, setStats] = useState({
    totalProjects: 40,
    completedProjects: 16,
    ongoingProjects: 24,
  });

  useEffect(() => {
    // Increase totalProjects by 1 every 2 seconds
    const totalProjectsInterval = setInterval(() => {
      setStats((prevStats) => ({
        ...prevStats,
        totalProjects: prevStats.totalProjects + 1,
        ongoingProjects: prevStats.totalProjects + 1 - prevStats.completedProjects,
      }));
    }, 2000); // Update every 2 seconds

    // Increase completedProjects by a random number between 1 and 3 every 10 seconds
    const completedProjectsInterval = setInterval(() => {
      const randomCompleted = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
      setStats((prevStats) => ({
        ...prevStats,
        completedProjects: prevStats.completedProjects + randomCompleted,
        ongoingProjects: prevStats.totalProjects - (prevStats.completedProjects + randomCompleted),
      }));
    }, 7000); // Update every 10 seconds

    return () => {
      clearInterval(totalProjectsInterval);
      clearInterval(completedProjectsInterval);
    };
  }, []);
  
  
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

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Total Projects</Text>
          <Text style={styles.statValue}>{stats.totalProjects}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Completed Projects</Text>
          <Text style={styles.statValue}>{stats.completedProjects}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Ongoing Projects</Text>
          <Text style={styles.statValue}>{stats.ongoingProjects}</Text>
        </View>
      </View>

      {/* Project Cards */}
      <ScrollView>
        <ProjectCard
          title="NH 48"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="67"
          img={require('C:/Users/archi/OneDrive/Desktop/SIH2024/assets/images/project1.jpg')} 
        />
        <ProjectCard
          title="bunglow"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="85"
          img={require('C:/Users/archi/OneDrive/Desktop/SIH2024/assets/images/project2.jpg')}
        />
        <ProjectCard
          title="sarita apartments"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="73"
          img={require('C:/Users/archi/OneDrive/Desktop/SIH2024/assets/images/project3.jpg')}
        />
        <ProjectCard
          title="house"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="54"
          img={require('C:/Users/archi/OneDrive/Desktop/SIH2024/assets/images/project4.jpg')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 80,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
  },
  statBox: {
    width: '30%', // Each box takes up 30% of the container's width
    backgroundColor: '#3498db', // White background for the box
    borderWidth: 1, // Border around the box
    borderColor: '#ddd', // Light grey border color
    borderRadius: 10, // Rounded corners for the box
    padding: 15, // Padding inside the box
    alignItems: 'center', // Center the content
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Elevation for Android shadow
  },
  statTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // Spacing between the title and value
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Blue color for the stat value
  },
});

export default Home;
