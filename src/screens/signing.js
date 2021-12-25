import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Btn from "../components/Btn";
import FormFeild from "../components/FormFeild";
import * as hooks from "../hooks";
import { useAuth } from "../context/user";
const processSelection = (title, active, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.processTitle, { color: active ? "blue" : "black" }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default ({ navigation }) => {
  // const {
  //   setUserName,
  //   register,
  //   alert,
  //   setUserEmail,
  //   setUserPassword,
  //   userCredentials,
  // } = hooks.useUserCredentials(navigation);
  const {
    login,
    setUserName,
    register,
    alert,
    setUserEmail,
    setUserPassword,
    userCredentials,
  } = useAuth(navigation);

  const handleSubmit = () => {
    // login().then((res) => console.log(res));
    if (activeProcess == "Login") {
      login().then((res) => {
        if (res == true) {
          navigation.navigate("Users");
        } else Alert.alert("Login Failed");
      });
    } else {
      register().then((res) => {
        if (res == true) {
          navigation.navigate("Users");
        } else Alert.alert("Registeration Failed");
      });
    }
  };
  const [activeProcess, setActiveProcess] = useState("Login");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      {alert && (
        <Text style={[styles.processTitle, { color: "red" }]}>
          Signing is not successful
        </Text>
      )}
      <View style={{ flexDirection: "row" }}>
        {processSelection("Login  ", activeProcess == "Login", () => {
          setActiveProcess("Login");
        })}
        <Text style={[styles.processTitle]}>/</Text>
        {processSelection("  register", activeProcess == "register", () => {
          setActiveProcess("register");
        })}
      </View>
      <FormFeild
        title={"Email"}
        value={userCredentials.email}
        onTextChange={setUserEmail}
      />
      {activeProcess == "register" && (
        <FormFeild
          title={"Name"}
          value={userCredentials.name}
          onTextChange={setUserName}
        />
      )}
      <FormFeild
        title={"Password"}
        value={userCredentials.password}
        onTextChange={setUserPassword}
      />
      <Btn title={"Submit"} onPress={() => handleSubmit()} size={50} />
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
    fontSize: 35,
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
