import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import { ProgressBarAndroidBase } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // You can install this with: `npm install react-native-paper`

const ProjectCard = ({ title, year, location, completion, img }) => {
  return (
  <TouchableOpacity>
    <View style={styles.cardContainer}>
          {/* Title */}
          <Text style={styles.title}>{title}</Text>
          
          {/* Image */}
          <Image
            source={img}
            style={styles.projectImage}
            resizeMode="cover"
            />
          
          {/* Project Details */}
          <View style={styles.projectDetails}>
            <Text style={styles.detailText}>Year of completion: {year}</Text>
            <Text style={styles.detailText}>Location: {location}</Text>
            <Text style={styles.detailText}>Project completed: {completion}%</Text>

            {/* Progress Bar */}
            <ProgressBar progress={completion / 100} color={'#4F8EF7'} />
            {/* <ProgressBarAndroidBase/> */}
          </View>
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: 350,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  projectDetails: {
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  progressBar: {
    marginTop: 8,
    height: 10,
    borderRadius: 5,
  },
});

export default ProjectCard;
