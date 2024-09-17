import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import {Link } from 'expo-router';
import Icon from "react-native-vector-icons/Feather";
import {Picker} from '@react-native-picker/picker';

const DarkGridAuth = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <View className="flex-1 bg-black pt-20">
      <View className="flex-1 px-8">
        <Heading isRegistering={isRegistering} />
        {isRegistering ? <RegisterSection /> : <LoginSection />}
      </View>
      <View className="px-8 pb-4">
        <Footer onToggle={handleRegisterToggle} isRegistering={isRegistering} />
        <Terms />
      </View>
    </View>
  );
};

const Heading = ({ isRegistering }) => {
  return (
    <Text className="text-white text-3xl font-bold mb-8">
      {isRegistering ? "Register your account" : "Sign in to your account"}
    </Text>
  );
};

const LoginSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Officer"); // Default to "Officer"

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
    <View className="flex-1">
      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Phone Number"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
      />
      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Email"
        placeholderTextColor="gray"
      />
      <View className="relative mb-4">
        <TextInput
          className="bg-gray-800 p-4 rounded-md text-white"
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={!showPassword}
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

      <View className="flex-row items-center mb-4">
        <TouchableOpacity
          className={`flex-row items-center p-2 mr-4 ${
            role === "Head" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("Head")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "Head" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "Head" ? "font-bold" : ""
            }`}
          >
            Head
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-row items-center p-2 ${
            role === "Officer" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("Officer")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "Officer" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "Officer" ? "font-bold" : ""
            }`}
          >
            Officer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const RegisterSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Officer");
  const [department, setDepartment] = useState("placeholder"); // Default set to "placeholder"
  const [departmentError, setDepartmentError] = useState(""); // State for handling department validation errors
  const [designation, setDesignation] = useState("");  // State to manage designation input
  const [designationError, setDesignationError] = useState("");  // State to handle designation validation errors
  const [name, setName] = useState("");  // State to manage name input
  const [nameError, setNameError] = useState("");  // State to handle name validation errors
  const [phone, setPhone] = useState("");  // State to manage phone input
  const [phoneError, setPhoneError] = useState("");  // State to handle phone validation errors
  const [email, setEmail] = useState("");  // State to manage email input
  const [emailError, setEmailError] = useState("");  // State to handle email validation errors
  const [password, setPassword] = useState("");  // State to manage password input
  const [passwordError, setPasswordError] = useState("");  // State to handle password validation errors

  const handleNameChange = (input) => {
    setName(input);
    if (!/^[A-Za-z\s]+$/.test(input) || input.length < 2) {
      setNameError("Name must contain only letters and must contain at least 2 characters.");
    } else {
      setNameError("");  // Reset error if the name is valid
    }
  };

  const handlePhoneChange = (input) => {
    setPhone(input);
    if (!/^[6-9][0-9]{9}$/.test(input)) {
      setPhoneError("Phone number must contain 10 digits");
    } else {
      setPhoneError("");  // Reset error if the phone number is valid
    }
  };

  const handleEmailChange = (input) => {
    setEmail(input);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input)) {
      setEmailError("Please enter a valid Email Address.");
    } else {
      setEmailError("");  // Reset error if the email is valid
    }
  };

  const handleDepartmentChange = (itemValue) => {
    setDepartment(itemValue);
    if (itemValue === "placeholder") {
      setDepartmentError("Please select a valid Department Name.");
    } else {
      setDepartmentError("");  // Reset error if the department is valid
    }
  };

  const handleDesignationChange = (itemValue) => {
    setDesignation(itemValue);
    if (itemValue === "placeholder") {
      setDesignationError("Please select a valid Job Designation.");
    } else {
      setDesignationError("");  // Reset error if the designation is valid
    }
  };

  const handlePasswordChange = (input) => {
    setPassword(input);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(input)) {
      setPasswordError(
        "Password must be at least 6 characters long, and include at least 1 uppercase, 1 lowercase, and 1 digit."
      );
    } else {
      setPasswordError("");  // Reset error if the password is valid
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
    <View className="flex-1">
      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Name"
        placeholderTextColor="gray"
        value={name}
        onChangeText={handleNameChange}  // Handle input changes
      />
      {nameError ? (
        <Text className="text-red-500 mb-4">{nameError}</Text>  // Display error message
      ) : null}

      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Phone Number"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={handlePhoneChange}  // Handle phone number changes
      />
      {phoneError ? (
        <Text className="text-red-500 mb-4">{phoneError}</Text>  // Display phone number error message
      ) : null}

      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}  // Handle email changes
      />
      {emailError ? (
        <Text className="text-red-500 mb-4">{emailError}</Text>  // Display email error message
      ) : null}
      

      {/* Department and Designation Pickers */}
      <View className="bg-[#202938] text-[#6e7378] p-1 rounded-md mb-4">
        <Picker
          selectedValue={department}
          onValueChange={handleDepartmentChange}  // Handle department selection changes
          className="bg-[#202938] text-[#6e7378] border border-[#6e7378]  rounded-lg"
          style={{
            color: '#6e7378',
            backgroundColor: '#202938',
          }}
          itemStyle={{ color: '#ffffff' }}
        >
          <Picker.Item label="Insert Your Department Name" value="placeholder" />
          <Picker.Item label="DDA" value="dda" />
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Very High" value="very high" />
        </Picker>
      </View>
      {departmentError ? (
        <Text className="text-red-500 mb-4">{departmentError}</Text>  // Display department error message
      ) : null}

      <View className="bg-[#202938] text-[#6e7378] p-1 rounded-md mb-4">
        <Picker
          selectedValue={designation}
          onValueChange={handleDesignationChange}  // Handle designation selection changes
          className="bg-[#202938] text-[#6e7378] border border-[#6e7378]  rounded-lg"
          style={{
            color: '#6e7378',
            backgroundColor: '#202938',
          }}
          itemStyle={{ color: '#ffffff' }}
        >
          <Picker.Item label="Insert Your Job Designation" value="placeholder" />
          <Picker.Item label="Officer" value="officer" />
          <Picker.Item label="Employee" value="employee" />
          <Picker.Item label="Technical Expert" value="technical_expert" />
        </Picker>
      </View>
      {designationError ? (
        <Text className="text-red-500 mb-4">{designationError}</Text>  // Display designation error message
      ) : null}

      <View className="relative mb-4">
        <TextInput
          className="bg-gray-800 p-4 rounded-md text-white"
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handlePasswordChange}  // Password validation handler
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
      {passwordError ? (
        <Text className="text-red-500 mb-4">{passwordError}</Text>
      ) : null}

      <View className="flex-row items-center mb-4">
        <TouchableOpacity
          className={`flex-row items-center p-2 mr-4 ${
            role === "Head" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("Head")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "Head" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "Head" ? "font-bold" : ""
            }`}
          >
            Head
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-row items-center p-2 ${
            role === "Officer" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("Officer")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "Officer" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "Officer" ? "font-bold" : ""
            }`}
          >
            Officer
          </Text>
        </TouchableOpacity>
      </View>


    </View>
    </ScrollView>    
  );
};


