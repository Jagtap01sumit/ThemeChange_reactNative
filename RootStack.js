import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./screens/Home";
import "react-native-gesture-handler";
import DetailsScreens from "./screens/DetailsScreens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
export default function RootStack() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
