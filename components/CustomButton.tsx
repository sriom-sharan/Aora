import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyle,textStyles,isLoading}:{textStyles?:string;title:string;containerStyle?:string;handlePress?:()=>void;isLoading?:boolean}) => {
  return (
    <View className='w-full'>
        <TouchableOpacity activeOpacity={0.7} onPress={handlePress} className={`bg-secondary-100 rounded-xl min-h-[62px] flex justify-center items-center  ${containerStyle} ${isLoading?'opacity-50':''} `} disabled={isLoading}>

      <Text className={`text-primary text-center font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton