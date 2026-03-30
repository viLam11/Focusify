import DeviceNav from '@/components/navigation/DeviceNav';
import TaskItem from '@/components/task/TaskItem';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
export default function ToDoDetail() {
    return (
        <View className='flex-1 w-full'>
            <ScrollView className='flex-1 w-11/12 mx-auto'>
                <View className='flex flex-row mt-4 justify-between items-center px-4 h-20'>
                    <View className='w-1/5'>
                        <IconSymbol name="chevron.left" color={"black"} size={26} />
                    </View>
                    <View className="w-3/5 items-center">
                        <Text className='font-bold text-2xl'>Today </Text>
                    </View>
                    <View className="w-1/5  items-right justify-end">
                        <IconSymbol name="ellipsis" color={"black"} size={26} />
                    </View>
                </View>

                <View className="flex flex-row justify-between items-center mt-4">
                    <View className="w-1/2">
                        <View className="w-11/12 bg-white h-28 rounded-lg items-center flex flex-col shadow-lg shadow-slate-600/10">
                            <View className='h-3/4 flex items-center justify-center '>
                                <Text className='text-primary-400 font-bold text-4xl'>06:25</Text>
                            </View>
                            <Text className='h-1/4 flex items-center justify-center'>Total Pomodoro Hours</Text>
                        </View>
                        <View className="w-11/12 mt-4 bg-white h-28 rounded-lg items-center flex flex-col shadow-lg shadow-slate-600/10">
                            <View className='h-3/4 flex items-center justify-center '>
                                <Text className='text-primary-400 font-bold text-4xl'>2</Text>
                            </View>
                            <Text className='h-1/4 flex items-center justify-center'>Task Remain</Text>
                        </View>
                    </View>
                    <View className="w-1/2 ">
                        <View className="w-11/12 ml-auto bg-white h-28 rounded-lg items-center flex flex-col shadow-xl">
                            <View className='h-3/4 flex items-center justify-center'>
                                <Text className='text-primary-400 font-bold text-4xl'>04:15</Text>
                            </View>
                            <Text className='h-1/4 flex items-center justify-center'>Elapsed Time</Text>
                        </View>
                        <View className="w-11/12 ml-auto mt-4  bg-white h-28 rounded-lg items-center flex flex-col">
                            <View className='h-3/4 flex items-center justify-center'>
                                <Text className='text-primary-400 font-bold text-4xl'>2</Text>
                            </View>
                            <Text className='h-1/4 flex items-center justify-center'>Task completed</Text>
                        </View>
                    </View>
                </View>

                <View >
                    <View className='flex flex-row my-6 h-16 bg-white rounded-lg items-center'>
                        <View className='w-10 flex justify-center ml-4'>
                            <IconSymbol name="plus.circle.fill" color={"black"} size={26} />
                        </View>
                        <TextInput className='TextInput-gray-400 text-xl'>Add a task</TextInput>
                    </View>
                </View>

                {Array.from({ length: 2 }, (_, index) => (
                    <TaskItem key={index} status='on-going' />
                ))}

                <View className="mt-6">
                    <Text className='text-lg text-gray-500'>Completed</Text>
                </View>
                {Array.from({ length: 1}, (_, index) => (
                    <TaskItem key={index} status='done' />
                ))}

                <View className="h-2"></View>
            </ScrollView>

            <View className="h-24">
                <DeviceNav currentView='todolist' />
            </View>



        </View>
    )
}
