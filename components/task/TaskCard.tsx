import React from 'react';
import { View, Text } from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

export default function TaskCard({status} : {status: "done" | "todo"| "on-going"}) {
  return (
    <View className={`${status == "done" ? 'bg-green-100': 'bg-white'}  rounded-lg shadow-md p-4 mb-4`}>
      <View className='flex flex-row ' >
        <View className='w-10/12'>
             <Text className={`${status == "done" ? 'text-green-500' : 'text-black'} text-lg font-semibold`}>Thực hiện đồ án</Text>
        </View>
        
          
          <View className='w-16 right-0 flex flex-row items-center'> 
            <View>
             {status == "done" ? 
              <IconSymbol name="checkmark.rectangle.fill" color={"#55dd8b"} size={26} />
              : <IconSymbol name="rectangle" color={"black"} size={26} />}
            </View>
            <View>
              <IconSymbol name="ellipsis" color={"black"} size={26} />
            </View>
          </View>
      </View>
     
      
    </View>
  );
}   