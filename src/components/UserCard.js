import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default (props) => {
  const { user, onDelete } = props;
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.title}>{user.email}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => onDelete(user.email)}
        >
          <Text style={styles.ButtonText}>delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 5,
    width: wp(85),
    paddingVertical: 15,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: { fontSize: 20, paddingVertical: 5 },
  userEmail: { fontSize: 15, paddingVertical: 5 },
  Button: {
    marginTop: 10,
    borderWidth: 1,
    height: hp(5),
    width: wp(22),
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  ButtonText: {
    fontSize: 18,
  },
});