const Terms = () => {
  return (
    <Text className="text-gray-500 text-center mt-4">
      By continuing, you agree to our Terms of Service and Privacy Policy.
    </Text>
  );
};

const Footer = ({ onToggle, isRegistering }) => {
  const handleRegisteration = () => {
    console.log("Register Form Submitted");
    onToggle();
  };
  const handleLogin = () => {
    console.log("Login Form Submitted");
  };

  return (
    <View>
      {isRegistering ? (
          <TouchableOpacity
            className="bg-white p-4 rounded-md mb-4"
            onPress={handleRegisteration}
          >
            <Text className="text-black text-center text-lg font-bold">
              Register
            </Text>
          </TouchableOpacity>
      ) : (
        <Link href="/home" asChild>
          <TouchableOpacity
            className="bg-white p-4 rounded-md mb-4"
            onPress={handleLogin}
          >
            <Text className="text-black text-center text-lg font-bold">
              Submit
            </Text>
          </TouchableOpacity>
        </Link>
      )}
      <Text className="text-gray-500 text-center px-1">
        {isRegistering ? (
          <>
            Already have an account?{"           "}
            <TouchableOpacity onPress={onToggle}>
              <Text className="text-white font-bold ">Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <TouchableOpacity onPress={onToggle}>
              <Text className="text-white font-bold">Register</Text>
            </TouchableOpacity>
          </>
        )}
      </Text>
    </View>
  );
};

export default DarkGridAuth;