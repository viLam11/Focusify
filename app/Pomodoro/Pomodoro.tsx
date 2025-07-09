import DeviceNav from '@/components/Navigation/DeviceNav';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

const taskList = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: false },
    { id: 5, title: 'Task 5', completed: false },
]

export default function Pomodoro() {
    const screenHeight = Dimensions.get('window').height;
        const router = useRouter();

    const [choseTaskMode, setChoseTaskMode] = useState(false);
    const [currentTask, setCurrentTask] = useState(taskList[0]);
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
                        
                        {/* select task  */}
                        <View className={`bg-white h-16  ${choseTaskMode ? 'rounded-t-md' : 'rounded-md'} w-10/12 mx-auto flex flex-row items-center justify-between`}>
                            <View className='h-full justify-center flex-grow '>
                                <View className='h-full w-full rounded-full items-center flex flex-row'>
                                    <View className='h-6 w-6 rounded-full border-red-500 border-2 ml-4'></View>
                                    <Text className='ml-4'>{currentTask.title}</Text>
                                </View>
                            </View>
                            <View className='h-full w-10 justify-center '>
                                <TouchableOpacity onPress={() => {
                                    setChoseTaskMode((oldMode) => !oldMode);
                                    console.log('choseTaskMode', choseTaskMode)
                                }} >
                                <IconSymbol name='chevron.compact.down' color="black" />
                                </TouchableOpacity> 
                            </View>
                        </View>
                        <View className={`bg-white w-10/12 mx-auto ${choseTaskMode ? '' : 'hidden'}`}>
                            {taskList.map((task) => (
                                <View className={`my-1`} key={task.id}>
                                    <TouchableOpacity onPress={() => setCurrentTask(task)}>
                                        <Text className='ml-4'>{task.title} </Text>
                                    </TouchableOpacity>
                                   
                                </View>
                            ))} 
                        </View>



                    </View>
                    <View className='mx-auto top-[20%] h-1/2'>
                        <Text className='text-6xl font-bold text-black '>25:00</Text>
                        <Text className='text-lg text-gray-600 mb-8'>Focus on your task</Text>
                    </View>

                    <View className='h-1/4 flex flex-col justify-between'>
                        <View className='bg-[#ff6347] h-16 w-6/12 rounded-full mx-auto'>
                            <Text className='text-center text-white text-2xl font-semibold pt-4'>Bắt đầu</Text>
                        </View>

                        <View className='flex flex-row justify-between items-center mx-4 mb-10'>
                            <View className='flex flex-col items-center space-y-2'>
                                <IconSymbol name="exclamationmark.octagon"  color="black" size={40}/>
                                <Text>Strict Mode</Text>
                            </View>
                            <View className='flex flex-col items-center'>   
                                <IconSymbol name="hourglass.bottomhalf.fill" color="black" size={40} />    
                                <Text>Timer Mode</Text>
                            </View>
                            <View className='flex flex-col items-center'>   
                                <IconSymbol name='music.note' color="black" size={40}  />
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