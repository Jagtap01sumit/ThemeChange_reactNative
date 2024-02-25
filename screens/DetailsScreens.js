import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function DetailsScreen() {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === "dark" ? "black" : "white";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.detailsText}>Details screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsText: {
    color: "white",
  },
});
