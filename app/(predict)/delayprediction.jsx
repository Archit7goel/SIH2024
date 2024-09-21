import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const ProjectEvaluationForm = () => {
  // State variables for each field
  const [estimatedArea, setEstimatedArea] = useState('');
  const [estimatedHeight, setEstimatedHeight] = useState('');
  const [numberOfWorkers, setNumberOfWorkers] = useState('');
  const [govRegulationFactor, setGovRegulationFactor] = useState('');
  const [siteConditionFactor, setSiteConditionFactor] = useState('');
  const [badWeatherFactor, setBadWeatherFactor] = useState('');
  const [designVariationFactor, setDesignVariationFactor] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log({
      estimatedArea,
      estimatedHeight,
      numberOfWorkers,
      govRegulationFactor,
      siteConditionFactor,
      badWeatherFactor,
      designVariationFactor,
    });

    if (
      estimatedArea &&
      estimatedHeight &&
      numberOfWorkers &&
      govRegulationFactor &&
      siteConditionFactor &&
      badWeatherFactor &&
      designVariationFactor
    ) {
      // Navigate to DescriptionPage and pass the form data
      navigation.navigate('(predict)/delayresult', {
        estimatedArea,
        estimatedHeight,
        numberOfWorkers,
        govRegulationFactor,
        siteConditionFactor,
        badWeatherFactor,
        designVariationFactor,
      });
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold mb-5 text-center">Project Evaluation Form</Text>

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
        <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
          <RNPickerSelect
            onValueChange={(value) => setBadWeatherFactor(value)}
            items={[
            { label: 'Very Low', value: 'very low' },
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
            { label: 'Very High', value: 'very high' },
          ]} 
        />
        </View>

      {/* Design Variation Factor */}
      <Text className="text-lg font-semibold mb-2">Design Variation Factor</Text>
        <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
          <RNPickerSelect
            onValueChange={(value) => setDesignVariationFactor(value)}
            items={[
            { label: 'Very Low', value: 'very low' },
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
            { label: 'Very High', value: 'very high' },
          ]}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-500 p-4 rounded-lg items-center mt-4"
      >
        <Text className="text-white text-lg font-bold">Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProjectEvaluationForm;
