import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskDiv from '@/components/task/TaskDiv';

export default function PlanList({date}: {date?: string | undefined}) { 

    return(
        <View>
            <Text className='w-11/12 mx-auto my-2'>
                    Today you have <Text className='text-orange-600 font-semibold'>7 tasks</Text>, <Text className='text-blue-600 font-semibold'>4 categories</Text>
                </Text>

                {Array.from({ length: 6 }, (_, i) => (
                    <TaskDiv
                        key={i}
                        title={`Task ${i + 1}`}
                        status="todo"
                        time_done="10:00"
                    />
                ))}
        </View>
    )
}