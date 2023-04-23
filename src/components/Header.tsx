import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu-outline" size={26} style={styles.icon} />
        </TouchableOpacity>
        <TextInput placeholder="Search..." style={styles.searchBar} />
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.getParent().toggleDrawer()}>
          <Ionicons name="notifications" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  icon: {
    color: "#000",
    paddingHorizontal: 10,
  },
  safeArea: {
    backgroundColor: "#fff",
  },
  searchBar: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Header;
