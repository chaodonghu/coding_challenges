<html>
  <head>
    <style>
      body {
        background-color: #1d2126;
        color: white;
      }

      table {
        width: 500px;
        height: 500px;
      }

      td {
        background-color: blue;
      }
    </style>

  <body>
    <table id="player1"></table>
    <table id="player2"></table>
  </body>
  <script>

    const BOARD_SIZE_X = 10;
    const BOARD_SIZE_Y = 10;

    const playerOneShipCoordinates = [
      // ship one
      [3,4],
      [3,5],
      // ship two
      [1,2],
      [1,3],
      [1,4],
      // ship three
      [6,8],
      [7,8],
      [8,8],
      [9,8],
    ];

    const playerTwoShipCoordiantes = [
      // ship one
      [6,3],
      [7,3],
      // ship two
      [3,6],
      [3,7],
      [3,8],
      // ship three
      [0,1],
      [0,2],
      [0,3],
      [0,4],
    ];

    // Build an x by y 2D array with each value as 'empty'
    const buildEmptyGrid = (x, y) => {
      const resultGrid = [];

      for (let i = 0; i < x; i++) {
        resultGrid.push([]);
        for (let j = 0; j < y; j++) {
          resultGrid[i][j] = 'empty';
        }
      }

      return resultGrid;
    };

    let firstPlayerGrid = buildEmptyGrid(BOARD_SIZE_X, BOARD_SIZE_Y);
    let secondPlayerGrid = buildEmptyGrid(BOARD_SIZE_X, BOARD_SIZE_Y);

    console.log('player 1: ', firstPlayerGrid);

    const hideShipsOnGrid = (coordinates, grid) => {
      for (let [x, y] of coordinates) {
        grid[x][y] = 'hidden';
      }

    };

    const displayGrid = (playerId, grid) => {
      // access element display grid elements
      // loop through grid, create cells with appropriate css class for color
      // add event listener to react to a click
      const table = document.querySelector(`#${playerId}`);
      console.log('table', table);
      // if the cell has a hit -> change that color into red
      // if the cell has a miss -> change that color that indicates it a miss
      for (let row = 0; row < grid.length - 1; row++) {
        let rowEl = document.createElement('tr');
         for (let col = 0; col < grid[0].length - 1; col++) {
           let colEl = document.createElement('td');
           colEl.id = `${[row, col]}`;
           rowEl.appendChild(colEl);
         }
        table.appendChild(rowEl);
      }
    };

  const hiddenShipsForPlayerOne = hideShipsOnGrid(playerOneShipCoordinates, firstPlayerGrid);
  const hiddenShipsForPlayerTwo = hideShipsOnGrid(playerTwoShipCoordiantes, secondPlayerGrid);

  console.log('firstPlayerGrid', firstPlayerGrid);
  console.log('secondPlayerGrid', secondPlayerGrid);

  // Four cell states: hidden, empty, hit, miss
  // Display HTML
  // attach a listener to whole grid or each individual cell
  // when a player clicks the cell, check if that cell is empty or hidden
  // if hit, change state to hit, if miss, cahgne state to miss
  // run displayGrid function again to update the visual output

    displayGrid('player1', firstPlayerGrid);

    displayGrid('player2', secondPlayerGrid);

   const clicked = (e) => {
     let coordinate = e.target.id.split(',');

     let xCoordinate = coordinate[0];
     let yCoordinate = coordinate[1];



    if (hiddenShipsForPlayerOne[xCoordinate][yCoordinate] === 'hidden') {
      hiddenShipsForPlayerOne[xCoordinate][yCoordinate] = 'hit';
    } else {
      hiddenShipsForPlayerOne[xCoordinate][yCoordinate] = 'miss'
    }

    displayGrid('player1', hiddenShipsForPlayerOne);
    displayGrid('player2', hiddenShipsForPlayerOne);
  }

  document.querySelector('table').addEventListener('click', clicked);
  </script>
</html>


<!--

    /*
  Do you remember the game battle ship?

*******************
Problem description
*******************

    - Two players in the game
    - Both players have a 10x10 grid
    - Both players have ships hidden on his or her 10x10 grid
    - Both players take turns alternating guesses to where the other player’s ships are hidden
    - Each guess is either a hit or a miss
    - When one player hits every coordiante of every opponent ship that player wins!

****************
Task description
****************

  Create a game that allows each player to guess where the others ships are located

    - You are given where both players ships are hidden as an input to the problem
    - You are given a buildEmptyGrid function which builds an empty 2D array
    - Each coordinate in this data structure should have a value of 'empty', 'hit', 'miss', or 'hidden'
    - Display the current state of the game
    - Start the game by allowing player 1 to guess
    - Update the game
    - Alternate turns until a player wins

*/
    const BOARD_SIZE_X = 10;
    const BOARD_SIZE_Y = 10;

    const playerOneShipCoordiantes = [
      // ship one
      [3,4],
      [3,5],
      // ship two
      [1,2],
      [1,3],
      [1,4],
      // ship three
      [6,8],
      [7,8],
      [8,8],
      [9,8],
    ];

    const playerTwoShipCoordiantes = [
      // ship one
      [6,3],
      [7,3],
      // ship two
      [3,6],
      [3,7],
      [3,8],
      // ship three
      [0,1],
      [0,2],
      [0,3],
      [0,4],
    ];

    // Build an x by y 2D array with each value as 'empty'
    const buildEmptyGrid = (x, y) => {
      const resultGrid = [];

      for (let i = 0; i < x; i++) {
        resultGrid.push([]);
        for (let j = 0; j < y; j++) {
          resultGrid[i][j] = 'empty';
        }
      }

      return resultGrid;
    };

    let firstPlayerGrid = buildEmptyGrid(BOARD_SIZE_X, BOARD_SIZE_Y);
    let secondPlayerGrid = buildEmptyGrid(BOARD_SIZE_X, BOARD_SIZE_Y);

    // Hints:

    // Step 1.
    // start with a function that 'hides' ships on the grid
    // Coordiantes with a ship start as 'hidden'
    //
    // Step 2.
    // Display both players grids
    //
    // Step 3.
    // Implement the game play alternating turns

    // some example functions you may want to implement

    const = hideShipsOnGrid = () => {};

    const = displayGrid = () => {};

    const = handlePlayerGuess = () => {};

    const = setupGame = () => {};

  </script>
</html>

 -->
