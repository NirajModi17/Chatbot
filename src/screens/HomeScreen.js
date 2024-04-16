import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center mt-2">
          <Image source={require("../../assets/bot3.png")} style={{height:hp(25),width:hp(25)}} />
        </View>
      </SafeAreaView>
    </View>
  )
}