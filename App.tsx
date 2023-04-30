import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStackScreen from "./src/screens/RootStackScreen";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
