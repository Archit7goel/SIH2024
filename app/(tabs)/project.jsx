import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProjectCard from '../../components/Card'; // Adjust the import path if needed
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';

const Home = () => {
  // State to keep track of the selected tab (Completed, Ongoing, Future)
  const [selectedTab, setSelectedTab] = useState('Completed');

  // Sample data for each tab
  const completedProjects = [
    {
      title: 'Palam Pur Highway',
      year: '2028',
      location: 'jhchjhhv vv fvvk kuy­iukv kyk­uv',
      completion: 100,
      img: images.project5 , // Replace with your image source
    },
    // Add more completed projects here
  ];

  const ongoingProjects = [
    {
      title: 'Mall Construction',
      year: '2025',
      location: 'Somewhere in New City',
      completion: 70,
      img: images.project6, // Replace with your image source
    },
    // Add more ongoing projects here
  ];

  const futureProjects = [
    {
      title: 'Future Skyscraper',
      year: '2030',
      location: 'Downtown',
      completion: 0,
      img: images.project7, // Replace with your image source
    },
    // Add more future projects here
  ];

  // Render cards based on the selected tab
  const renderProjectCards = () => {
    let projectList = [];

    if (selectedTab === 'Completed') {
      projectList = completedProjects;
    } else if (selectedTab === 'Ongoing') {
      projectList = ongoingProjects;
    } else if (selectedTab === 'Future') {
      projectList = futureProjects;
    }

    return projectList.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        year={project.year}
        location={project.location}
        completion={project.completion}
        img={project.img}
      />
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* Tab Menu */}
      <View style={styles.tabContainer}>
        {/* Completed Tab */}
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Completed' && styles.selectedTab]}
          onPress={() => setSelectedTab('Completed')}
        >
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>

        {/* Ongoing Tab */}
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Ongoing' && styles.selectedTab]}
          onPress={() => setSelectedTab('Ongoing')}
        >
          <Text style={styles.tabText}>Ongoing</Text>
        </TouchableOpacity>

        {/* Future Tab */}
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Future' && styles.selectedTab]}
          onPress={() => setSelectedTab('Future')}
        >
          <Text style={styles.tabText}>Future</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable View to show project cards */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {renderProjectCards()}
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#E5E5E5',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Home;
