import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { IconSymbol } from '../ui/IconSymbol';
import { useEffect, useState } from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import ProgressMiniCircle from './ProgressMiniCircle';
import dayjs from 'dayjs';

const sampleMonthData: Record<string, { percent: number }> = {
    '01-06-2025': {
        percent: 20,
    },
    '02-06-2025': {
        percent: 50,
    }
}

export default function Month({ startDate, endDate, customMarks, selectedDate, setSelectedDate, setCurrentMonth }: any) {
    const today = dayjs().format('DD-MM-YYYY');

    return (
        <View>
            <Calendar
                hideArrows={false}
                hideDayNames={false}
                hideExtraDays={true}
                headerStyle={{
                    backgroundColor: 'white',
                    borderColor: 'black'
                }}
                theme={{
                    dayTextColor: 'black',
                    monthTextColor: 'black',
                    textSectionTitleColor: 'black',
                    textMonthFontWeight: 'bold',
                    textMonthFontSize: 20,
                    textDayHeaderFontWeight: 'bold',
                }}
                renderArrow={(direction: 'left' | 'right') => (
                    <IconSymbol
                        name={direction === 'left' ? 'chevron.left' : 'chevron.right'}
                        size={30}
                        color="black"
                    />
                )}
                

                firstDay={1}  // Monday as the first day of the week
                dayComponent={({ date, state }: any) => {
                    const day = date.day.toString().padStart(2, '0');
                    const month = date.month.toString().padStart(2, '0');
                    const percent = sampleMonthData[`${day}-${month}-${date.year}`]?.percent || 0;
                    const dateString = `${day}-${month}-${date.year}`;
                    return (
                        <View style={{ height: 40, width: 20, alignItems: 'center',  }}>
                            <TouchableOpacity onPress={() => setSelectedDate(date.dateString)} > 
                                <View style={{ height: 32, width: 32 ,  alignItems: 'center', justifyContent: 'center', backgroundColor: today == dateString ? "#abdbe3" : "white", borderRadius: 20 }}  >
                                    <ProgressMiniCircle percent={percent} />
                                    <Text className={`${today == dateString ? "font-bold" : "" }`} >{date.day}</Text>
                                </View> 
                            </TouchableOpacity>
                            
                            {/* hightlight select date */}
                            {date.dateString == selectedDate && (
                                <View className='w-2 h-2 bg-primary-100 rounded-full mt-1' >
                                </View>
                            )} 
                        </View>
                    );
                }}


            />
        </View>
    )
}