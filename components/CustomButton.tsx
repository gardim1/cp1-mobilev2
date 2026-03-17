import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function CustomButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3b5bfd",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});