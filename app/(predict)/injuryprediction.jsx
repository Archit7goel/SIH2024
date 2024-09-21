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
        <Stack.Screen name="ProjectForm" component={InjuryEvaluationForm} options={{ headerShown: false }}/>
        <Stack.Screen name="Injuryresult" component={Injuryresult} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default predict;

const InjuryEvaluationForm = () => {
  const [workDivision, setWorkDivision] = useState('');
  const [role, setRole] = useState('');
  const [primaryCause, setPrimaryCause] = useState('');
  const [workingCondition, setWorkingCondition] = useState('');
  const [machineCondition, setMachineCondition] = useState('');
  const [observation, setObservation] = useState('');
  const [incident, setIncident] = useState('');
  const [loading, setLoading] = useState(false);


  const navigation = useNavigation();  // Use navigation

  const handleSubmit = () => {
    if (
      workDivision &&
      role &&
      primaryCause &&
      workingCondition &&
      machineCondition &&
      observation &&
      incident 
    ) {
      // Collect form data into an array
      const featureArray = [
        Number(workDivision),
        Number(role),
        Number(primaryCause),
        Number(workingCondition),
        Number(machineCondition),
        Number(observation),
        Number(incident),
      ];
      console.log(featureArray)
      // Send data to the API for delay prediction
      axios.post('https://delay-prediction.onrender.com/injury_predict', { features: featureArray })
        .then((response) => {
          setLoading(false); // Stop loading

          // Navigate to Delayresult and pass the prediction data
          navigation.navigate('Injuryresult', {
            formData: {
              workDivision,
              role,
              primaryCause,
              workingCondition,
              machineCondition,
              observation,
              incident,
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
      <Text className="text-2xl font-bold pt-12 mb-5 text-center">Injury Evaluation Form</Text>

      <Text className="text-lg font-semibold mb-2">Work Division</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setWorkDivision(value)}
        items={[
          { label: 'Raw Materials', value: '4' },
          { label: 'Engineering & Project', value: '3' },
          { label: 'Shared Services', value: '2' },
          { label: 'Metals', value: '5' },
          { label: 'Corporate Services', value: '0' },
          { label: 'Others', value: '1' },
        ]}
      />
      </View>

      {/* Role */}
      <Text className="text-lg font-semibold mb-2">Role</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setRole(value)}
        items={[
          { label: 'Employee', value: '1' },
          { label: 'Contractor', value: '0' },
        ]}
      />
      </View>

      {/* Primary Cause */}
      <Text className="text-lg font-semibold mb-2">Primary Cause</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setPrimaryCause(value)}
        items={[
          { label: 'Material Handling', value: '6' },
          { label: 'Dashing/Collision', value: '4' },
          { label: 'Process Incidents', value: '1' },
          { label: 'Slip/Trip/Fall', value: '2' },
          { label: 'Electricity/Fire/Energy', value: '5' },
          { label: 'Structural Integrity', value: '3' },
          { label: 'Medical Ailment', value: '0' },
        ]}
      />
      </View>

      {/* Working Condition */}
      <Text className="text-lg font-semibold mb-2">Working Condition</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setWorkingCondition(value)}
        items={[
          { label: 'Group Working', value: '0' },
          { label: 'Single Working', value: '2' },
          { label: 'Not Applicable', value: '1' },
        ]}
      />
      </View>

      {/* Machine Condition */}
      <Text className="text-lg font-semibold mb-2">Machine Condition</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setMachineCondition(value)}
        items={[
          { label: 'Working', value: '2' },
          { label: 'Idle', value: '0' },
          { label: 'Not Applicable', value: '1' },
        ]}
      />
      </View>

      {/* Observation */}
      <Text className="text-lg font-semibold mb-2">Observation</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setObservation(value)}
        items={[
          { label: 'Unsafe Act', value: '0' },
          { label: 'Unsafe Condition', value: '2' },
          { label: 'Unsafe Act & Unsafe Condition', value: '3' },
          { label: 'Unsafe Act by Other', value: '1' },
        ]}
      />
      </View>

      {/* Incident Type */}
      <Text className="text-lg font-semibold mb-2">Incident Type</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setIncident(value)}
        items={[
          { label: 'Behaviour', value: '1' },
          { label: 'Process', value: '0' },
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
  const workDivisionMapping = {
    4: 'Raw Materials',
    3: 'Engineering & Project',
    2: 'Shared Services',
    5: 'Metals',
    0: 'Corporate Services',
    1: 'Others',
  };
  
  const roleMapping = {
    1: 'Employee',
    0: 'Contractor',
  };
  
  const primaryCauseMapping = {
    6: 'Material Handling',
    4: 'Dashing/Collision',
    1: 'Process Incidents',
    2: 'Slip/Trip/Fall',
    5: 'Electricity/Fire/Energy',
    3: 'Structural Integrity',
    0: 'Medical Ailment',
  };
  
  const workingConditionMapping = {
    0: 'Group Working',
    2: 'Single Working',
    1: 'Not Applicable',
  };
  
  const machineConditionMapping = {
    2: 'Working',
    0: 'Idle',
    1: 'Not Applicable',
  };
  
  const observationMapping = {
    0: 'Unsafe Act',
    2: 'Unsafe Condition',
    3: 'Unsafe Act & Unsafe Condition',
    1: 'Unsafe Act by Other',
  };
  
  const incidentMapping = {
    1: 'Behaviour',
    0: 'Process',
  };

  const PredictionMapping = {
    0: 'Low chances of first aid',
    1: 'Medium chances of first aid',
    2: 'High chances of first aid',
    3: 'Low chances of serious injury',
    4: 'Medium chances of serious injury',
    5: 'High chances of serious injury',
    6: 'Low chances of fatal injury',
    7: 'Medium chances of fatal injury',
    8: 'High chances of fatal injury',
  };
  
  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold pt-12 mb-5 text-center">Injury Prediction</Text>

      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-lg font-semibold mb-2">Work Division: {workDivisionMapping[formData.workDivision]}</Text>
        <Text className="text-lg font-semibold mb-2">Role: {roleMapping[formData.role]}</Text>
        <Text className="text-lg font-semibold mb-2">Primary Cause: {primaryCauseMapping[formData.primaryCause]}</Text>
        <Text className="text-lg font-semibold mb-2">Working Condition: {workingConditionMapping[formData.workingCondition]}</Text>
        <Text className="text-lg font-semibold mb-2">Machine Condition: {machineConditionMapping[formData.machineCondition]}</Text>
        <Text className="text-lg font-semibold mb-2">Observation: {observationMapping[formData.observation]}</Text>
        <Text className="text-lg font-semibold mb-2">Incident Type: {incidentMapping[formData.incident]}</Text>
        {/* Display the delay prediction result */}
        <Text className=" font-semibold text-red-500 text-lg mb-2 ">
          Predicted Injury: {PredictionMapping[formData.prediction] ? PredictionMapping[formData.prediction] : 'No prediction'}
        </Text>
      </View>
    </ScrollView>
  );
};