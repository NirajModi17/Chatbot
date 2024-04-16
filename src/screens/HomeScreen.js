import { View, Text, SafeAreaView, Image } from 'react-native'
import React,{useState} from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Features from '../components/features';

export default function HomeScreen() {

  const [messages,setMessages] = useState([]);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        
        <View className="flex-row justify-center mt-2">
          <Image source={require("../../assets/bot3.png")} style={{height:hp(20),width:hp(20)}} />
        </View>

        {
          messages.length>0?(
            <View>

            </View>
          ):(
            <Features/>
          )
        }

      </SafeAreaView>
    </View>
  )
}