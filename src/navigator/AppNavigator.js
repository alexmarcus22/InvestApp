import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "../config/routes";
import TabNavigator from "./TabNavigator";

const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  const NavigationRender = routes.map((item) => {
    return (
      <Stack.Screen
        name={item.name}
        component={item.component}
        key={item.order}
      />
    );
  });

  if (routes.length === 0) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {NavigationRender}
        <Stack.Screen name="Homepage" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
