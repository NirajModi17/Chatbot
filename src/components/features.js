import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Features() {
  return (
    <View style={{height:hp(60)}} className="space-y-4">
      <Text style={{fontSize:wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
        <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image source={require("../../assets/gpt.png")} style={{height:hp(4),width:hp(4)}}/>
                <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700">ChatGPT</Text>
            </View>
        </View>
    </View>
  )
}