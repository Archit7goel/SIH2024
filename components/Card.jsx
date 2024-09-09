// import { View, Text, Image } from 'react-native'
// import React from 'react'

// const ProjectCard = ({title, styles, img}) => {
//   return (
//     <View className="flex flex-col items-center px-4 mb-14">
//       <View className="flex flex-row gap-3 items-start">
//         <View className="flex justify-center items-center flex-row flex-1">
//           <View className="w-[340px] h-[250px] rounded-lg border border-secondary flex justify-center items-center p-3">
//             <Image
//               source={img}
//               className="w-[337.5px] h-[250px] rounded-lg"
//               resizeMode='content'
//             />
//             <Text className="text-red-400">{title}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ProjectCard;



import { View, Text, Image, StyleSheet, } from 'react-native';
import React from 'react';
import { ProgressBarAndroidBase } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // You can install this with: `npm install react-native-paper`

const ProjectCard = ({ title, year, location, completion, img }) => {
  return (
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
