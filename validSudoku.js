/*
You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.
*/

/*
Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
*/

// loop through each row to check for duplicates
// how to check for duplicates? Add it to a newSet(), if has seen before then return false
// nested loop to check for columns and duplicates => repeat step 2
function isValidSudoku(board) {
  // fill bucket
  const rows = Array(9)
    .fill()
    .map(() => new Set());
  const columns = Array(9)
    .fill()
    .map(() => new Set());
  const boxes = Array(9)
    .fill()
    .map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // num goes through every single value
      const num = board[i][j];
      // we skip "."
      if (num !== ".") {
        // boxIndex creates a 9 boxes
        // each of these box is a 3x3
        // 0 1 2
        // 3 4 5
        // 6 7 8
        // if box index is 0
        // it checks whether num already exists in boxes Set(0)
        // if it's not a dupe then we add it to boxes Set(0) [0, e, e, e, ,e ,e ,e, e, e]
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
          return false;
        }

        rows[i].add(num);
        columns[j].add(num);
        boxes[boxIndex].add(num);
      }
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
