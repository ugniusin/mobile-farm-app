import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    color: '#000',
    paddingHorizontal: 10,
  },
});

export default Header;
