import React from "react";
import { View, Text, Button } from "react-native";

const ChatScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Chat Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ChatScreen;
