import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import FeedScreen from "./FeedScreen";

const Stack = createSharedElementStackNavigator();

const FeedStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        presentation: "modal",
        cardStyle: { flex: 1 },
      }}
    >
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  );
};

export default FeedStackScreen;
