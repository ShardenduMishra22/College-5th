import { useState } from 'react';

type LetterState = 'correct' | 'present' | 'absent' | 'empty';

interface LetterBox {
  letter: string;
  state: LetterState;
}

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;
const SOLUTION = 'REACT'; // In a real game, this would be random

export default function Wordle() {
  const [guesses, setGuesses] = useState<LetterBox[][]>(
    Array(MAX_GUESSES).fill(null).map(() => 
      Array(WORD_LENGTH).fill(null).map(() => ({ letter: '', state: 'empty' as LetterState }))
    )
  );
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [won, setWon] = useState<boolean>(false);

  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === 'ENTER') {
      if (currentGuess.length === WORD_LENGTH) {
        submitGuess();
      }
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < WORD_LENGTH && /^[A-Z]$/.test(key)) {
      setCurrentGuess(prev => prev + key);
    }
  };

  const submitGuess = () => {
    const newGuesses = [...guesses];
    const guessLetters = currentGuess.split('');
    
    guessLetters.forEach((letter, i) => {
      let state: LetterState = 'absent';
      if (letter === SOLUTION[i]) {
        state = 'correct';
      } else if (SOLUTION.includes(letter)) {
        state = 'present';
      }
      newGuesses[currentRow][i] = { letter, state };
    });

    setGuesses(newGuesses);

    if (currentGuess === SOLUTION) {
      setGameOver(true);
      setWon(true);
    } else if (currentRow === MAX_GUESSES - 1) {
      setGameOver(true);
    } else {
      setCurrentRow(prev => prev + 1);
      setCurrentGuess('');
    }
  };

  const reset = () => {
    setGuesses(
      Array(MAX_GUESSES).fill(null).map(() => 
        Array(WORD_LENGTH).fill(null).map(() => ({ letter: '', state: 'empty' as LetterState }))
      )
    );
    setCurrentGuess('');
    setCurrentRow(0);
    setGameOver(false);
    setWon(false);
  };

  return (
    <div className="wordle">
      <h2>Wordle</h2>
      
      <div className="wordle-board">
        {guesses.map((guess, rowIndex) => (
          <div key={rowIndex} className="wordle-row">
            {guess.map((box, colIndex) => {
              const isCurrentRow = rowIndex === currentRow && !gameOver;
              const letter = isCurrentRow && currentGuess[colIndex] ? currentGuess[colIndex] : box.letter;
              const state = isCurrentRow ? 'empty' : box.state;
              
              return (
                <div key={colIndex} className={`wordle-box ${state}`}>
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="wordle-result">
          {won ? 'Congratulations! You won!' : `Game Over! The word was ${SOLUTION}`}
        </div>
      )}

      <div className="wordle-keyboard">
        {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row, i) => (
          <div key={i} className="keyboard-row">
            {i === 2 && (
              <button onClick={() => handleKeyPress('ENTER')} className="key-wide">
                ENTER
              </button>
            )}
            {row.split('').map(key => (
              <button key={key} onClick={() => handleKeyPress(key)} className="key">
                {key}
              </button>
            ))}
            {i === 2 && (
              <button onClick={() => handleKeyPress('BACKSPACE')} className="key-wide">
                ⌫
              </button>
            )}
          </div>
        ))}
      </div>

      <button onClick={reset} className="reset-btn">New Game</button>
    </div>
  );
}
