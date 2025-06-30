import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { Calendar } from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";

import type { CalendarEvent } from './types';
import { useFavourites } from "../../hooks/useFavourites";

import FavouritesScreen from "../Favourites";
import CustomDropdown from "../../components/dropdown/CustomDropdown";

const CalendarEventsScreen = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [savedEvent, setSavedEvent] = useState<CalendarEvent | null>(null);
  const [open, setOpen] = useState(false);
  const { loading, favourites } = useFavourites();

  const createEvent = () => {
    const newEvent: CalendarEvent = {
      date: selectedDate,
      title: eventName,
      description: eventDescription,
    };

    setEvents(prev => [...prev, newEvent]);
    setEventName('');
    setEventDescription('');
  };

  const getEventForDay = (date: string) => {
    return events.find(event => event.date === date) || null;
  };

  useEffect(() => {
    if (selectedDate) {
      const event = getEventForDay(selectedDate);
      setSavedEvent(event);
    }
  }, [selectedDate, events]);

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View className="bg-white p-2">
          <Calendar
            onDayPress={(day) => {
              const selectedDate = day.dateString;
              setSelectedDate(selectedDate);
            }}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, dotColor: 'blue' },
            }}
            style={{ marginTop: 10 }}
          />

          {savedEvent ? (
            <View className="p-4 rounded mt-5">
              <TouchableOpacity
                className="bg-blue-400 p-4 rounded-full mt-4"
                onPress={() => {
                  navigation.navigate('ViewEvent', { event: savedEvent });
                }}
              >
                <Text className="text-white text-lg text-center">View {savedEvent?.title} Details</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="p-4 rounded mt-5">
              <Text className="text-lg font-bold">Create Event</Text>
              <TextInput
                placeholder="Event Title"
                className="border p-2 rounded mb-2"
              value={eventName}
              onChangeText={(text) => setEventName(text)}
              style={{ marginBottom: 20, marginTop: 10 }}
            />
            <TextInput
              placeholder="Event Description"
              className="border p-2 rounded mb-5"
              value={eventDescription}
              onChangeText={setEventDescription}
              multiline
              style={{ height: 100, textAlignVertical: 'top' }}
            />
            <TouchableOpacity
              className="bg-blue-500 p-4 rounded-full mt-4"
              onPress={createEvent}
            >
              <Text className="text-white text-lg text-center">Create Event</Text>
            </TouchableOpacity>
          </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CalendarEventsScreen;