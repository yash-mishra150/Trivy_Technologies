import * as React from 'react';
import { Text, View } from 'react-native';

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <View className='flex-1 bg-black pt-12 p-4'>
      <Text style={{ fontFamily: "Poppins-Medium" }} className='text-white text-3xl'>Home Page</Text>
    </View>
  );
};

export default HomePage;

