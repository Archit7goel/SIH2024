import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const ProjectForm = () => {
  const [inflation, setInflation] = useState('');
  const [structuralDesignVariation, setStructuralDesignVariation] = useState('');
  const [cashFlow, setCashFlow] = useState('');
  const [resourceWastage, setResourceWastage] = useState('');
  const [goodCoordination, setGoodCoordination] = useState('');
  const [contractorExperience, setContractorExperience] = useState('');
  const [equipmentBreakdown, setEquipmentBreakdown] = useState('');
  const [budget, setBudget] = useState('');
  const [projectDelay, setProjectDelay] = useState('');

  const navigation = useNavigation();  // Use navigation

  const handleSubmit = () => {
    if (
      inflation &&
      structuralDesignVariation &&
      cashFlow &&
      resourceWastage &&
      goodCoordination &&
      contractorExperience &&
      equipmentBreakdown &&
      budget &&
      projectDelay 
    ) {
      // Navigate to DescriptionPage and pass the form data
      navigation.navigate('overrunresult', {
        inflation,
        structuralDesignVariation,
        cashFlow,
        resourceWastage,
        goodCoordination,
        contractorExperience,
        equipmentBreakdown,
        budget,
        projectDelay,
      });
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold mb-5 text-center">Cost Overrun Evaluation Form</Text>

      {/* Inflation */}
      <Text className="text-lg font-semibold mb-2">Inflation</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setInflation(value)}
        items={[
          { label: 'High', value: 'high' },
          { label: 'Low', value: 'low' },
        ]}
      />
      </View>
      
      {/* Structural Design Variation */}
      <Text className="text-lg font-semibold mb-2">Structural Design Variation</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setStructuralDesignVariation(value)}
        items={[
          { label: 'More than 4', value: 'More than 4' },
          { label: '4', value: '4' },
          { label: '3', value: '3' },
          { label: '2', value: '2' },
          { label: '1', value: '1' },
        ]}
      />
      </View>

      {/* Cash Flow */}
      <Text className="text-lg font-semibold mb-2">Cash Flow</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setCashFlow(value)}
        items={[
          { label: 'Good', value: 'good' },
          { label: 'Bad', value: 'bad' },
        ]}
      />
      </View>

      {/* Resource Wastage */}
      <Text className="text-lg font-semibold mb-2">Resource wastage</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setResourceWastage(value)}
        items={[
          { label: 'Medium', value: 'medium' },
          { label: 'Low', value: 'low' },
        ]}
      />
      </View>

      {/* Good Coordination */}
      <Text className="text-lg font-semibold mb-2">Good Coordination</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setGoodCoordination(value)}
        items={[
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ]}
      />
      </View>

      {/* Contractor Experience */}
      <Text className="text-lg font-semibold mb-2">Contractor Experience</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setContractorExperience(value)}
        items={[
          { label: 'More than 10', value: 'More than 10' },
          { label: 'More than 8', value: 'More than 8' },
          { label: 'More than 6', value: 'More than 6' },
          { label: 'More than 4', value: 'More than 4' },
          { label: 'More than 2', value: 'More than 2' },
          { label: 'Less than 2', value: 'Less than 2' },
        ]}
      />
      </View>

      {/* Equipment Breakdown */}
      <Text className="text-lg font-semibold mb-2">Equipment Breakdown</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setEquipmentBreakdown(value)}
        items={[
          { label: 'Medium', value: 'medium' },
          { label: 'Low', value: 'low' },
        ]}
      />
      </View>

      {/* Budget*/}
      <Text className="text-lg font-semibold mb-2">Budget</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setBudget(value)}
        items={[
          { label: 'Tight', value: 'tight' },
          { label: 'Loose', value: 'loose' },
        ]}
      />
      </View>

      {/* Project Delay */}
      <Text className="text-lg font-semibold mb-2">Project Delay</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setProjectDelay(value)}
        items={[
            { label: 'More than 80%', value: 'more than 80%' },
            { label: 'More than 60%', value: 'more than 60%' },
            { label: 'More than 40%', value: 'more than 40%' },
            { label: 'More than 20%', value: 'more than 20%' },
            { label: 'Less than 20%', value: 'less than 20%' },
        ]}
      />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg items-center mt-4 mb-8"
        onPress={handleSubmit}
      >
        <Text className="text-white text-lg font-bold">Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProjectForm;
