import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "./contactInputStyle";

const ContactInput = (props) => {
  const { placeHolder, label, id, type } = props.item;
  const [fullName, setFullName] = useState("");
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          id={id}
          name="name"
          type={type}
          onChange={(text) => setFullName(text)}
          defaultValue={fullName}
          style={styles.input}
          placeholder={placeHolder}
          disabled={disabled}
        />

        <TouchableOpacity
          onPress={() => {
            if (!disabled) {
              console.log("false");
            }
            setDisabled(!disabled);
          }}
          style={styles.changeTextContainer}
        >
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactInput;
