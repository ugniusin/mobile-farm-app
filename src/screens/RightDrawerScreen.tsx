import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftDrawerScreen from "./LeftDrawerScreen";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RightDrawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Button
        title="Go somewhere"
        onPress={() => navigation.navigate("MyModal")}
      />
    </SafeAreaView>
  );
};

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      drawerContent={CustomDrawerContent}
    >
      <RightDrawer.Screen name="LeftDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};

export default RightDrawerScreen;
