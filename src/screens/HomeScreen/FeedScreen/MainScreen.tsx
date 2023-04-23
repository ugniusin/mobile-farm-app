import React from "react";
import { Button, Text, View } from "react-native";

const MainScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Go to Product #1"
        onPress={() =>
          navigation.navigate("Product", { paramName: "Product #1" })
        }
      />
      <Button
        title="Go to Product #2"
        onPress={() =>
          navigation.navigate("Product", { paramName: "Product #2" })
        }
      />
    </View>
  );
};

export default MainScreen;
