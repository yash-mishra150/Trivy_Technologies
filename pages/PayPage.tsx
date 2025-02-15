import * as React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ImageWithOverlay from '../components/ImageText';
import { faker } from '@faker-js/faker';

interface PayPageProps { }


const PayPage = (props: PayPageProps) => {
  const [freeze, setfreeze] = React.useState(false)

  const testData = React.useMemo(() => {
    const bankName = faker.company.name();
    const bankLogo = `https://source.unsplash.com/featured/?bank,money,finance`;

    return {
      cardno: Array.from({ length: 4 }, () => faker.number.int({ min: 1000, max: 9999 })),
      name: faker.person.fullName(),
      CVV: faker.number.int({ min: 100, max: 999 }),
      expiry: faker.date.future().toLocaleDateString('en-GB', { month: '2-digit', year: '2-digit' }).replace(' ', '/'),
      BankName: bankName,
      BankIcon: bankLogo,
    };
  }, []);

  const HandleFreeze = () => {
    setfreeze(!freeze)
  }

  return (
    <View className='flex-1 bg-black pt-12 p-4'>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content" // Light icons
      />
      <View className=''>
        <Text style={{ fontFamily: "Poppins-Medium" }} className='text-white text-3xl'>Select Payment Mode</Text>
        <Text style={{ fontFamily: "Poppins-Medium" }} className='text-neutral-400 text-lg mt-10'>Choose your preferred payment method to make payment.</Text>
      </View>
      <View className='flex flex-row gap-2 mt-10'>
        <TouchableOpacity className='bg-black rounded-full p-3 px-10 border-l-2 border-r-2 border-t-2 border-slate-300'><Text style={{ fontFamily: "Poppins-Medium" }} className='text-white text-xl self-center'>pay</Text></TouchableOpacity>
        <TouchableOpacity className='bg-black rounded-full p-3 px-10 border-l-2 border-r-2 border-t-2 border-red-600'><Text style={{ fontFamily: "Poppins-Medium" }} className='text-red-600 text-xl self-center'>card</Text></TouchableOpacity>
      </View>
      <View className='mt-14'>
        <Text style={{ fontFamily: "Poppins-Medium" }} className='text-neutral-600 mb-10 text-lg'>YOUR DIGITAL DEBIT CARD</Text>
        <View className='flex flex-row gap-5 items-center'>
          <ImageWithOverlay freeze={freeze} TestData={testData} />
          <View className="flex flex-col gap-3">
            <TouchableOpacity
              onPress={HandleFreeze}
              className={`bg-black flex justify-center items-center border-t-2 border-r-2 border-neutral-600 rounded-full w-20 h-20 transition-all ${freeze ? "border-red-500" : "border-neutral-600"
                }`}
            >
              <FontAwesome name="snowflake-o" size={24} color={freeze ? "red" : "white"} />
            </TouchableOpacity>

            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className={`transition-all ${freeze ? "text-red-600 scale-105" : "text-white scale-100"} text-xl self-center`}
            >
              {freeze ? "Unfreeze" : "Freeze"}
            </Text>
          </View>

        </View>
      </View>
    </View>
  );
};

export default PayPage;
