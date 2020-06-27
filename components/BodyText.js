import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    marginVertical: 10,
    fontFamily: "openSans-regular",
  },
});

export default BodyText;
