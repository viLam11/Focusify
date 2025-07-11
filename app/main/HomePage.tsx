import DeviceNav from '@/components/Navigation/DeviceNav';
import TaskItem from '@/components/task/TaskItem';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import TimeCountCard from './TimeCountCard';
import { useRouter } from 'expo-router';


export default function HomePage() {
    const router = useRouter();

    return (
        <View className='flex-1 bg-white w-full'>
            <ScrollView className='flex-1 w-11/12 mx-auto'>

            {/* HEADER  */}
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

            <View className="bg-gray-100 rounded-md h-14 w-full flex flex-row items-center">   
                <View className='mx-2'>
                    <IconSymbol name="magnifyingglass" color={"gray"} size={32}  />
                </View>
                <View>
                    <TextInput placeholder='Search' />
                </View>
            </View>

            <View className="flex flex-row mt-4">
                <View className="w-1/2 ">
                   <TouchableOpacity onPress={() => router.push('/main/ToDoDetail')}>  
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
                    <TimeCountCard title='Completed' totalTime='6h 25m' totalTask='2' />
                    <View className="h-4"></View>
                    <TimeCountCard title='Trash' totalTime='6h 25m' totalTask='2' />
                </View>
            </View>


            </ScrollView>

            <View className="h-24">
                <DeviceNav currentView='todolist' />
            </View>
            
            

        </View>
    )
}