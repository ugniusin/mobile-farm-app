import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.5;

const ProductScreen = ({ navigation, route }: any) => {
  const { item } = route.params;

  return (
    <View style={styles.productContainer}>
      <ScrollView>
        <SharedElement id={`item.${item.id}.image_url`}>
          <Image
            source={{ uri: item.image_url }}
            style={styles.imageStack}
            //resizeMode="cover"
          />
        </SharedElement>
        <MaterialCommunityIcons
          name="close"
          size={28}
          style={styles.closeIcon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View
          style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 20 }}
        >
          <View style={{ flexDirection: "column", paddingLeft: 6 }}>
            <SharedElement id={`item.${item.id}.title`}>
              <Text style={styles.title}>{item.title}</Text>
            </SharedElement>
            <SharedElement id={`item.${item.id}.description`}>
              <Text style={styles.description}>{item.location}</Text>
            </SharedElement>
          </View>
        </View>

        <View style={styles.content}>
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

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 40,
    zIndex: 2,
  },
  content: {
    margin: 20,
  },
  description: {
    color: "#ccc",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 18,
  },
  imageStack: {
    height: ITEM_HEIGHT,
    width: "100%",
  },
  productContainer: {
    flex: 1,
  },
  title: {
    color: "#ccc",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
  },
});

export default ProductScreen;
