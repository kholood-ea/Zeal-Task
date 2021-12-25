import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../context/user";
import UserCard from "../components/UserCard";
import Btn from "../components/Btn";

import FormFeild from "../components/FormFeild";
import * as hooks from "../hooks";

export default ({ navigation }) => {
  const { locationsCount, users, deleteUser } = hooks.useUserInfo(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> #Locations {locationsCount} </Text>
      <Text style={styles.title}> #Users {users?.length} </Text>
      <ScrollView>
        {users &&
          users.map((user) => <UserCard user={user} onDelete={deleteUser} />)}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  processTitle: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
