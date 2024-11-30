import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { generateBoard } from "../utils/generator";

const Board = () => {
  const [board, setBoard] = useState(generateBoard(45)); // Generate board with 45 hints

  const handleCellChange = (row, col, value) => {
    const updatedBoard = board.map((rowValues, rIdx) =>
      rowValues.map((cellValue, cIdx) =>
        rIdx === row && cIdx === col ? parseInt(value, 10) || 0 : cellValue
      )
    );
    setBoard(updatedBoard);
  };

  const isCorrect = () => {
    // Placeholder for Sudoku validation logic
    return board.flat().every((cell) => cell > 0); // Example: Check if all cells are filled
  };

  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) =>
        row.map((cellValue, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cellValue}
            isLocked={cellValue !== 0}
            onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
          />
        ))
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          isCorrect()
            ? Alert.alert("Success", "You solved the puzzle!")
            : Alert.alert("Incomplete", "The puzzle is not complete yet.");
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
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
  button: {
    marginTop: 20,
    backgroundColor: "#4287f5",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Board;
