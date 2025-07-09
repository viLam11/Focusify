import DeviceNav from '@/components/Navigation/DeviceNav';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Month from '@/components/CalendarItem/Month';
import CalenderHeader from '@/components/CalendarItem/CalendarHeader';
import PlanList from '@/components/CalendarItem/PlanList';
import { IconSymbol } from '@/components/ui/IconSymbol';

const INITIAL_DATE = '2025-06-02';

const CalendarPlan = () => {
    const [startDate, setStartDate] = useState<string | undefined>(INITIAL_DATE);
    const [endDate, setEndDate] = useState<string | undefined>(INITIAL_DATE);
    const [selectedDate, setSelectedDate] = useState<string | undefined>(INITIAL_DATE);
    const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

    return (
        <View className='flex-1 '>
            <ScrollView className='flex-grow bg-slate-50'>
                <View className=' pt-8'>
                    <CalenderHeader />
                </View>

                {/* calender View   */}
                <View className='mt-1 rounded-md shadow-slate-50'>
                    <Month startDate={startDate} setStartDate={setSelectedDate} endDate={endDate} setEndDate={setEndDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setCurrentMonth={setCurrentMonth} />
                </View>

                {/* Taks list of a day  */}
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

const styles = StyleSheet.create({})

export default CalendarPlan;
