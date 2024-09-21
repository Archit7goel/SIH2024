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
        <Stack.Screen name="ProjectForm" component={CostOverrunEvaluationForm} options={{ headerShown: false }}/>
        <Stack.Screen name="CostOverrunresult" component={CostOverrunresult} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default predict;

const CostOverrunEvaluationForm = () => {
  const [inflation, setInflation] = useState('');
  const [structuralDesignVariation, setStructuralDesignVariation] = useState('');
  const [cashFlow, setCashFlow] = useState('');
  const [resourceWastage, setResourceWastage] = useState('');
  const [goodCoordination, setGoodCoordination] = useState('');
  const [contractorExperience, setContractorExperience] = useState('');
  const [equipmentBreakdown, setEquipmentBreakdown] = useState('');
  const [budget, setBudget] = useState('');
  const [projectDelay, setProjectDelay] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();   // Use navigation

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
      // Collect form data into an array
      const featureArray = [
        Number(inflation),
        Number(structuralDesignVariation),
        Number(cashFlow),
        Number(resourceWastage),
        Number(goodCoordination),
        Number(contractorExperience),
        Number(equipmentBreakdown),
        Number(budget),
        Number(projectDelay),
      ];
      console.log(featureArray)
      // Send data to the API for delay prediction
      axios.post('https://delay-prediction.onrender.com/cost_predict', { features: featureArray })
        .then((response) => {
          setLoading(false); // Stop loading

          // Navigate to Delayresult and pass the prediction data
          navigation.navigate('CostOverrunresult', {
            formData: {
              inflation,
              structuralDesignVariation,
              cashFlow,
              resourceWastage,
              goodCoordination,
              contractorExperience,
              equipmentBreakdown,
              budget,
              projectDelay,
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
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold pt-12 mb-5 text-center">Cost Overrun Evaluation Form</Text>

      {/* Inflation */}
      <Text className="text-lg font-semibold mb-2">Inflation</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setInflation(value)}
        items={[
          { label: 'High', value: '0' },
          { label: 'Low', value: '1' },
        ]}
      />
      </View>
      
      {/* Structural Design Variation */}
      <Text className="text-lg font-semibold mb-2">Structural Design Variation</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setStructuralDesignVariation(value)}
        items={[
          { label: 'More than 4', value: '4' },
          { label: '4', value: '3' },
          { label: '3', value: '2' },
          { label: '2', value: '1' },
          { label: '1', value: '0' },
        ]}
      />
      </View>

      {/* Cash Flow */}
      <Text className="text-lg font-semibold mb-2">Cash Flow</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setCashFlow(value)}
        items={[
          { label: 'Good', value: '1' },
          { label: 'Bad', value: '0' },
        ]}
      />
      </View>

      {/* Resource Wastage */}
      <Text className="text-lg font-semibold mb-2">Resource wastage</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setResourceWastage(value)}
        items={[
          { label: 'Medium', value: '1' },
          { label: 'Low', value: '0' },
        ]}
      />
      </View>

      {/* Good Coordination */}
      <Text className="text-lg font-semibold mb-2">Good Coordination</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setGoodCoordination(value)}
        items={[
          { label: 'Yes', value: '1' },
          { label: 'No', value: '0' },
        ]}
      />
      </View>

      {/* Contractor Experience */}
      <Text className="text-lg font-semibold mb-2">Contractor Experience</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setContractorExperience(value)}
        items={[
          { label: 'More than 10', value: '5' },
          { label: 'More than 8', value: '4' },
          { label: 'More than 6', value: '3' },
          { label: 'More than 4', value: '2' },
          { label: 'More than 2', value: '1' },
          { label: 'Less than 2', value: '0' },
        ]}
      />
      </View>

      {/* Equipment Breakdown */}
      <Text className="text-lg font-semibold mb-2">Equipment Breakdown</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setEquipmentBreakdown(value)}
        items={[
          { label: 'Medium', value: '1' },
          { label: 'Low', value: '0' },
        ]}
      />
      </View>

      {/* Budget*/}
      <Text className="text-lg font-semibold mb-2">Budget</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setBudget(value)}
        items={[
          { label: 'Tight', value: '1' },
          { label: 'Loose', value: '0' },
        ]}
      />
      </View>

      {/* Project Delay */}
      <Text className="text-lg font-semibold mb-2">Project Delay</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setProjectDelay(value)}
        items={[
            { label: 'More than 80%', value: '4' },
            { label: 'More than 60%', value: '3' },
            { label: 'More than 40%', value: '2' },
            { label: 'More than 20%', value: '1' },
            { label: 'Less than 20%', value: '0' },
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

const CostOverrunresult = ({navigation}) => {
  const route = useRoute(); 
  const { formData } = route.params;
  const inflationMapping = {
    0: 'High',
    1: 'Low',
  };
  
  const structuralDesignVariationMapping = {
    4: 'More than 4',
    3: '4',
    2: '3',
    1: '2',
    0: '1',
  };
  
  const cashFlowMapping = {
    1: 'Good',
    0: 'Bad',
  };
  
  const resourceWastageMapping = {
    1: 'Medium',
    0: 'Low',
  };
  
  const goodCoordinationMapping = {
    1: 'Yes',
    0: 'No',
  };
  
  const contractorExperienceMapping = {
    5: 'More than 10',
    4: 'More than 8',
    3: 'More than 6',
    2: 'More than 4',
    1: 'More than 2',
    0: 'Less than 2',
  };
  
  const equipmentBreakdownMapping = {
    1: 'Medium',
    0: 'Low',
  };
  
  const budgetMapping = {
    1: 'Tight',
    0: 'Loose',
  };
  
  const projectDelayMapping = {
    4: 'More than 80%',
    3: 'More than 60%',
    2: 'More than 40%',
    1: 'More than 20%',
    0: 'Less than 20%',
  };

  const PredictionMapping = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
  };

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold pt-12 mb-5 text-center">Cost Overrun Prediction</Text>

      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-lg font-semibold mb-2">Inflation: {inflationMapping[formData.inflation]}</Text>
        <Text className="text-lg font-semibold mb-2">Structural Design Variation: {structuralDesignVariationMapping[formData.structuralDesignVariation]}</Text>
        <Text className="text-lg font-semibold mb-2">Cash Flow: {cashFlowMapping[formData.cashFlow]}</Text>
        <Text className="text-lg font-semibold mb-2">Resource Wastage: {resourceWastageMapping[formData.resourceWastage]}</Text>
        <Text className="text-lg font-semibold mb-2">Good Coordination: {goodCoordinationMapping[formData.goodCoordination]}</Text>
        <Text className="text-lg font-semibold mb-2">contractor Experience: {contractorExperienceMapping[formData.contractorExperience]}</Text>
        <Text className="text-lg font-semibold mb-2">Equipment Breakdown: {equipmentBreakdownMapping[formData.equipmentBreakdown]}</Text>
        <Text className="text-lg font-semibold mb-2">Budget: {budgetMapping[formData.budget]}</Text>
        <Text className="text-lg font-semibold mb-2">Project Delay: {projectDelayMapping[formData.projectDelay]}</Text>
      {/* Display the delay prediction result */}
      <Text className=" font-semibold text-red-500 text-lg mb-2 ">
          Cost Overrun: {PredictionMapping[formData.prediction] ? PredictionMapping[formData.prediction] : 'No prediction'}
      </Text>
      </View>
    </ScrollView>
  );
};
