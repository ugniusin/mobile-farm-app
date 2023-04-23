import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./MainScreen";
import ProductScreen from "./ProductScreen";

const Stack = createStackNavigator();

const FeedScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "card",
        cardStyle: {},
        cardOverlayEnabled: true,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default FeedScreen;
