import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { data } from "../../../../config/data";

const { width } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const MainScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", marginTop: 20 }}
      >
        {data.map((item) => (
          <View key={item.id}>
            <Pressable
              style={{ marginBottom: 14 }}
              onPress={() => navigation.navigate("Product", { item })}
            >
              <SharedElement id={`item.${item.id}.image_url`}>
                <Image
                  style={{
                    borderRadius: 14,
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                  }}
                  source={{ uri: item.image_url }}
                  resizeMode="cover"
                />
              </SharedElement>
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column", paddingLeft: 6 }}>
                    <SharedElement id={`item.${item.id}.title`}>
                      <Text
                        style={{
                          color: "#000",
                          fontSize: 24,
                          fontWeight: "bold",
                          lineHeight: 28,
                        }}
                      >
                        {item.title}
                      </Text>
                    </SharedElement>
                    <SharedElement id={`item.${item.id}.description`}>
                      <Text
                        style={{
                          color: "#000",
                          fontSize: 16,
                          fontWeight: "bold",
                          lineHeight: 18,
                        }}
                      >
                        {item.description}
                      </Text>
                    </SharedElement>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MainScreen;
