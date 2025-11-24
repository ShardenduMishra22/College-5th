import { useState } from 'react';

type Player = 'X' | 'O';
type Cell = Player | null;

interface ConnectFourProps {
  rows?: number;
  cols?: number;
}

function checkWinner(board: Cell[][], rows: number, cols: number): Player | null {
  // Check horizontal
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (
        board[r][c] &&
        board[r][c] === board[r][c + 1] &&
        board[r][c] === board[r][c + 2] &&
        board[r][c] === board[r][c + 3]
      ) {
        return board[r][c];
      }
    }
  }

  // Check vertical
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      if (
        board[r][c] &&
        board[r][c] === board[r + 1][c] &&
        board[r][c] === board[r + 2][c] &&
        board[r][c] === board[r + 3][c]
      ) {
        return board[r][c];
      }
    }
  }

  // Check diagonal (top-left to bottom-right)
  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (
        board[r][c] &&
        board[r][c] === board[r + 1][c + 1] &&
        board[r][c] === board[r + 2][c + 2] &&
        board[r][c] === board[r + 3][c + 3]
      ) {
        return board[r][c];
      }
    }
  }

  // Check diagonal (top-right to bottom-left)
  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 3; c < cols; c++) {
      if (
        board[r][c] &&
        board[r][c] === board[r + 1][c - 1] &&
        board[r][c] === board[r + 2][c - 2] &&
        board[r][c] === board[r + 3][c - 3]
      ) {
        return board[r][c];
      }
    }
  }

  return null;
}

export default function ConnectFour({ rows = 6, cols = 7 }: ConnectFourProps) {
  const [board, setBoard] = useState<Cell[][]>(
    Array(rows).fill(null).map(() => Array(cols).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | null>(null);

  const dropPiece = (col: number) => {
    if (winner) return;

    // Find the lowest empty row in the column
    for (let row = rows - 1; row >= 0; row--) {
      if (!board[row][col]) {
        const newBoard = board.map(r => [...r]);
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard, rows, cols);
        if (gameWinner) {
          setWinner(gameWinner);
        } else {
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
        return;
      }
    }
  };

  const reset = () => {
    setBoard(Array(rows).fill(null).map(() => Array(cols).fill(null)));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="connect-four">
      <h2>Connect Four</h2>
      
      <div className="status">
        {winner ? `Winner: ${winner}!` : `Current Player: ${currentPlayer}`}
      </div>

      <div className="connect-four-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="connect-four-row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`connect-four-cell ${cell || ''}`}
                onClick={() => dropPiece(colIndex)}
              >
                {cell && <div className={`piece ${cell}`} />}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button onClick={reset}>Reset Game</button>
    </div>
  );
}
