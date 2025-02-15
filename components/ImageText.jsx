import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const ImageWithOverlay = ({ TestData, freeze }) => {
  const [Hide, setHide] = useState(false);

  return (
    <View className="relative w-[300px] h-[350px] overflow-hidden">
      {freeze ? (
        <Animated.Image
          source={require('../assets/Images/Design_Layer(Freeze).png')}
          className="w-[220px] h-[350px] rounded-2xl"
          resizeMode="cover"
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
        />
      ) : (
        <Animated.Image
          source={require('../assets/Images/Design_Layer.png')}
          className="w-[220px] h-[350px] rounded-2xl"
          resizeMode="cover"
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
        />
      )}

      {!freeze && (
        <Animated.View 
          className="absolute inset-0 p-5 z-20" 
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
        >
          <View className="flex-1 flex-row">
            <View className="flex-1 flex-col gap-2.5 mt-20 ml-4">
              {TestData.cardno.map((item, index) => (
                <Text
                  style={{ fontFamily: 'Orbitron-Medium' }}
                  key={index}
                  className="text-white text-xl"
                >
                  {item}
                </Text>
              ))}
            </View>
            <View className="flex-1 -ml-20 mt-20 flex-col gap-1">
              <Text
                style={{ fontFamily: 'Poppins-Medium' }}
                className="text-neutral-500 text-base"
              >
                expiry
              </Text>
              <Text
                style={{ fontFamily: 'Poppins-Medium' }}
                className="text-white text-xl"
              >
                {TestData.expiry}
              </Text>
              <Text
                style={{ fontFamily: 'Poppins-Medium' }}
                className="text-neutral-500 mt-6 text-base"
              >
                cvv
              </Text>
              <View className="flex flex-row gap-1">
                <Text
                  style={{ fontFamily: 'Poppins-Medium' }}
                  className="text-white text-xl"
                >
                  {Hide ? '***' : TestData.CVV}
                </Text>
                <TouchableOpacity onPress={() => setHide(!Hide)} className="ml-2">
                  {Hide ? (
                    <Entypo name="eye" size={24} color="red" />
                  ) : (
                    <Entypo name="eye-with-line" size={24} color="red" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity className="ml-2 flex-1 flex-row mt-28 gap-1">
            <Entypo name="copy" size={24} color="red" />
            <Text
              style={{ fontFamily: 'Poppins-Medium' }}
              className="text-red-600"
            >
              copy details
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default ImageWithOverlay;
