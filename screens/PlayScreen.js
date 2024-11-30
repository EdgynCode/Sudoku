import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { useState } from "react";
import Board from "../components/Board";

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      {/* Render the Board component */}
      <View style={styles.header}>
        <Board />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Add additional checks or actions here if needed
          alert("Submitted!");
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 140,
    paddingBottom: 40,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 390,
  },
  button: {
    backgroundColor: "#4287f5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PlayScreen;
