import { StyleSheet, Text, View ,Image,ScrollView} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import React from "react";
import { images } from "@/constants";
import { Link,Redirect,router,Router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import 'react-native-url-polyfill/auto'

const App = () => {
  return <SafeAreaView className="bg-primary h-full">
    <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className="h-full w-full justify-center items-center px-5">
        <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
        <Image source={images.cards} className="w-[380px] h-[300px]" resizeMode="contain"/>
        <View className="relative mt-5">
        <Text className="text-white font-bold text-3xl px-5 text-center ">Discover Endless Possibilities with{" "}<Text className="text-secondary-200">Auro</Text></Text>
        <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain"/>
        
        </View>
        <Text className="text-sm font-pregular mt-7 text-gray-100 text-center">Where Creativity Meets Innovation: Embark on a Journey of Limitless
        Exploration with Aora </Text>
        <CustomButton title="Continue with Email" containerStyle="w-full mt-7" handlePress={()=>{router.push('/sign-in')}} />
      </View>
    </ScrollView>
    <StatusBar  backgroundColor="#161622" style="light"/>
  </SafeAreaView>;
};

export default App;
