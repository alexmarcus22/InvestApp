import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../Redux/actions/dataAction";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { styles } from "./contactStyle";
import images from "../../theme/images";
import ContactInput from "../../components/ContactInput/contactInputComponent";
import GoBackButton from "../../components/GoBack/goBackButton";

const ContactScreen = ({ dispatch, loading, data, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchData);
  });

  const RenderScreen = () => {
    if (loading) return <Text>Loading..</Text>;
    if (hasErrors) return <p>Unable to display.</p>;
    if (data === undefined) return null;
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <GoBackButton />
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Contact Info</Text>
          </View>
          <View style={styles.profile}>
            <TouchableOpacity>
              <Image
                source={images.profile_cover}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <FlatList
                data={data}
                numColumns={1}
                renderItem={(item) => {
                  return <ContactInput {...item} />;
                }}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return <RenderScreen />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading,
    data: state.data.data.contactData,
    hasErrors: state.data.hasErrors,
  };
};
const connectComponent = connect(mapStateToProps);

export default connectComponent(ContactScreen);
