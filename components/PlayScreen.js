import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';

const cellArray = []
const numberArray = []

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

const Board = () => {
  findValueForNextCell(0, -1)
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cellArray.push(<Cell text={numberArray[i][j]}/>)
    }
  }

  return (
    <View style={styles.board}>
      {cellArray}
    </View>
  );
}

const Cell = ({text}) => {
  return (
    <TouchableOpacity disabled={true} style={styles.cell}>
      <Text style={styles.number}>{text}</Text>
    </TouchableOpacity>
  );
}

const NumberButton = ({text}) => {
  return (
    <TouchableOpacity disabled={false} style={styles.cell}>
      <Text style={styles.number}>{text}</Text>
    </TouchableOpacity>
  );
}

const PlayScreen = () => {
  return (
    <ImageBackground source={require('../assets/BG-HomeScreen.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Board/>
        </View>

        <View style={styles.footer}>
          <NumberButton text={1}/>
          <NumberButton text={2}/>
          <NumberButton text={3}/>
          <NumberButton text={4}/>
          <NumberButton text={5}/>
          <NumberButton text={6}/>
          <NumberButton text={7}/>
          <NumberButton text={8}/>
          <NumberButton text={9}/>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
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
  footer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 390,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20
  },
});

export default PlayScreen;