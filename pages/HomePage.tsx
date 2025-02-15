import * as React from 'react';
import { Text, View } from 'react-native';

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <View className='flex-1 bg-black'>
      <Text className='text-white'>HomePage</Text>
    </View>
  );
};

export default HomePage;

