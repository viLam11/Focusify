import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react';

export default function ProgressBar({ progress, title  }: { progress: number, title: string }) {
  const [barWidth, setBarWidth] = useState(0); 

  return (
    <View className="w-full h-10 my-2 mx-4 rounded-md">
      <Text className='text-md font-semibold mb-2'>{title}</Text>
        <View className='flex flex-row rounded-md h-4 bg-gray-200 ' 
            onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                console.log("Width of the progress bar:", width);
                console.log("Progress value:", progress);
                setBarWidth(width * (progress / 100));
            }}   
        >
            <View style={{
                width: barWidth,
                backgroundColor: '#fd6246',
                borderRadius: 4,
            }}></View>
        </View>
    </View>
  );
}   