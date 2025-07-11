import DeviceNav from '@/components/Navigation/DeviceNav';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { RelativePathString, useRouter } from 'expo-router';
import SettingTab from './SettingTab';


export default function Setting() {
    const router = useRouter();

    return (
        <View className='flex-1 min-h-screen'>
            <ScrollView className='flex-grow mt-10'>
                <View className='flex flex-row items-center'>
                    <View className='w-2/6'>
                    </View>
                    <View className="w-2/6 items-center justify-center">
                        <Text className='font-bold text-xl'>Settings</Text>
                    </View>
                    <View className="w-2/6"></View>
                </View>

                <View className='bg-[#ff6347] h-20 w-11/12 mx-auto rounded-md my-2'></View>

                <View>
                    <View className="h-10 w-11/12 mx-auto flex flex-row my-4">
                        <View className="w-10/12 flex flex-row items-center">
                            <TouchableOpacity className="w-10/12 flex flex-row items-center" onPress={() => router.push('/Pomodoro/Success')}>
                                <IconSymbol name='person.crop.circle' color="black" size={30} />
                                <Text className="font-semibold text-lg ml-4">Complete</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='w-2/12 justify-end items-end'>
                            <IconSymbol name="chevron.right" color="black" size={30} />
                        </View>
                    </View>
                     <SettingTab tabName='To do Date' tabUrl={'/main/ToDoDetail'as RelativePathString}/>

                    {/* <View className="h-10 w-11/12 mx-auto flex flex-row my-4">
                        <View className="w-10/12 flex flex-row items-center">
                            <IconSymbol name='person.crop.circle' color="black" size={30} />
                            <Text className="font-semibold text-lg ml-4">My Profile</Text>
                        </View>
                        <View className='w-2/12 justify-end items-end'>
                            <IconSymbol name="chevron.right" color="black" size={30} />
                        </View>
                    </View> */}
{/* 
                    <View className="h-10 w-11/12 mx-auto flex flex-row my-4">
                        <View className="w-10/12 flex flex-row items-center">
                            <IconSymbol name='person.crop.circle' color="black" size={30} />
                            <Text className="font-semibold text-lg ml-4">My Profile</Text>
                        </View>
                        <View className='w-2/12 justify-end items-end'>
                            <IconSymbol name="chevron.right" color="black" size={30} />
                        </View>
                    </View>
                    <View className="h-10 w-11/12 mx-auto flex flex-row my-4">
                        <View className="w-10/12 flex flex-row items-center">
                            <IconSymbol name='person.crop.circle' color="black" size={30} />
                            <Text className="font-semibold text-lg ml-4">My Profile</Text>
                        </View>
                        <View className='w-2/12 justify-end items-end'>
                            <IconSymbol name="chevron.right" color="black" size={30} />
                        </View>
                    </View>
                    <View className="h-10 w-11/12 mx-auto flex flex-row my-4">
                        <View className="w-10/12 flex flex-row items-center">
                            <IconSymbol name='person.crop.circle' color="black" size={30} />
                            <Text className="font-semibold text-lg ml-4">My Profile</Text>
                        </View>
                        <View className='w-2/12 justify-end items-end'>
                            <IconSymbol name="chevron.right" color="black" size={30} />
                        </View> 
                    </View> */}

                </View>

            </ScrollView>
            <View className='h-24 bottom-0'>
                <DeviceNav currentView='setting' />
            </View>
        </View>

    )
}