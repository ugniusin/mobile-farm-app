import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen/HomeScreen";
import Header from "../components/Header";

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        header: Header,
      }}>
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
};

export default LeftDrawerScreen;
