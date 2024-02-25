import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");
  const Navigation = useNavigation();
  const handleToggle = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  const backgroundColor = isDarkTheme ? "#1e1e1e" : "#fafafa";
  const textColor = isDarkTheme ? "#fff" : "#000";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Home</Text>
      <Pressable onPress={handleToggle} style={styles.toggleButton}>
        <Text style={[styles.text, { color: textColor }]}>
          Toggle Theme: {isDarkTheme ? "Light" : "Dark"}
        </Text>
      </Pressable>

      <View>
        <Pressable>
          <Text>hello</Text>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Text>hello</Text>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Text>hello</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => Navigation.navigate("Details")}>
          <Text>hello</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  toggleButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
});
