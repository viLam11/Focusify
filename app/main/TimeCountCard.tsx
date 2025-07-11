
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SFSymbol } from 'expo-symbols';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type TimeCountCardProps = {
    title: 'Today' | 'Tomorrow' | 'Week' | 'Plan' | 'Completed' | 'Trash';
    totalTime: string;
    totalTask: string;
};

const INFO = {
    'Today': {
        borderColor: '#74c06d',
        icon: 'sun.max' as SFSymbol,
        iconColor: '#74c06d'
    },
    'Tomorrow': {
        borderColor: '#42a9f1',
        icon: 'sun.haze' as SFSymbol,
        iconColor: '#42a9f1'
    },
    'Week': {
        borderColor: '#ffab4a',
        icon: 'calendar' as SFSymbol,
        iconColor: '#ffab4a'
    },
    'Plan': {
        borderColor: '#a943b7',
        icon: 'doc.plaintext' as SFSymbol,
        iconColor: '#a943b7'
    },
    'Completed': {
        borderColor: '#a1d081',
        icon: 'checkmark.circle.fill' as SFSymbol,
        iconColor: '#a1d081'
    },
    'Trash': {
        borderColor: '#f95847',
        icon: 'trash' as SFSymbol,
        iconColor: '#f95847'
    }
}

export default function TimeCountCard({ title, totalTime, totalTask }: TimeCountCardProps) {
    // useEffect(() => {
    //     const info = INFO[title];  
    //         console.log(info.icon);
    //         console.log(INFO[title]);
    // }, [title]);

    return (
        <View className='w-full px-2 '>
            <View className=' border-2 rounded-lg bg-white pl-4 py-2 ' style={{ borderColor: INFO[title].borderColor }}>
                <View className="flex flex-row">
                    <IconSymbol name={INFO[title].icon} color={INFO[title].iconColor} />
                    <Text className='text-lg font-semibold ml-2'>{title}</Text>
                </View>
                {title !== "Completed" && title !== "Trash" && <View className='mt-2'>
                    <Text className='text-2xl font-bold '>{totalTime} ({totalTask}) </Text>
                </View>

                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

