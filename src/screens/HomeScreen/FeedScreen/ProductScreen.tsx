import React from "react";
import { View, Text, Button } from "react-native";

const ProductScreen = ({ navigation, route }: any) => {
  return (
    <View>
      <Text>Product Screen</Text>
      <Text>Param from Home Screen: {route.params.paramName}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductScreen;
