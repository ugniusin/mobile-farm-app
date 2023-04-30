import React from "react";
import { Text, View, ScrollView, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.5;

const ProductScreen = ({ navigation, route }: any) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SharedElement id={`item.${item.id}.image_url`}>
          <Image
            source={{ uri: item.image_url }}
            style={{
              width: "100%",
              height: ITEM_HEIGHT,
            }}
            resizeMode="cover"
          />
        </SharedElement>
        <MaterialCommunityIcons
          name="close"
          size={28}
          style={{
            position: "absolute",
            top: 40,
            right: 20,
            zIndex: 2,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View
          style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 20 }}
        >
          <View style={{ flexDirection: "column", paddingLeft: 6 }}>
            <SharedElement id={`item.${item.id}.title`}>
              <Text
                style={{
                  color: "#ccc",
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
                  color: "#ccc",
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

        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              lineHeight: 24,
              marginBottom: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              lineHeight: 24,
              marginBottom: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ProductScreen.sharedElements = (route: any) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.image_url`,
      animation: "move",
      resize: "clip",
    },
    {
      id: `item.${item.id}.title`,
      animation: "fade",
      resize: "clip",
    },
    {
      id: `item.${item.id}.description`,
      animation: "fade",
      resize: "clip",
    },
  ];
};

export default ProductScreen;
