import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "../components/Header";
import HomeTabScreen from "./HomeScreen/HomeTabScreen";

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      screenOptions={{
        drawerPosition: "left",
        header: Header,
      }}
    >
      <LeftDrawer.Screen name="Home" component={HomeTabScreen} />
    </LeftDrawer.Navigator>
  );
};

export default LeftDrawerScreen;
