import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const Cell = ({ value, isLocked, onChange }) => {
  const [inputValue, setInputValue] = useState(value ? value.toString() : "");

  const handleChange = (text) => {
    const sanitizedText = text.replace(/[^1-9]/g, "").slice(0, 1); // Only allow digits 1-9
    setInputValue(sanitizedText);
    if (!isLocked && onChange) {
      onChange(sanitizedText);
    }
  };

  return (
    <View style={styles.cell}>
      {isLocked ? (
        <Text style={styles.number}>{value}</Text>
      ) : (
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleChange}
          keyboardType="numeric"
        />
      )}
    </View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  cell: {
    width: "10%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
