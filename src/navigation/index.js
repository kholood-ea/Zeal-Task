import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import signing from "../screens/signing";
import users from "../screens/users";
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={signing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Users"
        component={users}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
