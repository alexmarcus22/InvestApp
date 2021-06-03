import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SignUpScreen from "../screens/SignUpScreen";
import CreateAccount from "../screens/CreateAccount";
import HomePage from "../screens/HomePage";
import Profile from "../screens/Profile";
import Assets from "../screens/Assets";
import Notification from "../screens/Notification";
import BankAccountScreen from "../screens/BankAccount";
import ContactScreen from "../screens/Notification";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Sign Up" component={BankAccountScreen} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
