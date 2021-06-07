import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../config/routes";
import Profile from "../screens/Profile/profileScreen";
import HomePage from "../screens/Homepage/homepageScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  var filterRoutes = routes.sort((comp1, comp2) => comp1.order - comp2.order);

  const TabNavigator = () => {
    const result = filterRoutes.filter((item) => item.isBottomTab === true);
    if (result.length === 0) {
      return null;
    }
    return (
      <Tab.Navigator>
        {result.map((item) => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            key={item.order}
          />
        ))}
      </Tab.Navigator>
    );
  };

  const NavigationRender = filterRoutes.map((item) => {
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
        <Stack.Screen name="Home" component={TabNavigator} />
        {NavigationRender}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
