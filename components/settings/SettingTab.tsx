
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { RelativePathString, useRouter } from 'expo-router';

interface SettingTabProps {
    tabName: string;
    tabUrl: RelativePathString;
}


export default function SettingTab( {tabName, tabUrl} : SettingTabProps ) {
    const router = useRouter();

    return (
        <View className="h-10 w-11/12 mx-auto flex flex-row my-4">
            <View className="w-10/12 flex flex-row items-center">
                <TouchableOpacity className="w-10/12 flex flex-row items-center" onPress={() => router.push(tabUrl)}>
                    <IconSymbol name='person.crop.circle' color="black" size={30} />
                    <Text className="font-semibold text-lg ml-4">{tabName}</Text>
                </TouchableOpacity>
            </View>
            <View className='w-2/12 justify-end items-end'>
                <IconSymbol name="chevron.right" color="black" size={30} />
            </View>
        </View>
    );
}
