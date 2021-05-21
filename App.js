import React from "react";
import SignUpScreen from "./src/screens/SignUpScreen";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "./src/screens/CreateAccount";
import Homepage from "./src/screens/Homepage";

const Stack = createStackNavigator();

const HelloWorldApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Create Account" component={CreateAccount} />
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingLeft: 34,
    paddingRight: 34,
  },
});

export default HelloWorldApp;
