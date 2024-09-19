import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { Link } from 'expo-router';



const Prediction = ({ navigation }) => {
  return (
    <View style={newStyle.container}>
      {/* Delay Prediction */}
      <Link href="/delayprediction" asChild>
        <TouchableOpacity style={newStyle.delay}>
        <View>
          <Text  className='text-blue-50 text-xl'>Delay Prediction</Text>
        </View> 
        </TouchableOpacity>
      </Link>

      {/* Injury Prediction */}
      <Link href="/injuryprediction" asChild>
        <TouchableOpacity style={newStyle.injury}>
        <View>
          <Text className='text-blue-50 text-xl'>Injury Prediction</Text>
        </View> 
        </TouchableOpacity>
      </Link>
      

      {/*Cost Overrun Prediction*/}
      <Link href="/overrunprediction" asChild>
        <TouchableOpacity style={newStyle.cost}>
        <View>
          <Text className='text-blue-50 text-xl'>Cost Overrun Prediction</Text>
        </View> 
        </TouchableOpacity>
      </Link>

    </View>
  );
};

const newStyle = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
  },
  delay:{
    backgroundColor: '#f8b195',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  injury:{
    backgroundColor: '#f67280',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  cost:{
    backgroundColor: '#c06c84',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  }
});

export default Prediction;