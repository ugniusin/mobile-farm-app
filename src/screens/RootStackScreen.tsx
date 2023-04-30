import React from "react";
import RightDrawerScreen from "./RightDrawerScreen";
import ModalScreen from "./ModalScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from "react-native";

const RootStack = createStackNavigator();

const forSlide = ({ current, next, inverted, layouts: { screen } }: any) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.height, // Focused, but offscreen in the beginning
                0, // Fully focused
                0, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "pop",
      }}
    >
      <RootStack.Screen
        name="RightDrawer"
        component={RightDrawerScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MyModal"
        component={ModalScreen}
        options={{
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: forSlide,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
