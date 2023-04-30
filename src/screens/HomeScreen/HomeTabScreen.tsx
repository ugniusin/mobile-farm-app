import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen/FeedStackScreen";
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

const HomeTabScreen = () => {
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
          tabBarIcon: (props) => FeedIcon({ ...props }),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: (props) => MapIcon({ ...props }),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: (props) => ChatIcon({ ...props }),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
