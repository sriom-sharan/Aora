import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async() => {
    if(!form.email || !form.password || !form.username){
      Alert.alert('Error','Please fill in all the Fields')
    }
    setIsSubmitting(true)
    try {

    const results = await  createUser(form.email,form.password,form.username);
      // set it to globalcontext state..
      router.replace('/home')
    } catch (error:any) {
      Alert.alert("Error",error.message)
    }
    finally{
      setIsSubmitting(false)
    }

  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className=" w-full h-[95vh] justify-center items-center px-5 my-6">
          <Image
            resizeMode="contain"
            source={images.logo}
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl mt-10 font-psemibold text-white">
            Sign up to Aora
          </Text>
          <View className="h-0.5 mt-2 w-[50vw] bg-gray-800"></View>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4"
          />

          <CustomButton
            title="Sign Up"
            handlePress={onSubmit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg underline font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
