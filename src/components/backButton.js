const backButtonHandler = () => {};

const MyComponent = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
    };
  }, [backButtonHandler]);

  return (
    <View>
      <Text></Text>
    </View>
  );
};
