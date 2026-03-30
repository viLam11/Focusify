
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

const RANDOM_COLORS = ["#1200ff", "#ff7200", "#00cc43", "#8980ff"]

const TaskItem = ({status} : {status: "done" | "on-going"}) => {
    return (
        <View className='w-full h-32 my-2 rounded-md shadow-sm flex flex-row overflow-hidden justify-center'>
            <View className="w-1 " style={{backgroundColor: RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)]}}></View>
            <View className='flex-1 h-full bg-white justify-center pt-2'>
                <View className='h-full flex flex-col justify-center'>
                    <View className="flex flex-row justify-between items-center space-x-2">
                       
                        {status === "done" ? (
                            <View className='ml-2'> 
                                <IconSymbol name="checkmark.circle.fill" color={"#fc6343"} size={32} />
                            </View>
                            
                        ) : (
                             <View className="ml-2 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <View className=" w-6 h-6 rounded-full bg-white"></View>
                        </View>
                        )}
                        {/* <IconSymbol name="checkmark.circle.fill" color={"#fc6343"} size={32} /> */}
                        <View className='flex-1 items-left'>
                            {status === "done" ? (
                                <Text className='text-gray-400 line-through font-semibold text-xl ml-4'>Design User Interface</Text>
                            ) : (
                                <Text className='font-semibold text-xl ml-4'>Design User Interface </Text>
                            )}
                        </View>
                        <View className="top-0 right-0">
                            <IconSymbol name="chevron.right" color={"black"} size={26} />
                        </View>
                    </View>
                    
                    <View className='flex-1 items-left ml-12 flex flex-row'>
                        <Text className='text-md ml-2' ># Design</Text>
                        <Text className='text-md ml-2'># Work</Text>
                    </View>
                    
                    <View className='flex-1 items-left ml-12 flex flex-row'>
                        <IconSymbol name='clock' color={"orange"}/>
                        <Text className=' text-xl mx-1 '>6</Text>
                        <View className="w-2"></View>
                        <IconSymbol name="sun.and.horizon.circle" color={"#57D85C"} />
                        <Text className=' text-xl mx-1 '>2</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default TaskItem;
