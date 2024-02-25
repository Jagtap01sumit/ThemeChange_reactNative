import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "./context/ThemeContext";
import RootStack from "./RootStack";

export default function App() {
  const [theme, setTheme] = useState({ mode: "dark" });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RootStack />
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
