import { View, Text, SafeAreaView, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
        <View className='space-y-2 mt-10'>
            <Text style={{fontSize:wp(10)}} className="text-center font-bold text-gray-700">
                Jarvis
            </Text>
            <Text style={{fontSize:wp(4)}} className="text-center tracking-wider font-semibold text-gray-700">
                The Future is here, Powered by AI
            </Text>
        </View>
        <View className='flex-row justify-center'>
            <Image source={require('../../assets/bot.png')} style={{height:hp(26),width:wp(77)}}/>
        </View>
        <TouchableOpacity className='bg-slate-600 mx-5 p-4 rounded-2xl mb-10'>
            <Text style={{fontSize:wp(6)}} className="text-center font-bold text-white text-2xl">Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}