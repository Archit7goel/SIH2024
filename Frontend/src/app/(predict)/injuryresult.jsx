import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ResultPage = ({ route }) => {
  // Destructure the passed data from the form submission
  const {
    workDivision,
    role,
    primaryCause,
    workingCondition,
    machineCondition,
    observation,
    incident,
  } = route?.params || {};

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold mb-5 text-center">Injury Prediction</Text>

      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-lg font-semibold mb-2">Work Division: {workDivision}</Text>
        <Text className="text-lg font-semibold mb-2">Role: {role}</Text>
        <Text className="text-lg font-semibold mb-2">Primary Cause: {primaryCause}</Text>
        <Text className="text-lg font-semibold mb-2">Working Condition: {workingCondition}</Text>
        <Text className="text-lg font-semibold mb-2">Machine Condition: {machineCondition}</Text>
        <Text className="text-lg font-semibold mb-2">Observation: {observation}</Text>
        <Text className="text-lg font-semibold mb-2">Incident Type: {incident}</Text>
      </View>
    </ScrollView>
  );
};

export default ResultPage;
