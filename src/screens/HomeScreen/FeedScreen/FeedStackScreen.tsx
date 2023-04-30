import React from "react";
import MainScreen from "./MainScreen";
import ProductScreen from "./ProductScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }: any) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const FeedScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        presentation: "modal",
        cardOverlayEnabled: true,
        cardStyle: { flex: 1 },
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={() => options}
      />
    </Stack.Navigator>
  );
};

export default FeedScreen;
