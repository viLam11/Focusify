import DeviceNav from '@/components/navigation/DeviceNav';
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Month from '@/components/calendar/Month';
import CalendarHeader from '@/components/calendar/CalendarHeader';
import PlanList from '@/components/calendar/PlanList';
import { IconSymbol } from '@/components/ui/IconSymbol';

const INITIAL_DATE = '2025-06-02';

const CalendarPlanScreen = () => {
    const [startDate] = useState<string | undefined>(INITIAL_DATE);
    const [endDate, setEndDate] = useState<string | undefined>(INITIAL_DATE);
    const [selectedDate, setSelectedDate] = useState<string | undefined>(INITIAL_DATE);
    const [, setCurrentMonth] = useState(INITIAL_DATE);

    return (
        <View className='flex-1 '>
            <ScrollView className='flex-grow bg-slate-50'>
                <View className=' pt-8'>
                    <CalendarHeader />
                </View>

                <View className='mt-1 rounded-md shadow-slate-50'>
                    <Month startDate={startDate} setStartDate={setSelectedDate} endDate={endDate} setEndDate={setEndDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setCurrentMonth={setCurrentMonth} />
                </View>

                <PlanList />


            </ScrollView>
            <View className='h-24 bg-white'>
                <DeviceNav currentView='calendar' />
            </View>
            <View className='bg-primary-100 w-10 h-10 rounded-full items-center absolute bottom-28 right-5 justify-center shadow-lg'>
                <TouchableOpacity className=''>
                    <IconSymbol name="plus" color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CalendarPlanScreen;
