// run `node index.js` in the terminal


//QUESTION : find string "str" in the  matrix "arr" ( there exist 2 solutions)



let arr = [
  ['g', 'h', 'i'],
  ['a', 'b', 'g'],
  ['d', 'e', 'f'],
];

// variable to track all possible solutions
let sols = [];
 
let str = 'gbe';

let val = false;

// variable to track current navigated path
current = [];

// master loop - naviagtes and finds the starting point
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (str.split('')[0] == arr[i][j]) {
      checkfornext(arr, i, j, 0, str);
    }
  }
}

console.log('solutions : ', sols);

// recursive looper - this loopes through the neighbours in search of the solution
function checkfornext(arr, i, j, strpos, str) {
  if (strpos == str.length - 1) {
    current.push([i, j]);
    sols.push(current);
    console.log(`found  a solution : =`, current);
    // if solution found , clear the current variable for use in next exploration
    current = [];
    return true;
  } else {
    current.push([i, j]);
    console.log(`found  next at : [%s ,%s]`, i, j);

    if (i + 1 < arr.length) {
      if (arr[i + 1][j] == str[strpos + 1]) {
        checkfornext(arr, i + 1, j, strpos + 1, str);
      }
      if (j + 1 < arr[0].length && arr[i + 1][j + 1] == str[strpos + 1]) {
        checkfornext(arr, i + 1, j + 1, strpos + 1, str);
      }
      if (j - 1 > 0 && arr[i + 1][j - 1] == str[strpos + 1]) {
        checkfornext(arr, i + 1, j - 1, strpos + 1, str);
      }
    }
    if (i - 1 > 0) {
      if (arr[i - 1][j] == str[strpos + 1]) {
        checkfornext(arr, i - 1, j, strpos + 1, str);
      }
      if (j + 1 < arr[0].length && arr[i - 1][j + 1] == str[strpos + 1]) {
        checkfornext(arr, i - 1, j + 1, strpos + 1, str);
      }
      if (j - 1 > 0 && arr[i - 1][j - 1] == str[strpos + 1]) {
        checkfornext(arr, i - 1, j - 1, strpos + 1, str);
      }
    }

    if (j + 1 < arr[0].length && arr[i][j + 1] == str[strpos + 1]) {
      checkfornext(arr, i, j + 1, strpos + 1, str);
    }
    if (j - 1 > 0 && arr[i][j - 1] == str[strpos + 1]) {
      checkfornext(arr, i, j - 1, strpos + 1, str);
    }
  }
  // if it reached here , then this route ended up in no solution
  // clear the current variable for use in next exploration
  current = [];
  return false;
}
