import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  label: string;
}

export default function CustomInput({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});