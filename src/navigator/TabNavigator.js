import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../config/routes";
import Colors from "../theme/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const result = routes.filter((item) => item.isBottomTab === true);
  if (result.length === 0) {
    return null;
  }
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.darkGreen,
        style: { borderTopWidth: 0, backgroundColor: Colors.backgroundColor },
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

export default TabNavigator;
