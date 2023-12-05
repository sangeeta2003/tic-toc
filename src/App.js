import Player from "./components/player";
import Gamemode from "./components/gameboard";
import Log from "./components/log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/wininingcombination";
import GameOver from "./components/Gameover";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  let gameBoard = initialGameBoard;
  let winner;

  for (const turn of gameTurns) {
    const { square, Player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = Player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol !== null &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      break; 
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActive) => (currentActive === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, Player: activePlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }
  function handleRestart(){
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player-1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="player-2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gamemode onSelectSquare={handleSelectSquare} board={gameBoard} />

        Game Board
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
