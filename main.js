// code that is used to manipulate the document object which an environment caled the DOM which is a programmable interface for the HTML document
// using the DOM to call the this method to target specific elements in html and scaling the game to match the H/W of the players browser window
const gameCanvas = document.getElementById("tetris");
const ctx = gameCanvas.getContext("2d");
const scoreElement = document.getElementById("score");

//the game board has 10 columns and 20 rows, any number can be used.
const ROW = 20;
const COL = COLUMN = 10;
// The Tetris pieces is called a tetrimino. both the board and the piece is made by squares 20X20
const SQ = squareSize = 20; // the square size is 20X20
const VACANT = "WHITE"; // This is the color of an empty square.

// reusalbe function for Drawing a square for the canvas. using color as a parameter allows us to have multiple color as opposed to hard coding a specific color
// the x position and y position of the suares will change so they are also passed in as parameters
function drawSquare(x, y, color) {
    ctx.fillStyle = color // setting the color 
    //ctx.fillRect(0,0,50,50) //(x,y,width,height)
    // insted of using px to define the dimensions of the square we use can use SQ as a unit along with the width and the height
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ)
    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ) // strokes make the block visible
} // creates a colored square with a sroke
//drawSquare(0, 0, "purple")

// Creating the board - the board is a 2-D array of squares

let board = []
// use for loop to create the rows
for (r = 0; r < ROW; r++) {
    //rows are an empty array at first
    board[r] = []
    // creating the columns for the rows
    for (c = 0; c < COL; c++) {
        //all squares of the board are white for now
        board[r][c] = VACANT;
    }
}

// Drawing the board to the canvas using the samae code as creating the board 
function drawBoard() {
    for (r = 0; r < ROW; r++) {
        // creating the columns for the rows
        for (c = 0; c < COL; c++) {
            //all squares of the board are white for now
            drawSquare(c, r, board[r][c]) // x position is c number of the color...
        }
    }
}
drawBoard();

//creating an array of the pieces and their color 
const PIECES = [
    [Z, "red"],
    [S, "green"],
    [T, "blue"],
    [O, "orange"],
    [L, "indigo"],
    [I, "violet"],
    [J, "pink"]

];

//insanciate piece by using pieces with an index of zero and it's color.
let p = new Piece(PIECES[0][0], PIECES[0][1])

//this constructor function  gets the tetromino and it's color as parameters
function Piece(tetromino, color) {
    this.tetromino = tetromino
    this.color = color // the color of every piece
    this.tetrominoNum = 0; //start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoNum] ;// the active tetromino will be accompanied by the fil,stroke and number
    // in order to control the pieces we need to add coordinates to gauge movement throughout the board
    this.y = 0;
    this.x = 0; // to move the piece you can change the coordinates
}
// fill function gets the color as a parameter 
Piece.prototype.fill = function (color) {
    // using a for loop to itterate  through the rows
    for (r = 0; r < this.activeTetromino.length; r++) {
        // creating the columns for the rows
        for (c = 0; c < this.activeTetromino.length; c++) {
            // if the square is occupied by an active tetromino then draw a square
            if (this.activeTetromino[r][c]){
                //controling the piece
                drawSquare(this.x + c, this.y +r, color)
            }
        }
    }
}

//drawing a piece to th board
Piece.prototype.draw = function () {
    // // using a for loop to itterate  through the rows
    // for (r = 0; r < this.activeTetromino.length; r++) {
    //     // creating the columns for the rows
    //     for (c = 0; c < this.activeTetromino.length; c++) {
    //         // if the square is occupied by an active tetromino then draw a square
    //         if (this.activeTetromino[r][c]){
    //             //controling the piece
    //             drawSquare(this.x + c, this.y +r, this.color)
    //         }
    //     }
    // }

    //function update due to the creaton of the fill function above (draw uses the pieces color)
    this.fill(this.color)
}

// undraw the piece by changing the color of the piece to VACANT
Piece.prototype.unDraw = function () {
    // // using a for loop to itterate  through the rows
    // for (r = 0; r < this.activeTetromino.length; r++) {
    //     // creating the columns for the rows
    //     for (c = 0; c < this.activeTetromino.length; c++) {
    //         // if the square is occupied by an active tetromino then draw a square
    //         if (this.activeTetromino[r][c]){
    //             //controling the piece
    //             drawSquare(this.x + c, this.y +r, VACANT)
    //         }
    //     }
    // }

    // function update due to the creation of the fill function above (undraw uses the VACANT color)
    this.fill(VACANT);
}
p.draw(); // shows the piece in thev canvas

// moving the piece down 
Piece.prototype.moveDown = function(){
    // to move the piece downward you have to incremet the y positio of the piece and cal the draw function to draw the piece in it's new position
    this.unDraw(); //update the down function to include unDraw to remove the fill from the piece as it moves down
    this.y++; 
    this.draw();
}

// move right
Piece.prototype.moveRight = function(){
    this.unDraw(); //update the down function to include unDraw to remove the fill from the piece as it moves down
    this.x++; //instead of incementing the y we incement the x
    this.draw();
}
// move Left
Piece.prototype.moveLeft = function(){
    this.unDraw(); //update the down function to include unDraw to remove the fill from the piece as it moves down
    this.x--; //different the x instad of incement to enabe movement along the horizontal axis
    this.draw();
}
// move up
Piece.prototype.rotate = function(){
    // to rotate the piece you have to increent the tetromino number
     //different the x instad of incement to enabe movement along the horizontal axis
   this.tetrominoNum = (this.tetrominoNum + 1) % this.tetromino.length
    this.activeTetromino = this.tetromino[this.tetrominoNum] //updatingn the active tetromino
    this.draw();
}

//CONTROL the piece
document.addEventListener('keydown', CONROL);
function CONTROL(event){
    if(event.keycode ===37){
        //if the keycode pressed i 37 then ..!!!!!!!! 1.02
    }

}

// this piece drops automatically every sec. in Tetris.
let dropStart = Date.now();
function drop(){
    let now = Date.now();
    let delta = now - dropStart;
    // 1000 for m = 1s
    if(delta > 1000){
        //calls the fucntion MV D to drop the piece down every 1 sec - piece began to get larger because the previous piece was still saved
        p.moveDown();
        dropStart= Date.now();
    }
    requestAnimationFrame(drop);
    }
   

drop(); // at this point the code was working the piece waas moving quickly so this meant that the time needed to be controlled so a drop start variable was implemented






























