import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../config/routes";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#31A063",
          style: { borderTopWidth: 0, backgroundColor: "#F6F6F9" },
        }}
      >
        {result.map((item) => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            key={item.order}
            options={{
              tabBarLabel: item.name,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name={item.icon}
                  color={color}
                  size={size}
                />
              ),
            }}
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
        {NavigationRender}
        <Stack.Screen name="Homepage" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
