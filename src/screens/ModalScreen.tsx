import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ModalScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Modal 1</Text>
          <Text>Modal 2</Text>
          <Text>Modal 3</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ModalScreen;
