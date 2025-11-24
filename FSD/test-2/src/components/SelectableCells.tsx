import { useState } from 'react';

interface SelectableCellsProps {
  rows?: number;
  cols?: number;
}

export default function SelectableCells({ rows = 5, cols = 5 }: SelectableCellsProps) {
  const [selecting, setSelecting] = useState<boolean>(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const getCellId = (row: number, col: number) => `${row}-${col}`;

  const handleMouseDown = (row: number, col: number) => {
    setSelecting(true);
    const cellId = getCellId(row, col);
    setSelected(new Set([cellId]));
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (selecting) {
      const cellId = getCellId(row, col);
      setSelected(prev => new Set([...prev, cellId]));
    }
  };

  const handleMouseUp = () => {
    setSelecting(false);
  };

  return (
    <div className="selectable-cells-container">
      <h2>Selectable Cells</h2>
      <div 
        className="grid"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {[...Array(cols)].map((_, colIndex) => {
              const cellId = getCellId(rowIndex, colIndex);
              return (
                <div
                  key={cellId}
                  className={`grid-cell ${selected.has(cellId) ? 'selected' : ''}`}
                  onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <p>Selected cells: {selected.size}</p>
    </div>
  );
}
