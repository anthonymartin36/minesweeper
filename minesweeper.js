document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { 'cells': [
  {row:1, col:1, hidden:true, isMine:true, isMarked: false, surroundingMines:0},
  {row:1, col:2, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:1, col:3, hidden:true, isMine:true, isMarked: false, surroundingMines:0},
  {row:1, col:4, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:1, col:5, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:1, col:6, hidden:true, isMine:true, isMarked: false, surroundingMines:0},

  {row:2, col:1, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:2, col:2, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:2, col:3, hidden:true, isMine:true, isMarked: false, surroundingMines:0},
  {row:2, col:4, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:2, col:5, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:2, col:6, hidden:true, isMine:false, isMarked: false, surroundingMines:0},

  {row:3, col:1, hidden:true, isMine:true, isMarked: false, surroundingMines:0},
  {row:3, col:2, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:3, col:3, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:3, col:4, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:3, col:5, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:3, col:6, hidden:true, isMine:true, isMarked: false, surroundingMines:0},

  {row:4, col:1, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:4, col:2, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:4, col:3, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:4, col:4, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:4, col:5, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:4, col:6, hidden:true, isMine:false, isMarked: false, surroundingMines:0},

  {row:5, col:1, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:5, col:2, hidden:true, isMine:true, isMarked: false, surroundingMines:0},
  {row:5, col:3, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:5, col:4, hidden:true, isMine:true, isMarked: false, surroundingMines:0},
  {row:5, col:5, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:5, col:6, hidden:true, isMine:true, isMarked: false, surroundingMines:0},

  {row:6, col:1, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:6, col:2, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:6, col:3, hidden:true, isMine:true, isMarked: false, surroundingMines:0},
  {row:6, col:4, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:6, col:5, hidden:true, isMine:false, isMarked: false, surroundingMines:0},
  {row:6, col:6, hidden:true, isMine:false, isMarked: false, surroundingMines:0}]
};


function startGame () {
  // Don't remove this function call: it makes the game work!

  for(var i=0;i<board.cells.length;i++){
    if(countSurroundingMines(board.cells[i]))
      board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
      //console.log(countSurroundingMines(board.cells[i]))
  }

  document.getElementsByClassName('board')[0].addEventListener('click', checkForWin)

  document.getElementsByClassName('board')[0].addEventListener('contextmenu', checkForWin)


  lib.initBoard()
  for(var i=0;i<board.cells.length;i++){
  document.getElementsByClassName('board')[0].addEventListener('click',console.log(board.cells[i].hidden))
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin (evt) {
    var markedMines = 0;
    var mineCount = 0;
    for(var i=0;i<board.cells.length;i++){
      if(board.cells[i].isMine && board.cells[i].isMarked){
        ++markedMines;
      }
      else if(board.cells[i].hidden){
        return;
      }

      if(board.cells[i].isMine){
        ++mineCount;
      }
    }
    if (mineCount === markedMines){
      lib.displayMessage('You win!')
    }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (var i = 0; i < surrounding.length;i++){
      if(surrounding[i].isMine){
        count++
      }
  }

  return count
}
