import { useState } from 'react';

export default function DiceRoller() {
  const [diceCount, setDiceCount] = useState<number>(1);
  const [results, setResults] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  const rollDice = () => {
    const rolls = Array.from({ length: diceCount }, () =>
      Math.floor(Math.random() * 6) + 1
    );
    setResults(rolls);
    setTotal(rolls.reduce((sum, val) => sum + val, 0));
  };

  return (
    <div className="dice-roller">
      <h2>Dice Roller</h2>
      
      <div className="controls">
        <label>Number of Dice:</label>
        <input
          type="number"
          min="1"
          max="10"
          value={diceCount}
          onChange={(e) => setDiceCount(parseInt(e.target.value))}
        />
        <button onClick={rollDice}>Roll</button>
      </div>

      {results.length > 0 && (
        <div className="results">
          <div className="dice-display">
            {results.map((value, index) => (
              <div key={index} className="die">
                {value}
              </div>
            ))}
          </div>
          <h3>Total: {total}</h3>
        </div>
      )}
    </div>
  );
}
