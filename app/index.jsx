import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {Link } from 'expo-router';
import Icon from "react-native-vector-icons/Feather";

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
  const [role, setRole] = useState("worker"); // Default to "worker"

  const handleSubmit = () => {
    console.log("Login Form Submitted");
  };

  return (
    <View className="flex-1">
      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Phone Number"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
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
            role === "manager" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("manager")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "manager" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "manager" ? "font-bold" : ""
            }`}
          >
            Manager
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-row items-center p-2 ${
            role === "worker" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("worker")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "worker" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "worker" ? "font-bold" : ""
            }`}
          >
            Worker
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RegisterSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("worker"); 

  return (
    <View className="flex-1">
      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Name"
        placeholderTextColor="gray"
      />
      <TextInput
        className="bg-gray-800 p-4 rounded-md text-white mb-4"
        placeholder="Phone Number"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
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
            role === "manager" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("manager")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "manager" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "manager" ? "font-bold" : ""
            }`}
          >
            Manager
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-row items-center p-2 ${
            role === "worker" ? "bg-gray-700" : "bg-gray-800"
          } rounded-md`}
          onPress={() => setRole("worker")}
        >
          <View
            className={`w-5 h-5 border-2 border-white rounded-full ${
              role === "worker" ? "bg-white" : ""
            }`}
          />
          <Text
            className={`text-white ml-2 ${
              role === "worker" ? "font-bold" : ""
            }`}
          >
            Worker
          </Text>
        </TouchableOpacity>
      </View>


    </View>
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