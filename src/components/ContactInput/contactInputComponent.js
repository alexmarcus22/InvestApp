import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./contactInputStyle";

const ContactInput = (props) => {
  const { placeHolder, label, id, type } = props.item;
  const [fullName, setFullName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        id={id}
        name="name"
        type={type}
        onChange={(text) => setFullName(text)}
        defaultValue={fullName}
        style={styles.input}
        placeholder={placeHolder}
      />
    </View>
  );
};

export default ContactInput;
