import { useState } from 'react';

interface GridLightsProps {
  rows?: number;
  cols?: number;
}

export default function GridLights({ rows = 3, cols = 3 }: GridLightsProps) {
  const [activatedCells, setActivatedCells] = useState<number[]>([]);
  const [isDeactivating, setIsDeactivating] = useState<boolean>(false);

  const totalCells = rows * cols;

  const handleCellClick = (index: number) => {
    if (isDeactivating || activatedCells.includes(index)) return;

    const newActivated = [...activatedCells, index];
    setActivatedCells(newActivated);

    if (newActivated.length === totalCells) {
      setIsDeactivating(true);
      deactivateInOrder(newActivated);
    }
  };

  const deactivateInOrder = (cells: number[]) => {
    cells.forEach((cellIndex, i) => {
      setTimeout(() => {
        setActivatedCells(prev => prev.filter(c => c !== cellIndex));
        if (i === cells.length - 1) {
          setIsDeactivating(false);
        }
      }, i * 300);
    });
  };

  const reset = () => {
    setActivatedCells([]);
    setIsDeactivating(false);
  };

  return (
    <div className="grid-lights-container">
      <h2>Grid Lights</h2>
      <div className="grid-lights" style={{
        gridTemplateColumns: `repeat(${cols}, 80px)`,
        gridTemplateRows: `repeat(${rows}, 80px)`
      }}>
        {[...Array(totalCells)].map((_, index) => (
          <div
            key={index}
            className={`grid-light-cell ${activatedCells.includes(index) ? 'active' : ''}`}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button onClick={reset} disabled={isDeactivating}>Reset</button>
    </div>
  );
}
