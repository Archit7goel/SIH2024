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
          title="raunak"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="85"
          img={images.thumbnail}
        />
          <ProjectCard
          title="raunak"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="85"
          img={images.thumbnail}
        />
        <ProjectCard
          title="raunak"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="85"
          img={images.thumbnail}
        />
        <ProjectCard
          title="raunak"
          year="2028"
          location="bhjwb hwbr bhwbrk"
          completion="85"
          img={images.thumbnail}
        />
      </ScrollView>
        <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

export default Home;