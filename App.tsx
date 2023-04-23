import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RightDrawerScreen from "./src/screens/RightDrawerScreen";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RightDrawerScreen />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
