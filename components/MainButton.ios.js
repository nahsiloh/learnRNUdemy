import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colours from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onClick}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "openSans-bold",
    fontSize: 15,
  },
});

export default MainButton;
