import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default ({ title, onPress, size }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: wp(size) }]}
      onPress={onPress}
    >
      <Text>{title} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
    justifyContent: "center",
    paddingVertical: 15,
  },
  title: { fontSize: 20, paddingVertical: 5 },
});
