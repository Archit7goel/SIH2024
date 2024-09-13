import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ResultPage = ({ route }) => {
  // Destructure the passed data from the form submission
  const {
    inflation,
    structuralDesignVariation,
    cashFlow,
    resourceWastage,
    goodCoordination,
    contractorExperience,
    equipmentBreakdown,
    budget,
    projectDelay,
  } = route?.params || {};

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold mb-5 text-center">Cost Overrun Prediction</Text>

      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-lg font-semibold mb-2">Inflation: {inflation}</Text>
        <Text className="text-lg font-semibold mb-2">Structural Design Variation: {structuralDesignVariation}</Text>
        <Text className="text-lg font-semibold mb-2">Cash Flow: {cashFlow}</Text>
        <Text className="text-lg font-semibold mb-2">Resource Wastage: {resourceWastage}</Text>
        <Text className="text-lg font-semibold mb-2">Good Coordination: {goodCoordination}</Text>
        <Text className="text-lg font-semibold mb-2">contractor Experience: {contractorExperience}</Text>
        <Text className="text-lg font-semibold mb-2">Equipment Breakdown: {equipmentBreakdown}</Text>
        <Text className="text-lg font-semibold mb-2">Budget: {budget}</Text>
        <Text className="text-lg font-semibold mb-2">Project Delay: {projectDelay}</Text>
      </View>
    </ScrollView>
  );
};

export default ResultPage;
