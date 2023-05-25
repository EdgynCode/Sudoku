import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text, Alert, TextInput } from 'react-native';
import { useState } from 'react';

const cellArray = []
const numberArray = []

for (let i = 0; i < 9; i++) {
  cellArray[i] = []
}

for (let i = 0; i < 9; i++) {
  numberArray[i] = []
}

const isValidNumber = (value, x, y) => {
  for (let i = 0; i < 9; i++) {
    if (i != y && numberArray[x][i] == value)
      return false;
    if (i != x && numberArray[i][y] == value)
      return false;
  }
  for (let i = x - (x % 3); i < x - (x % 3) + 3; i++) {
    for (let j = y - (y % 3); j < y - (y % 3) + 3; j++) {
      if (i != x && j != y && numberArray[i][j] == value)
        return false;
    }
  }
  return true;
}

const findValueForNextCell = (i, j) => {
  if (++j > 8) {
    j = 0;
    if (++i > 8) {
      return true;
    }
  }
  let value = 0;
  let numsLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  do {
    if (numsLeft.length < 1) {
      numberArray[i][j] = 0;
      return false;
    }
    value = numsLeft[Math.floor(Math.random() * numsLeft.length)];
    numberArray[i][j] = value;
    numsLeft.splice(numsLeft.indexOf(value), 1);
  } while (!isValidNumber(value, i, j) || !findValueForNextCell(i, j));
  return true;
}

const showHints = (hintsCount) => {

  for (let i = 0; i < hintsCount; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);

    cellArray[row][col] = <Cell isLocked={false} text={''} />
  }
}

const Board = () => {
  findValueForNextCell(0, -1)

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cellArray[i][j] = <Cell isLocked={true} text={numberArray[i][j]} x={i} y={j} />
    }
  }

  showHints(45)

  return (
    <View style={styles.board}>
      {cellArray}
    </View>
  );
}

const Cell = ({ value, onChange, text, isLocked, x, y }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  if (text !== '') {
    return (
      <TouchableOpacity disabled={isLocked} style={styles.cell}>
        <Text style={styles.number}>{text}</Text>
      </TouchableOpacity>
    );
  }
  else {
    return (
      <TouchableOpacity disabled={isLocked} style={styles.cell}>
        <TextInput
          style={styles.number}
          value={inputValue}
          onChangeText={handleInputChange}
          keyboardType="numeric"
          maxLength={1}
        />
      </TouchableOpacity>
    );
  }

}

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Board />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 140,
    paddingBottom: 40,
  },
  cell: {
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  board: {
    width: 350,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  number: {
    fontSize: 20,
    color: 'black'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 390
  },
});

export default PlayScreen;