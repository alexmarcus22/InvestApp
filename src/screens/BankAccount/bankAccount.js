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
import images from "../../theme/images";
import ButtonComponent from "../../components/Button/buttonComponent";
import BankCard from "../../components/BankCard/bankCard";
import GoBackButton from "../../components/GoBack/goBackButton";

const BankAccountScreen = () => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <GoBackButton />
        <View style={styles.headerContainer}>
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
            title="Add Account"
            pathToNavigate="Create Account"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BankAccountScreen;
