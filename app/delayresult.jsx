import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const delayresult = ({ route }) => {
  console.log("Route params: ", route?.params);
  // Destructure the passed data from the form submission
  const {
    estimatedArea,
    estimatedHeight,
    numberOfWorkers,
    govRegulationFactor,
    siteConditionFactor,
    badWeatherFactor,
    designVariationFactor,
  } = route?.params || {};

  console.log("Route params: ", route?.params);

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold mb-5 text-center">Delay Prediction</Text>

      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-lg font-semibold mb-2">Estimated Area: {estimatedArea}</Text>
        <Text className="text-lg font-semibold mb-2">Estimated Height: {estimatedHeight}</Text>
        <Text className="text-lg font-semibold mb-2">Number of Workers: {numberOfWorkers}</Text>
        <Text className="text-lg font-semibold mb-2">Government Regulation Factor: {govRegulationFactor}</Text>
        <Text className="text-lg font-semibold mb-2">Site Condition Facor: {siteConditionFactor}</Text>
        <Text className="text-lg font-semibold mb-2">Bad Weather Factor: {badWeatherFactor}</Text>
        <Text className="text-lg font-semibold mb-2">Design Variation Facor: {designVariationFactor}</Text>
      </View>
    </ScrollView>
  );
};

export default delayresult;
