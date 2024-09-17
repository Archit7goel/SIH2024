import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const ProjectForm = () => {
  const [workDivision, setWorkDivision] = useState('');
  const [role, setRole] = useState('');
  const [primaryCause, setPrimaryCause] = useState('');
  const [workingCondition, setWorkingCondition] = useState('');
  const [machineCondition, setMachineCondition] = useState('');
  const [observation, setObservation] = useState('');
  const [incident, setIncident] = useState('');

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
      // Navigate to DescriptionPage and pass the form data
      navigation.navigate('(predict)/injuryresult', {
        workDivision,
        role,
        primaryCause,
        workingCondition,
        machineCondition,
        observation,
        incident,
      });
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  return (
    <ScrollView className="flex-1 bg-blue-50 p-5">
      <Text className="text-2xl font-bold mb-5 text-center">Injury Evaluation Form</Text>

      <Text className="text-lg font-semibold mb-2">Work Division</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setWorkDivision(value)}
        items={[
          { label: 'Raw Materials', value: 'Raw Materials' },
          { label: 'Engineering & Project', value: 'Engineering & Project' },
          { label: 'Shared Services', value: 'Shared Services' },
          { label: 'Metals', value: 'Metals' },
          { label: 'Corporate Services', value: 'Corporate Services' },
          { label: 'Others', value: 'Others' },
        ]}
      />
      </View>

      {/* Role */}
      <Text className="text-lg font-semibold mb-2">Role</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setRole(value)}
        items={[
          { label: 'Employee', value: 'Employee' },
          { label: 'Contractor', value: 'Contractor' },
        ]}
      />
      </View>

      {/* Primary Cause */}
      <Text className="text-lg font-semibold mb-2">Primary Cause</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setPrimaryCause(value)}
        items={[
          { label: 'Material Handling', value: 'Material Handling' },
          { label: 'Dashing/Collision', value: 'Dashing/Collision' },
          { label: 'Process Incidents', value: 'Process Incidents' },
          { label: 'Slip/Trip/Fall', value: 'Slip/Trip/Fall' },
          { label: 'Electricity/Fire/Energy', value: 'Electricity/Fire/Energy' },
          { label: 'Structural Integrity', value: 'Structural Integrity' },
          { label: 'Medical Ailment', value: 'Medical Ailment' },
          { label: 'Structural Integrity', value: 'Structural Integrity' },

        ]}
      />
      </View>

      {/* Working Condition */}
      <Text className="text-lg font-semibold mb-2">Working Condition</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setWorkingCondition(value)}
        items={[
          { label: 'Group Working', value: 'Group Working' },
          { label: 'Single Working', value: 'Single Working' },
          { label: 'Not Applicable', value: 'Not Applicable' },
        ]}
      />
      </View>

      {/* Machine Condition */}
      <Text className="text-lg font-semibold mb-2">Machine Condition</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setMachineCondition(value)}
        items={[
          { label: 'Working', value: 'Working' },
          { label: 'Idle', value: 'Idle' },
          { label: 'Not Applicable', value: 'Not Applicable' },
        ]}
      />
      </View>

      {/* Observation */}
      <Text className="text-lg font-semibold mb-2">Observation</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setObservation(value)}
        items={[
          { label: 'Unsafe Act', value: 'Unsafe Act' },
          { label: 'Unsafe Condition', value: 'Unsafe Condition' },
          { label: 'Unsafe Act & Unsafe Condition', value: 'Unsafe Act & Unsafe Condition' },
          { label: 'Unsafe Act by Other', value: 'Unsafe Act by Other' },
        ]}
      />
      </View>

      {/* Incident Type */}
      <Text className="text-lg font-semibold mb-2">Incident Type</Text>
      <View className="border border-gray-300 p-1 mb-4 rounded-lg bg-white text-gray-700">
      <RNPickerSelect
        onValueChange={(value) => setIncident(value)}
        items={[
          { label: 'Behaviour', value: 'Behaviour' },
          { label: 'Process', value: 'Process' },
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