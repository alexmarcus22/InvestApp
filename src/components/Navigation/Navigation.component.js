import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomePage } from "../screens/HomePage";
import AssetsScreen from "../screens/Assets";
import ProfileScreen from "../screens/Profile";
import ProductScreen from "../screens/Product";
import TranzitScreen from "../screens/Tranzit";

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }) => {
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
        name="Product"
        component={ProductScreen}
        options={{
          tabBarLabel: "Product",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="search-web"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-profile"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TranzitScreen}
        options={{
          tabBarLabel: "Transaction",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="transit-transfer"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
