import React from "react";
import { Provider } from "react-redux";
import MainStackNavigator from "./src/navigator/appNavigator";
import store from "./src/Redux/configureStore";

const HelloWorldApp = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};

export default HelloWorldApp;
