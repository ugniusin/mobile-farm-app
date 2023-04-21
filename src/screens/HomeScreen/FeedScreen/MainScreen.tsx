import { Button, Text, View } from "react-native";

const MainScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Main Screen</Text>
      {/*
        <Button title="Go to Product" onPress={() => navigation.push('Product', { paramName: 'Product #1' })} />
        <Button title="Go to Main" onPress={() => navigation.push('Main')} />
      */}
    </View>
  );
};

export default MainScreen;
