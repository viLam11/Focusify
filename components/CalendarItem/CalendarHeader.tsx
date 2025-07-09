import React from 'react';
import { View, Text } from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

export default function CalenderHeader() {
    return (
        <View className='w-11/12 mx-auto flex flex-row justify-center items-center '>
            <View className="w-1/4 items-start justify-center ">
                <Text className='text-primary-500'>LOGO</Text>
            </View>
            <View className="w-1/2 items-center justify-center">
                <Text className='text-2xl font-semibold text-primary-500'>Calendar</Text>
            </View>
            <View className="w-1/4 items-end justify-center">
                <IconSymbol name="ellipsis" color="black" />
            </View>
        </View>
    );
}   