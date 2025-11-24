import { useState, useEffect } from 'react';

interface Bar {
  id: number;
  progress: number;
}

export default function ProgressBars() {
  const [bars, setBars] = useState<Bar[]>([]);

  const addBar = () => {
    const newBar = { id: Date.now(), progress: 0 };
    setBars(prev => [...prev, newBar]);
  };

  useEffect(() => {
    const intervals = bars.map(bar => {
      if (bar.progress < 100) {
        return setInterval(() => {
          setBars(prevBars =>
            prevBars.map(b =>
              b.id === bar.id && b.progress < 100
                ? { ...b, progress: Math.min(b.progress + 1, 100) }
                : b
            )
          );
        }, 20);
      }
      return null;
    });

    return () => {
      intervals.forEach(interval => interval && clearInterval(interval));
    };
  }, [bars]);

  return (
    <div className="progress-bars-container">
      <button onClick={addBar}>Add Progress Bar</button>
      
      <div className="bars-list">
        {bars.map(bar => (
          <div key={bar.id} className="progress-bar-wrapper">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${bar.progress}%` }}
              />
            </div>
            <span className="progress-text">{bar.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
