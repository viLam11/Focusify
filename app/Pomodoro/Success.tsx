import DeviceNav from '@/components/navigation/DeviceNav';
import React from 'react';
import { View, Text, Image } from 'react-native';

const Success = () => {
    return (
        <View className='flex-1 '>
            <View className='flex-grow'>
                <View className='h-32'>

                </View>
                <View className='w-full h-1/2 items-center justify-center bg-blue-50 '>
                     <Image
                    source={require('../../assets/images/gold-thropy.png')}
                    style={{ width: 360, height: 360, alignSelf: 'center', marginTop: 50 }}
                />
                </View>
               <View className='my-4 flex flex-col space-y-2'>
                    <Text className="text-center font-bold text-4xl">Congratulations !</Text>
                    <Text className="text-center">{"You've completed the task"}</Text>
                    <Text className="text-center">{'"Create a Design Wireframe"'}</Text>
               </View>
            </View>

            <View className='flex flex-row items-center justify-center pb-10'>
                <View className='w-40 h-14 rounded-3xl items-center justify-center bg-[#fde0d6]'>
                    <Text className={`text-[#ff6347] text-xl font-semibold `}>Go back Home</Text>
                </View>
                <View className='w-40 h-14 rounded-3xl bg-[#ff6347] ml-4 items-center justify-center'>
                    <Text className={`text-white text-xl font-semibold`}>New session</Text>
                </View>
            </View>

            <View className='h-24'>
                <DeviceNav currentView='pomodoro' />
            </View>
        </View>
    );
}

export default Success;
