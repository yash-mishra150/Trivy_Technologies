import * as React from 'react';
import { Text, View } from 'react-native';

interface GiniePageProps {}

const GiniePage = (props: GiniePageProps) => {
  return (
    <View className='flex-1 bg-black pt-12 p-4' >
      <Text style={{ fontFamily: "Poppins-Medium" }} className='text-white text-3xl'>GiniePage</Text>
    </View>
  );
};

export default GiniePage;

