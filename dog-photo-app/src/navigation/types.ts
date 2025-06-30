import { CalendarEvent } from "../screens/Events/types";

export type HomeStackParamList = {
  Home: undefined;
  Favourites: undefined;
};

export type EventsStackParamList = {
  CalendarEvents: undefined;
  ViewEvent: CalendarEvent;
};

export type RootTabParamList = {
  HomeTab: undefined;
  CalendarEventsTab: undefined;
};