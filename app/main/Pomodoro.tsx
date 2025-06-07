import DeviceNav from '@/components/Navigation/DeviceNav';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';


export default function Pomodoro() {
    const screenHeight = Dimensions.get('window').height;

    return (
        <View>
            <Svg height={screenHeight} width="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                <Rect x="0" y="0" width="100%" height={screenHeight} fill="#ff6347">
                </Rect>
                <Circle cx="50%" cy="45%" r="22%" fill="#ffffff" />
                <Circle cx="50%" cy="80%" r="50%" fill="#ffffff" />
                <Circle cx="50%" cy="45%" r="20%" fill="#ff6347" />
                <Circle cx="50%" cy="45%" r="16%" fill="#ffffff" />
            </Svg>

            <View className='flex flex-col min-h-screen'>
                <View className='flex-1'>
                    <View className='h-1/4'>
                        <View className='flex flex-row justify-between items-center mb-4 mt-8 h-20'>
                            <View className='w-1/4 items-center justify-center h-full'>
                                <Image source={require('../../assets/images/logo.png')}
                                    style={{ width: 50, height: 50 }}
                                    resizeMode="contain" />
                            </View>
                            <View className='w-1/2 h-full items-center justify-center '>
                                <Text className='text-3xl font-semibold text-center text-white'>Pomodoro</Text>
                            </View>
                            <View className='w-1/4 h-full items-center justify-center'>
                                <IconSymbol name="bell" size={30} color="white" style={{ textAlign: 'right', marginRight: 10 }} />
                            </View>
                        </View>
                        <View className='bg-white h-16 rounded-md w-10/12 mx-auto'>
                        </View>
                    </View>
                    <View className='mx-auto top-[20%] h-1/2'>
                        <Text className='text-6xl font-bold text-black '>25:00</Text>
                        <Text className='text-lg text-gray-600 mb-8'>Focus on your task</Text>
                    </View>

                    <View className='h-1/4 bg-blue-100 flex flex-col justify-between'>
                        <View className='bg-[#ff6347] h-16 w-6/12 rounded-full mx-auto'>
                            <Text className='text-center text-white text-2xl font-semibold pt-4'>Bắt đầu</Text>
                        </View>

                        <View className='flex flex-row justify-between items-center mx-4 mb-10'>
                            <View>
                                <Text>Strict Mode</Text>
                            </View>
                            <View>
                                <Text>Timer Mode</Text>
                            </View>
                            <View>
                                <Text>White Noise</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <DeviceNav currentView='pomodoro' />
            </View>
        </View>

    )
}   