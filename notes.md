Objective - Tetris - The clash of decades (New school VS. old school concept)
**GAME LOGIC********************************************************************************************************************************************************************************

Tetris Game Concept / pseudo code:
    - 2 player tetris 
    - Get the 1 player working completely by the 6th then we can work on 2 player
GAME LOGIC:
1. game board needs to be able to draw the falling pieces + keep tack of the game state
2. create two classes - game board (in board.js)and pieces. new instance of the board can be created when starting a new game ad new instances of pieces can be created every time a new piece enters the game 
3. board refrences the canvas every time game starts
4. tetris boards consists of individual cells that empty (0) or occupied (1-7) for colors
5. 


**GAME TO-DO NOTES**************************************************************************************************************************************************************************

1. Set up repo in Github 
2. Write README.MD 
3. Pseudo Code/ notes
4. Set up code environment
5. code and continued pseudo code for 1 player Tetris game + daily commits/update
 
**RESOURCES**********************************************************************************************************************************************************************************

General:
https://mikkegoes.com/javascript-projects-for-beginners/

Building Tetris:
https://www.youtube.com/watch?v=rAUn1Lom6dw
https://www.educative.io/blog/javascript-tutorial-build-tetris 
https://www.codeexplained.dev/2018/08/create-tetris-game-using-javascript.html

CSS Grid and Flexbox:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

Pixel Art and rendering in CSS:
https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
https://css-tricks.com/fun-times-css-pixel-art/
https://dev.to/jnschrag/creating-pixel-art-with-css-3451

Canvas:
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

Animation:
https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

Keydown eventlistener:
https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

**NOTES**************************************************************************************************************************************************************************************

CSS: 
    - play area container
    - buttons (play button and restart button)
    - score tracker/board
    - positioning 
    - bitmap font, Press start 2P (Google Fonts)
    - must use Flexbox but game also uses CSS Grid

HTML: 
    - basic css + use of canvas 
JS:
    - requires players to rotate and move falling Tetris pieces (Tetriminos)
    - lines are cleared by the completion of horizontal rows of blocks (w/o white empty cells)
    - ** cells? -> like table cells?
    - if pieces reach the top gameOver()
    - ** if pieces don't reach the top then game is continuous?? gameLoop(){ if(){}}
    - Creating and maintaining multiple JS files and importing .js files
    - creating theb illusion of moving shapes using canvas drawing tools
    - creating graphics using canvas methods
    - adding animations using drawing tools. canvas Animations are similar to stop motion animation because theye move a little in each frame using canvas methods
    - Keyboard support for user control of rotating pieces using keybooard event handlers
    - collision deection and piece randommizer
    - line clearing if row is filled 
    - score keeping, possible levels
Game Design Concepts:
    - gameplay loop design
    - implementing common game mechanics like controls, score tracking and collision detection
Skill set:
    - HTML/CSS styling Flexbox and CSS Grid to position elemenets
    - JS classes, variables and scope
    - arrow functions
    - template litterals
    - Spread and Rest
    - destructuring


**REMEMEMBER**********************************************************************************************************************************************************************************

** Stretch Goals (Not Mandatory):

Recommended Features
    - A way to reset the board and play again
    - CSS to give your game a personal and fun style
    - Responsive mobile design
    - Work with your instructor to determine additional stretch goals

** If you build a Game it must have:

1. Must be a two player game (either against the computer or against another player)
    - Example: Blackjack: A player plays against the dealer. The dealer is the computer - Example: Connect Four: Two players pass the game between themselves to take turns
2. A win state - a way for the player to win the game High score can be considered a win state
3. A lose state - a way for the player to lose the game
    - Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play if their bankroll is at 0
    - Example: Connect Four - the other player has won or there are no possible plays le"
4. A way to keep playing if the game is not over
5. Mul#ple rounds to play - a round must begin, end, and there must be a way to check if the game should con!nue or the overall game is won or lost 
    - Example: Blackjack: a player takes turns playing a hand versus a computer 
    - the player's hand can either win, lose or !e the dealer. If the player has enough money in their bankroll they can keep playing. A player must be able to win several rounds and increase their bankroll 
    - Example: Connect Four: two (non-computer) players take turns adding chips to the board. The game will check if a player won or if the board is full and there are no more plays possible. A player gets four chips in a row (ver!cally or horizontally)
    - one person wins, one loses, there are no further plays in this case

** FIX **

## **THE PLAN**

1. creating an HTML canvas element with a height of 400 and a width of 200 and create and link a tetris.js file where everything will be
2. select the canvas element and get the context of that element. context allows you to draw on the canvas
3. to draw a rectangle you have to give it a color by using .fillStyle = “color” method , .fillRect method is used to create the rectangle. it takes 4 parameters(x amount of px from the left, y from the top, width of rectangle,height of rectangle)
4. use strokeStyle = “color” and .strokeRect(takes the same parameters as fillRect) to get a stroke on the rectangle

*UNDERSTANDING THE GAME

1. the game board has 10 columns and 20 rows, any number can be used.
2.  The Tetris pieces is called a tetrimino. both the board and the piece is made by squares 20X20
3. The tetrimino can go left,right and rotate and also goes down and drops automatically on the board..Movements controlled by the player.
4. When the piece hits the bottom of the game board it will be locked in place then call for random piece
5. board has left and right wall

*DRAW A SQUARE 

1. create a function to draw a square defining the fillstyle and fillrect. any sq is 20X20 because of the board. define the x and y positions by addition of 20px define one constant for x and y for the sq size 20.. 

___5m