import { useState } from 'react';

export default function GenerateTable() {
  const [rows, setRows] = useState<string>('');
  const [cols, setCols] = useState<string>('');
  const [tableData, setTableData] = useState<number[][]>([]);

  const generateTable = () => {
    const numRows = parseInt(rows);
    const numCols = parseInt(cols);
    
    if (numRows > 0 && numCols > 0) {
      const data = Array.from({ length: numRows }, (_, i) =>
        Array.from({ length: numCols }, (_, j) => i * numCols + j + 1)
      );
      setTableData(data);
    }
  };

  return (
    <div className="table-generator">
      <h2>Table Generator</h2>
      
      <div className="controls">
        <input
          type="number"
          placeholder="Rows"
          value={rows}
          onChange={(e) => setRows(e.target.value)}
          min="1"
        />
        <input
          type="number"
          placeholder="Columns"
          value={cols}
          onChange={(e) => setCols(e.target.value)}
          min="1"
        />
        <button onClick={generateTable}>Generate</button>
      </div>

      {tableData.length > 0 && (
        <table className="generated-table">
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
