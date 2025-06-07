import DeviceNav from '@/components/Navigation/DeviceNav';
import ProgressBar from '@/components/task/ProgressBar';
import TaskCard from '@/components/task/TaskCard';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { PieChart } from "react-native-gifted-charts";


const data = [
    { value: 70, color: 'white' },
    { value: 30, color: 'lightgray' }
];

type TaskStatus = "done" | "todo" | "on-going";
const taskListData = [{ id: 1, content: "Thiết kế Figma đồ án", category: "Đồ án", status: "done" }, { id: 2, content: "Đồ án: Set up cơ bản FE, BE, DB", category: "Đồ án", status: "on-going" }].map((task, index) => {
    return {
        ...task,
        status: task.status as TaskStatus,
    };
})

const goalProgressData = [
    { id: 1, title: "Đồ án", progress: 70 },
    { id: 2, title: "Môn Toán rời rạc", progress: 50 },
    { id: 3, title: "Môn Lập trình hướng đối tượng", progress: 20 }
]


const HomePage = () => {
    const screenHeight = Dimensions.get('window').height;

    return (
        <ScrollView
            contentContainerStyle={{ minHeight: screenHeight }}
            className="flex-1 mx-4"
        >
            <View className='flex-1 mt-6'>
                <Text>Thứ 2, ngày 15/06/2025</Text>
                <Text className='text-xl font-semibold'>Chào buổi sáng, Ngọc !</Text>

                <View className='h-40 my-4'>
                    <ImageBackground source={require('../../assets/images/homepage_bg.png')}
                        resizeMode="cover" >
                        <View className='w-full h-full flex flex-row justify-between'>
                            <View className='w-1/3 flex items-center justify-center'>
                                <PieChart
                                    data={data}
                                    radius={60}
                                    innerRadius={40}
                                    donut
                                    strokeWidth={0}
                                    innerCircleBorderWidth={1}
                                    innerCircleColor={'#ff751c'}
                                    centerLabelComponent={() => {
                                        return <Text
                                            style={{
                                                fontSize: 24,
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>70%</Text>;
                                    }}
                                />
                            </View>
                            <View className='w-1/2 items-center justify-center'>
                                <Text className='text-xl text-white'>Bạn đã hoàn thành 70% công việc </Text>
                            </View>
                        </View>
                    </ImageBackground>

                    {/* TO DO LIST    */}
                    <View className='mt-4'>
                        {/* Task title */}
                        <View className='mb-2'>
                            <Text className='text-xl font-semibold mt-4'>Tasks hôm nay</Text>
                            <View className='absolute right-0 top-0 mr-4 mt-2'>
                                <View>
                                    <IconSymbol name="plus.circle.fill" color={"#55dd8b"} size={26} />
                                </View>
                            </View>
                        </View>
                        {/* Task list */}
                        {taskListData.map((task) => (
                            <TaskCard key={task.id} status={task.status} />
                        ))}
                    </View>

                    {/* GENERAL GOAL   */}
                    <View className='mt-4'>
                        <View>
                            <Text className='text-xl font-bold'>Mục tiêu</Text>
                            <View className='absolute right-0 top-0'>
                                <IconSymbol name="plus.circle.fill" color={"black"} size={26} />  
                            </View>
                        </View>
                        <View>
                            {goalProgressData.map((goal) => (
                                <ProgressBar key={goal.id} progress={goal.progress} title={goal.title} />
                            ))}
                        </View>
                    </View>
                </View>
            </View>
            <DeviceNav currentView='todolist' />
        </ScrollView>
    );
}


export default HomePage;
