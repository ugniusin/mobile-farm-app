import React from "react";
import RightDrawerScreen from "./RightDrawerScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import ProductScreen from "./HomeScreen/FeedScreen/ProductScreen";
import { Animated } from "react-native";
import ModalScreen from "./ModalScreen";

const RootStack = createSharedElementStackNavigator();

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
      }}
    >
      <RootStack.Screen
        name="RightDrawer"
        component={RightDrawerScreen}
        options={({ navigation }) => ({ headerShown: false, navigation })}
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
      <RootStack.Screen
        name="Product"
        component={ProductScreen}
        options={() => ({
          headerBackTitleVisible: false,
          cardStyleInterpolator: ({ current: { progress } }: any) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
