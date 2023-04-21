import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftDrawerScreen from "./LeftDrawerScreen";

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};

export default RightDrawerScreen;
