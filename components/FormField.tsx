import { Image, KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";

const FormField = ({
  title,
  value,
  otherStyles,
  placeholder,
  keyboardType,
  handleChangeText,
}: {
  title: string;
  value: string;
  handleChangeText: (e: any) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <View className={`space-y-2 w-full ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-transparent bg-black-100  w-full flex-row h-16 px-4 focus:border-secondary items-center rounded-2xl">
        <TextInput
        
          className="flex-1 w-full text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && 
        <TouchableOpacity onPress={()=>{setShowPassword(!showPassword)}}><Image source={!showPassword ?icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode="contain" /></TouchableOpacity> }
      </View>
    </View>
  );
};

export default FormField;
