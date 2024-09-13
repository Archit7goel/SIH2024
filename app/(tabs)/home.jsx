import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import  ProjectCard  from '../../components/Card';
import { images } from '../../constants';
const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <ProjectCard
          title="NH 48"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="67"
          img={images.project1}
        />
          <ProjectCard
          title="bunglow"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="85"
          img={images.project2}
        />
        <ProjectCard
          title="sarita apartmnets"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="73"
          img={images.project3}
        />
        <ProjectCard
          title="house"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="54"
          img={images.project4}
        />
      </ScrollView>
        <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

export default Home;