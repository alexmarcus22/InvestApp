import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./profileStyle";
import CardLink from "../../components/CardLink/cardLinkComponent";
import images from "../../theme/images";
import GoBack from "../../components/GoBack/goBackButton";

const ProfileScreen = ({ dispatch, loading, data, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchData);
  });

  const RenderScreen = () => {
    if (loading) return <Text>Loading..</Text>;
    if (hasErrors) return <p>Unable to display.</p>;
    if (data === undefined) return null;
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <GoBack />
            <Text style={styles.headerText}>Profile</Text>
          </View>
          <View style={styles.profile}>
            <Image
              source={images.profile_nocover}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Jonas Macroni</Text>
            <Text style={styles.job}>Expert</Text>
          </View>
          <View>
            <FlatList
              data={data}
              numColumns={1}
              keyExtractor={(item) => item.title}
              renderItem={(item) => {
                return <CardLink {...item} key={item.index} />;
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };

  return <RenderScreen />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading,
    data: state.data.data.profileData,
    hasErrors: state.data.hasErrors,
  };
};
const connectComponent = connect(mapStateToProps);

export default connectComponent(ProfileScreen);
