import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export default function DeviceNav({ currentView }: { currentView: 'todolist' | 'pomodoro' | 'calendar' | 'streak' | 'setting' }) {
    const router = useRouter();

    return (
        <View className='h-24 w-full bg-white justify-between flex flex-row px-2'>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity className='items-center' onPress={() => router.push('/main')}>
                    <IconSymbol name="list.bullet" color={currentView === 'todolist' ? '#fd6246' : 'gray'} size={30} />
                    <Text className={`text-sm font-semibold mt-2 ${currentView === 'todolist' ? 'text-[#fd6246]' : 'text-gray-500'} `}>To do list</Text>
                </TouchableOpacity>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity className='items-center' onPress={() => router.push('/pomodoro')}>
                    <IconSymbol name="clock.fill" color={currentView === 'pomodoro' ? '#fd6246' : 'gray'} size={30} />
                    <Text className={`text-sm font-semibold mt-2 ${currentView === 'pomodoro' ? 'text-[#fd6246]' : 'text-gray-500'} `}>Pomodoro</Text>
                </TouchableOpacity>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity className='items-center justify-center' onPress={() => router.push('/calendar')} >
                    <IconSymbol name="calendar" color={currentView === 'calendar' ? '#fd6246' : 'gray'} size={30} />
                    <Text className={`text-sm font-semibold mt-2 ${currentView === 'calendar' ? 'text-[#fd6246]' : 'text-gray-500'} `}>
                        Calendar
                    </Text>
                </TouchableOpacity>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <IconSymbol name="chart.bar.fill" color={currentView === 'streak' ? '#fd6246' : 'gray'} size={30} />
                <Text className={`text-sm font-semibold mt-2 ${currentView === 'streak' ? 'text-[#fd6246]' : 'text-gray-500'} `}>Streak</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity onPress={() => router.push('/settings')} className='items-center'>
                    <IconSymbol name="slider.horizontal.3" color={currentView === 'setting' ? '#fd6246' : 'gray'} size={30} />
                    <Text className={`text-sm font-semibold mt-2 ${currentView === 'setting' ? 'text-[#fd6246]' : 'text-gray-500'} `}>Setting</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
