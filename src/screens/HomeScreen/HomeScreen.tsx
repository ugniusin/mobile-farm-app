import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen/FeedScreen";
import MapScreen from "./MapScreen";
import ChatScreen from "./ChatScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const FeedIcon = ({ color, size }: any) => (
  <Ionicons name="home" size={size} style={{ color: color }} />
);

const MapIcon = ({ color, size }: any) => (
  <Ionicons name="map-outline" size={size} style={{ color: color }} />
);

const ChatIcon = ({ color, size }: any) => (
  <Ionicons name="chatbox-outline" size={size} style={{ color: color }} />
);

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, size }) => FeedIcon({ color, size }),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => MapIcon({ color, size }),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => ChatIcon({ color, size }),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
