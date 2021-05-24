import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomePage } from "../screens/HomePage";
import AssetsScreen from "../screens/Assets";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home Stack"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Assets"
        component={AssetsScreen}
        options={{
          tabBarLabel: "Assets",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="feature-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    flexDirection: "row",
    zIndex: 1000,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F6F6F9",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    paddingBottom: 12,
  },
  active: {
    color: "#31A063",
  },
  img: {
    height: 24,
    width: 24,
    zIndex: 1001,
  },
  link: {
    color: "#999999",
  },
});

export default Navigation;
