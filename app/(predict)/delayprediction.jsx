import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
const Stack = createStackNavigator();

const predict = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen name="ProjectForm" component={DelayEvaluationForm} options={{ headerShown: false }}/>
        <Stack.Screen name="Delayresult" component={Injuryresult} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default predict;

// const navigation = useNavigation();
const DelayEvaluationForm = () => {
  // State variables for each field
  const [estimatedArea, setEstimatedArea] = useState('');
  const [estimatedHeight, setEstimatedHeight] = useState('');
  const [numberOfWorkers, setNumberOfWorkers] = useState('');
  const [govRegulationFactor, setGovRegulationFactor] = useState('');
  const [siteConditionFactor, setSiteConditionFactor] = useState('');
  const [badWeatherFactor, setBadWeatherFactor] = useState('');
  const [designVariationFactor, setDesignVariationFactor] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();   // Use navigation

  const handleSubmit = () => {

    if (
      estimatedArea &&
      estimatedHeight &&
      numberOfWorkers &&
      govRegulationFactor &&
      siteConditionFactor &&
      badWeatherFactor &&
      designVariationFactor
    ) {
      // Start loading
      setLoading(true);
      // Collect form data into an array
      const featureArray = [
        Number(estimatedArea),
        Number(estimatedHeight),
        Number(numberOfWorkers),
        Number(govRegulationFactor),
        Number(siteConditionFactor),
        Number(badWeatherFactor),
        Number(designVariationFactor),
      ];
      // Send data to the API for delay prediction
      axios.post('https://delay-prediction.onrender.com/delay_predict', { features: featureArray })
        .then((response) => {
          setLoading(false); // Stop loading

          // Navigate to Delayresult and pass the prediction data
          navigation.navigate('Delayresult', {
            formData: {
              estimatedArea,
              estimatedHeight,
              numberOfWorkers,
              govRegulationFactor,
              siteConditionFactor,
              badWeatherFactor,
              designVariationFactor,
              prediction: response.data.prediction, // Prediction from the API
            },
          });
        })
        .catch((error) => {
          setLoading(false); // Stop loading
          console.error('Error making delay prediction:', error);
          Alert.alert('Error', 'Failed to make the prediction. Please try again.');
        });
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  return (
    <ScrollView className="flex-1 bg-blue-50 p-4 ">
      <Text className="text-2xl font-bold pt-12 mb-5 text-center">Project Delay Evaluation Form</Text>

      {/* Estimated Area Field */}
      <Text className="text-lg font-semibold mb-2">Estimated Area (sq.ft)</Text>
      <TextInput
        value={estimatedArea}
        onChangeText={(value) => setEstimatedArea(value)}
        keyboardType="numeric"
        placeholder="Enter estimated area"
        className="border border-gray-300 p-3 mb-4 rounded-lg bg-white text-gray-700"
      />

      {/* Estimated Height Field */}
      <Text className="text-lg font-semibold mb-2">Estimated Height (ft)</Text>
      <TextInput
        value={estimatedHeight}
        onChangeText={(value) => setEstimatedHeight(value)}
        keyboardType="numeric"
        placeholder="Enter estimated height"
        className="border border-gray-300 p-3 mb-4 rounded-lg bg-white text-gray-700"
      />

      {/* Number of Workers Field */}
      <Text className="text-lg font-semibold mb-2">Number of Workers</Text>
      <TextInput
        value={numberOfWorkers}
        onChangeText={(value) => setNumberOfWorkers(value)}
        keyboardType="numeric"
        placeholder="Enter number of workers"
        className="border border-gray-300 p-3 mb-4 rounded-lg bg-white text-gray-700"
      />

      {/* Government Regulation Factor (%) Field */}
      <Text className="text-lg font-semibold mb-2">Government Regulation Factor (%)</Text>
      <TextInput
        value={govRegulationFactor}
        onChangeText={(value) => setGovRegulationFactor(value)}
        keyboardType="numeric"
        placeholder="Enter government regulation factor (%)"
        className="border border-gray-300 p-3 mb-4 rounded-lg bg-white text-gray-700"
      />

      {/* Site Condition Factor (1 to 5) Field */}
      <Text className="text-lg font-semibold mb-2">Site Condition Factor (1 to 5)</Text>
      <TextInput
        value={siteConditionFactor}
        onChangeText={(value) => setSiteConditionFactor(value)}
        keyboardType="numeric"
        placeholder="Enter site condition factor (1 to 5)"
        className="border border-gray-300 p-3 mb-4 rounded-lg bg-white text-gray-700"
      />

      {/* Bad Weather Factor */}
      <Text className="text-lg font-semibold mb-2">Bad Weather Factor</Text>
        <View className="border border-gray-300 p-0 mb-4 rounded-lg bg-white text-gray-700">
          <RNPickerSelect
            onValueChange={(value) => setBadWeatherFactor(value)}
            items={[
            { label: 'Very Low', value: '4' },
            { label: 'Low', value: '1' },
            { label: 'Medium', value: '2' },
            { label: 'High', value: '0' },
            { label: 'Very High', value: '3' },
          ]} 
        />
        </View>

      {/* Design Variation Factor */}
      <Text className="text-lg font-semibold mb-2">Design Variation Factor</Text>
        <View className="border border-gray-300 p-0 mb-4 rounded-lg bg-white text-gray-700">
          <RNPickerSelect
            onValueChange={(value) => setDesignVariationFactor(value)}
            items={[
            { label: 'Very Low', value: '4' },
            { label: 'Low', value: '1' },
            { label: 'Medium', value: '2' },
            { label: 'High', value: '0' },
            { label: 'Very High', value: '3' },
          ]}
        />
      </View>

      {/* Submit Button */}
      <View className="my-6">
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-500 p-4 rounded-lg items-center mt-4"
      >
        <Text className="text-white text-lg font-bold">Submit</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const Injuryresult = ({navigation}) => {
  const route = useRoute(); 
  const { formData } = route.params;
  const badWeatherMapping = {
    4: 'Very Low',
    1: 'Low',
    2: 'Medium',
    0: 'High',
    3: 'Very High',
  };

  const designVariationMapping = {
    4: 'Very Low',
    1: 'Low',
    2: 'Medium',
    0: 'High',
    3: 'Very High',
  };

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold pt-12 mb-5 text-center">Delay Prediction</Text>

      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-lg font-semibold mb-2">Estimated Area: {formData.estimatedArea}</Text>
        <Text className="text-lg font-semibold mb-2">Estimated Height: {formData.estimatedHeight}</Text>
        <Text className="text-lg font-semibold mb-2">Number of Workers: {formData.numberOfWorkers}</Text>
        <Text className="text-lg font-semibold mb-2">Government Regulation Factor: {formData.govRegulationFactor}</Text>
        <Text className="text-lg font-semibold mb-2">Site Condition Facor: {formData.siteConditionFactor}</Text>
        <Text className="text-lg font-semibold mb-2">Bad Weather Factor: {badWeatherMapping[formData.badWeatherFactor]}</Text>
        <Text className="text-lg font-semibold mb-2">Design Variation Factor: {designVariationMapping[formData.designVariationFactor]}</Text>
        {/* Display the delay prediction result */}
        <Text className=" font-semibold text-red-500 text-lg mb-2 ">
          Predicted Delay: {formData.prediction ? formData.prediction : 'No prediction'}
        </Text>
      </View>
    </ScrollView>
  );
};
