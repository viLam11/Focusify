import DeviceNav from '@/components/navigation/DeviceNav';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import TimeCountCard from '@/components/home/TimeCountCard';
import { useRouter } from 'expo-router';
import {Flag} from 'lucide-react-native';

export default function HomePage() {
    const router = useRouter();
    const [isOpenModal, setIsOpendModal] = useState<boolean>(false);

    return (
        <View className={`flex-1 w-full ${isOpenModal ? 'bg-gray-300' : "bg-white"}`}>
            <ScrollView className='flex-1 w-11/12 mx-auto'>
                <View className="flex flex-row mt-6 items-center h-20">
                    <View className="w-1/5 items-left">
                        <Image source={require('@/assets/images/logo.png')} style={{ width: 40, height: 40 }} />
                    </View>
                    <View className="flex-1 items-center justify-center">
                        <Text className="font-bold text-2xl">Focusify</Text>
                    </View>
                    <View className="w-1/5 flex-row items-right justify-end">
                        <IconSymbol name="ellipsis" color={"black"} size={26} />
                    </View>
                </View>

            <View className="rounded-2xl p-2 h-20 w-full flex flex-row items-center" style={{
                backgroundColor: '#f0f0f0',
            }}>
                <View className='mx-2'>
                    <IconSymbol name="magnifyingglass" color={"gray"} size={32}  />
                </View>
                <View className=''>
                    <TextInput placeholder='Search' />
                </View>
            </View>

            <View className="flex flex-row mt-4">
                <View className="w-1/2 ">
                   <TouchableOpacity onPress={() => router.push('/main/todo-detail')}>
                        <TimeCountCard title='Today' totalTime='6h 25m' totalTask='2' />
                    </TouchableOpacity>
                    <View className="h-4"></View>
                    <TimeCountCard title='Week' totalTime='6h 25m' totalTask='2' />
                    <View className="h-4"></View>
                    <TimeCountCard title='Completed' totalTime='6h 25m' totalTask='2' />
                </View>
                <View className="w-1/2">
                    <TimeCountCard title='Tomorrow' totalTime='6h 25m' totalTask='2' />
                    <View className="h-4"></View>
                    <TimeCountCard title='Plan' totalTime='6h 25m' totalTask='2' />
                    <View className="h-4"></View>
                    <TimeCountCard title='Trash' totalTime='6h 25m' totalTask='2' />
                </View>
                <View className="w-1/2">
                    <View className='h-10 border boder-green'>
                        <Text>Completed {'(6)'}</Text>
                    </View>
                    <View className="h-4"></View>
                    <View className='h-10 border boder-green'>
                        <Text>Completed {'(6)'}</Text>
                    </View>
                </View>
            </View>
            </ScrollView>

            {isOpenModal && <View className='justify-center absolute bottom-0 z-10 w-full border border-t-gray-400 rounded-2xl bg-white'>
                <View className='w-11/12 mx-auto h-11/12 mt-10'>
                    <View className="flex flex-col justify-left items-left space-y-px w-full">
                        <Text className='mr-4 font-semibold text-xl'>Task name</Text>
                        <TextInput multiline={true} className=' border border-gray-400 rounded-md w-full' />
                    </View>
                    <View className="space-y-px w-full mt-4">
                        <Text className='font-semibold text-xl'>Task description</Text>
                        <TextInput multiline={true} className='rounded-lg mt-2 border border-gray-400' />
                    </View>
                    <View className="flex flex-row mt-4">
                        <IconSymbol name="sun.max" color='green' />
                        <IconSymbol name='flag' color='black' />
                        <Flag color='black' size={10} />
                    </View>

                    <View className="flex flex-row justify-evenly mt-10 mb-10">
                        <View className='w-40 h-12 rounded-full bg-[#fff3f0] items-center justify-center'>
                            <TouchableOpacity>
                                <Text className='text-[#fc6545] font-bold'>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                        <View className='w-40 h-12 rounded-full bg-[#fc6545]  items-center justify-center'>
                            <TouchableOpacity>
                                <Text className='text-[#fff3f0] font-bold'>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>}
            <View className={`absolute bottom-28 right-10 ${isOpenModal ? "hidden" : ""}`}>
                <TouchableOpacity onPress={() => {setIsOpendModal(true)}}>
                    <View className="bg-orange">
                        <IconSymbol name='plus.circle.fill' color="orange" size={40} />
                    </View>
                </TouchableOpacity>
            </View>

            <View className={`h-24 ${isOpenModal ? "hidden" : ""}`}>
                <DeviceNav currentView='todolist' />
            </View>
        </View>
    )
}
