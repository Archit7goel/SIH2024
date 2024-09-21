import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput, Alert, Button } from 'react-native';
import ProjectCard from '../../components/Card'; // Adjust the import path if needed
import { images } from '../../constants';
import { icons } from "../../constants";
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile

const Project = () => {
  const [selectedTab, setSelectedTab] = useState('Completed');
  const [searchQuery, setSearchQuery] = useState(''); // State to manage the search query

  // Sample data for each tab
  const completedProjects = [
    {
      title: 'Palam Pur Highway',
      year: '2028',
      location: 'jhchjhhv vv fvvk kuy­iukv kyk­uv',
      completion: 100,
      img: images.project5, // Replace with your image source
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

  const allProjects = [...completedProjects, ...ongoingProjects, ...futureProjects];

  // Get the list of projects based on the selected tab
  const getProjectsByTab = () => {
    if (selectedTab === 'Completed') {
      return completedProjects;
    } else if (selectedTab === 'Ongoing') {
      return ongoingProjects;
    } else if (selectedTab === 'Future') {
      return futureProjects;
    } else if (selectedTab === 'All') {
      return allProjects;
    }
    return [];
  };

  // Filter projects based on the search query
  const filterProjects = (projects) => {
    if (searchQuery === '') {
      return projects;
    }
    return projects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Render filtered project cards
  const renderProjectCards = () => {
    const projects = getProjectsByTab();
    const filteredProjects = filterProjects(projects);

    return filteredProjects.map((project, index) => (
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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#fff' }}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => Alert.alert('Menu clicked')}>
          <Ionicons name="menu" size={40} color="black" />
        </TouchableOpacity>

        {/* Logo in the Center */}
        <Image source={require('../../assets/images/logocityforge.png')} style={{ width: 300, height: 80 }} resizeMode="contain" />

        {/* Profile Icon */}
        <TouchableOpacity onPress={() => Alert.alert('Profile clicked')}>
          <Ionicons name="person-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Tab Menu */}
      <View style={styles.tabContainer}>
        {['All', 'Completed', 'Ongoing', 'Future'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.selectedTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Bar */}
      <View style={styles.queryContainer}>
        <TextInput
          style={styles.queryInput}
          value={searchQuery}
          placeholder="Search a project"
          placeholderTextColor="#CDCDE0"
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity
          onPress={() => {
            if (searchQuery === '')
              return Alert.alert(
                'Missing Query',
                'Please input something to search results across the database'
              );
          }}
        >
          <Image source={icons.search} style={{ width: 20, height: 20 }} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {/* Scrollable View to show project cards */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {renderProjectCards()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
  },
  tabButton: {
    paddingVertical: 12,
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
  queryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  queryInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default Project;
