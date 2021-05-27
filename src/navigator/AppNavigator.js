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
import Contact from "../screens/Contact";
import Notification from "../screens/Notification";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "Profile":
      return "Profile";
  }
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator init>
      <Tab.Screen name="HomePage" component={Assets} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        /> */}
        <Stack.Screen name="Sign Up" component={Notification} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
        <Stack.Screen name="Home Page" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
