export const isValidNumber = (value, x, y) => {
  for (let i = 0; i < 9; i++) {
    if (i != y && numberArray[x][i] == value) return false;
    if (i != x && numberArray[i][y] == value) return false;
  }
  for (let i = x - (x % 3); i < x - (x % 3) + 3; i++) {
    for (let j = y - (y % 3); j < y - (y % 3) + 3; j++) {
      if (i != x && j != y && numberArray[i][j] == value) return false;
    }
  }
  return true;
};

export const findValueForNextCell = (i, j) => {
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
};

export const check = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (answerArray[i][j] === "") {
        return false;
      }

      if (answerArray[i][j] !== numberArray[i][j]) {
        return false;
      }
    }
  }
  return true;
};
