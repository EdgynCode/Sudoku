import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
  Alert,
  TextInput,
} from "react-native";
import { useState } from "react";

const cellArray = [];
const numberArray = [];
const answerArray = [];

for (let i = 0; i < 9; i++) {
  cellArray[i] = [];
}

for (let i = 0; i < 9; i++) {
  numberArray[i] = [];
}

const showHints = (hintsCount) => {
  for (let i = 0; i < 9; i++) {
    answerArray[i] = [];
    for (let j = 0; j < 9; j++) {
      answerArray[i][j] = numberArray[i][j];
    }
  }

  for (let i = 0; i < hintsCount; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);

    answerArray[row][col] = 0;
    cellArray[row][col] = (
      <Cell isLocked={false} value={answerArray[row][col]} x={row} y={col} />
    );
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cellArray[i][j] = (
        <Cell isLocked={true} value={answerArray[i][j]} x={i} y={j} />
      );
    }
  }
};

const Board = () => {
  findValueForNextCell(0, -1);
  showHints(45);

  return <View style={styles.board}>{cellArray}</View>;
};

const Cell = ({ value, isLocked, x, y }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
    answerArray[x][y] = text;
    alert(`answerArray ${x}, ${y} = ${text}`);
  };

  const isInputCorrect = () => {
    return inputValue === value.toString();
  };

  if (value !== 0) {
    return (
      <TouchableOpacity disabled={isLocked} style={styles.cell} x={x} y={y}>
        <Text style={styles.number}>{value}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity disabled={isLocked} style={styles.cell} x={x} y={y}>
        <TextInput
          style={[
            styles.number,
            isInputCorrect() ? styles.correct : styles.incorrect,
          ]}
          value={inputValue}
          onChangeText={handleInputChange}
          keyboardType="numeric"
          maxLength={1}
        />
      </TouchableOpacity>
    );
  }
};

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Board />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          check
            ? alert("You have solved the puzzle")
            : alert("There is still incorrect cells...");
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
  cell: {
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    textAlign: "center",
  },
  board: {
    width: 350,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  number: {
    fontSize: 20,
    color: "black",
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
  correct: {
    backgroundColor: "#A5D049",
    fontSize: 20,
    color: "black",
  },
  incorrect: {
    backgroundColor: "#EC7B67",
    fontSize: 20,
    color: "black",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PlayScreen;
