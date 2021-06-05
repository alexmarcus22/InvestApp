import React from "react";
import { bankData } from "../../theme/mockData";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { styles } from "./bankAccountStyle";
import FontsLoading from "../../theme/fonts";
import images from "../../theme/images";
import ButtonComponent from "../../components/Button/buttonComponent";
import BankCard from "../../components/BankCard/bankCard";
import AppLoading from "expo-app-loading";

const BankAccountScreen = () => {
  const { dataLoaded, fetchFonts, setDataLoaded } = FontsLoading();
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <ImageBackground
              style={styles.close}
              source={images.back}
              resizeMode="contain"
              alignSelf="center"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bank of account info</Text>
        </View>
        <FlatList
          data={bankData}
          renderItem={(item) => {
            return <BankCard {...item} />;
          }}
        />
        <View>
          <ButtonComponent
            title="Create Account"
            pathToNavigate="Create Account"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BankAccountScreen;
