import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // For icons like menu and profile
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectCard from '../../components/Card.jsx'; // Assuming you have a card component
import { images } from '../../constants'; // Assuming you have an images file

// Screen components for Drawer Navigation
const ProfileScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Profile Page</Text>
  </View>
);

const AboutScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>About Page</Text>
  </View>
);

const ContactScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Contact Page</Text>
  </View>
);

const FAQScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>FAQs Page</Text>
  </View>
);

const HelpScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Help Page</Text>
  </View>
);

const LogoutScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Logout Page</Text>
  </View>
);

// Home screen with the header (menu and profile icons)
const Home = ({ navigation }) => {
  const [stats, setStats] = useState({
    totalProjects: 40,
    completedProjects: 16,
    ongoingProjects: 24,
  });

  useEffect(() => {
    const totalProjectsInterval = setInterval(() => {
      setStats((prevStats) => ({
        ...prevStats,
        totalProjects: prevStats.totalProjects + 1,
        ongoingProjects: prevStats.totalProjects + 1 - prevStats.completedProjects,
      }));
    }, 2000); // Increase every 2 seconds

    const completedProjectsInterval = setInterval(() => {
      const randomCompleted = Math.floor(Math.random() * 4) + 1;
      setStats((prevStats) => ({
        ...prevStats,
        completedProjects: prevStats.completedProjects + randomCompleted,
        ongoingProjects: prevStats.totalProjects - (prevStats.completedProjects + randomCompleted),
      }));
    }, 7000); // Random increase every 7 seconds

    return () => {
      clearInterval(totalProjectsInterval);
      clearInterval(completedProjectsInterval);
    };
  }, []);

  return (
    <SafeAreaView className="flex-auto">
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={40} color="black" />
        </TouchableOpacity>

        {/* Logo */}
        <Image source={images.logocityforge} style={{ width: 300, height: 80 }} resizeMode="contain" />

        {/* Profile Icon */}
        <TouchableOpacity onPress={() => Alert.alert('Profile clicked')}>
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
          location="Sample Location"
          completion="67"
          img={images.project1}
        />
        <ProjectCard
          title="Bungalow"
          year="2028"
          location="Sample Location"
          completion="85"
          img={images.project2}
        />
        <ProjectCard
          title="Sarita Apartments"
          year="2028"
          location="Sample Location"
          completion="73"
          img={images.project3}
        />
        <ProjectCard
          title="House"
          year="2028"
          location="Sample Location"
          completion="54"
          img={images.project4}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Drawer Navigator
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="FAQs" component={FAQScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
  },
  statBox: {
    width: '30%',
    backgroundColor: '#3498db',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});