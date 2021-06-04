import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUpScreen from "../screens/SignUpScreen";

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
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
