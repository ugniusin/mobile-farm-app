import React from 'react';
import { View, Text, Button } from 'react-native';

const MapScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Map Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MapScreen;
