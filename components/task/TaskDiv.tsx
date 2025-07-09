import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

export default function TaskDiv({title, status, time_done} : {title: string, status: "done" | "todo" | "on-going", time_done?: string}) {
  return (
    <View className='h-16 w-11/12 mx-auto bg-white rounded-md flex flex-row border-l-4 border-orange-600 my-2 '>
        <View className='w-16 items-center justify-center'>
            <IconSymbol name='checkmark.circle.fill' color="#12d18e" size={32} />
        </View>
        <View className='items-left justify-center flex flex-col'>
            <Text className='text-lg font-semibold text-gray-950'>{title}</Text>
            <View className='flex flex-row items-center space-x-4'>
                <IconSymbol name="clock" color="gray" size={18} />
                <Text className='text-sm text-gray-700 ml-1'>{time_done}</Text>
            </View>
        </View>
    </View>
  );
}