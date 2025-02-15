import * as React from 'react';
import { Text, View } from 'react-native';

interface GiniePageProps {}

const GiniePage = (props: GiniePageProps) => {
  return (
    <View className='flex-1 bg-black' >
      <Text className='text-white'>GiniePage</Text>
    </View>
  );
};

export default GiniePage;

