document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { 'cells': [
  {row:1, col:1, hidden:true ,isMine:false},
  {row:1, col:2, hidden:true ,isMine:false},
  {row:1, col:3, hidden:true ,isMine:false},
  {row:1, col:4, hidden:true ,isMine:false},
  {row:1, col:5, hidden:true ,isMine:false},
  {row:1, col:6, hidden:true ,isMine:false},

  {row:2, col:1, hidden:true ,isMine:false},
  {row:2, col:2, hidden:true ,isMine:false},
  {row:2, col:3, hidden:true ,isMine:false},
  {row:2, col:4, hidden:true ,isMine:false},
  {row:2, col:5, hidden:true ,isMine:false},
  {row:2, col:6, hidden:true ,isMine:false},

  {row:3, col:1, hidden:true ,isMine:true},
  {row:3, col:2, hidden:true ,isMine:false},
  {row:3, col:3, hidden:true ,isMine:false},
  {row:3, col:4, hidden:true ,isMine:false},
  {row:3, col:5, hidden:true ,isMine:false},
  {row:3, col:6, hidden:true ,isMine:false},

  {row:4, col:1, hidden:true ,isMine:false},
  {row:4, col:2, hidden:true ,isMine:false},
  {row:4, col:3, hidden:true ,isMine:false},
  {row:4, col:4, hidden:true ,isMine:false},
  {row:4, col:5, hidden:true ,isMine:false},
  {row:4, col:6, hidden:true ,isMine:false},


  {row:5, col:1, hidden:true ,isMine:false},
  {row:5, col:2, hidden:true ,isMine:false},
  {row:5, col:3, hidden:true ,isMine:false},
  {row:5, col:4, hidden:true ,isMine:false},
  {row:5, col:5, hidden:true ,isMine:false},
  {row:5, col:6, hidden:true ,isMine:false},

  {row:6, col:1, hidden:true ,isMine:false},
  {row:6, col:2, hidden:true ,isMine:false},
  {row:6, col:3, hidden:true ,isMine:false},
  {row:6, col:4, hidden:true ,isMine:false},
  {row:6, col:5, hidden:true ,isMine:false},
  {row:6, col:6, hidden:true ,isMine:false}]
};


function startGame () {
  // Don't remove this function call: it makes the game work!

  lib.initBoard()
  // var OutPut = " <div> </div>";
  // OutPut = document.getElementsByClassName("board")[0].innerHTML;
  // for(var row=0;row<3;row++){
  //   //OutPut += " <div id='row" + row + "'>  ";
  //   OutPut =  OutPut + "<div id\"=row"+ row +"\"> </div>  ";
  //   document.getElementsByClassName("board")[row].innerHTML += OutPut;
  //
  //   //OutPut += document.getElementsByClassName("board")[row].innerHTML;
  //   //for(var col=0;col<3;col++){
  //   //  OutPut +="<div id=\"col" + row + col + "\"> </div>";
  //   //}
  //   //OutPut+="</div>   ";
  //
  // }
  // document.getElementsByClassName("board").innerHTML += OutPut;
  // alert(OutPut);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
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
}
