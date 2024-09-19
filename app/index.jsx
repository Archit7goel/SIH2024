import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import Icon from "react-native-vector-icons/Feather";
import { Picker } from '@react-native-picker/picker';

const DarkGridAuth = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    password: '',
    department: '',
    designation: '',
    role: 'Officer'
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      case 'name':
        error = !/^[A-Za-z\s]{2,}$/.test(value) ? "Name must contain only letters and be at least 2 characters long." : "";
        break;
      case 'username':
        error = !/^[A-Za-z0-9_]{3,20}$/.test(value) ? "Username must be 3-20 characters and can only contain letters, numbers, and underscores." : "";
        break;
      case 'phone':
        error = !/^[6-9][0-9]{9}$/.test(value) ? "Phone number must be 10 digits starting with 6-9." : "";
        break;
      case 'email':
        error = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? "Please enter a valid email address." : "";
        break;
      // case 'password':
      //   error = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value) 
      //     ? "Password must be at least 6 characters long, include 1 uppercase, 1 lowercase, and 1 digit." : "";
      //   break;
      case 'password':
        error = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(value) ? "Password must be at least 6 characters long, include 1 uppercase, 1 lowercase, 1 digit, and 1 special character." : "";
        break;
      case 'department':
      case 'designation':
        error = value === "placeholder" ? `Please select a valid ${field}.` : "";
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => validateField(key, formData[key]));
    

    if (Object.values(errors).some(error => error !== "") || 
    Object.values(formData).some(value => value === "")
    ) {
      Alert.alert("Form Error", "Please correct the errors in the form.");
    } else {
      console.log("Form submitted:", formData);

      if (isRegistering) {
        // Registration successful, switch to login mode
        Alert.alert("Success", "Registration successful! Please log in.", [
          { text: "OK", onPress: () => setIsRegistering(false) }
        ]);
      } else {
        // Login successful, redirect to home page
        Alert.alert("Success", "Login successful!", [
          { text: "OK", onPress: () => router.push("/home") }
        ]);
      }
    }
  };

  const toggleAuthMode = () => setIsRegistering(!isRegistering);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View className="flex-1 bg-black pt-20 px-8">
        <Text className="text-white text-3xl font-bold mb-8">
          {isRegistering ? "Register your Account" : "Sign in to your Account"}
        </Text>
        
        <View className="flex-1">
          {isRegistering ? (
            <>
              <InputField
                placeholder="Name"
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
                error={errors.name}
              />
              <InputField
                placeholder="Username"
                value={formData.username}
                onChangeText={(value) => handleInputChange('username', value)}
                error={errors.username}
              />
              <InputField
                placeholder="Phone Number"
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                keyboardType="phone-pad"
                error={errors.phone}
              />
              <InputField
                placeholder="Email"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                keyboardType="email-address"
                error={errors.email}
              />
            </>
          ) : (
            <>
              <InputField
                placeholder="Username"
                value={formData.username}
                onChangeText={(value) => handleInputChange('username', value)}
                error={errors.username}
              />
              <InputField
                placeholder="Phone Number"
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                keyboardType="phone-pad"
                error={errors.phone}
              />
            </>
          )}
          
          <View className="relative mb-4">
            <TextInput
              className="bg-gray-800 p-4 rounded-md text-white"
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
            />
            <TouchableOpacity
              className="absolute right-4 top-4"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
          {errors.password && <Text className="text-red-500 mb-4">{errors.password}</Text>}
          
          {isRegistering && (
            <>
              <PickerField
                selectedValue={formData.department}
                onValueChange={(value) => handleInputChange('department', value)}
                items={[
                  { label: "Insert Your Department Name", value: "placeholder" },
                  { label: "DDA", value: "dda" },
                  { label: "Low", value: "low" },
                  { label: "Medium", value: "medium" },
                  { label: "High", value: "high" },
                  { label: "Very High", value: "very high" },
                ]}
                error={errors.department}
              />
              
              <PickerField
                selectedValue={formData.designation}
                onValueChange={(value) => handleInputChange('designation', value)}
                items={[
                  { label: "Insert Your Job Designation", value: "placeholder" },
                  { label: "Officer", value: "officer" },
                  { label: "Employee", value: "employee" },
                  { label: "Technical Expert", value: "technical_expert" },
                ]}
                error={errors.designation}
              />
              
              <RoleSelector
                role={formData.role}
                onRoleChange={(value) => handleInputChange('role', value)}
              />
            </>
          )}
        </View>
        
        <View className="mt-4">
          <TouchableOpacity
            className="bg-white p-4 rounded-md mb-4"
            onPress={handleSubmit}
          >
            <Text className="text-black text-center text-lg font-bold">
              {isRegistering ? "Register" : "Login"}
            </Text>
          </TouchableOpacity>
          
          <Text className="text-gray-500 text-center px-1">
            {isRegistering ? "Already have an account? " : "Don't have an account? "}
            <TouchableOpacity onPress={toggleAuthMode}>
              <Text className="text-white font-bold">{isRegistering ? "Login" : "Register"}</Text>
            </TouchableOpacity>
          </Text>
          
          <Text className="text-gray-500 text-center mt-4">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const InputField = ({ placeholder, value, onChangeText, keyboardType, error, secureTextEntry }) => (
  <View className="mb-4">
    <TextInput
      className="bg-gray-800 p-4 rounded-md text-white"
      placeholder={placeholder}
      placeholderTextColor="gray"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
    {error && <Text className="text-red-500 mt-1">{error}</Text>}
  </View>
);

const PickerField = ({ selectedValue, onValueChange, items, error }) => (
  <View className="mb-4">
    <View className="bg-[#202938] text-[#6e7378] p-1 rounded-md">
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{ color: '#6e7378', backgroundColor: '#202938' }}
        itemStyle={{ color: '#ffffff' }}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
    {error && <Text className="text-red-500 mt-1">{error}</Text>}
  </View>
);

const RoleSelector = ({ role, onRoleChange }) => (
  <View className="flex-row items-center mb-4">
    {["Head", "Officer"].map((option) => (
      <TouchableOpacity
        key={option}
        className={`flex-row items-center p-2 mr-4 ${
          role === option ? "bg-gray-700" : "bg-gray-800"
        } rounded-md`}
        onPress={() => onRoleChange(option)}
      >
        <View
          className={`w-5 h-5 border-2 border-white rounded-full ${
            role === option ? "bg-white" : ""
          }`}
        />
        <Text className={`text-white ml-2 ${role === option ? "font-bold" : ""}`}>
          {option}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default DarkGridAuth;


















