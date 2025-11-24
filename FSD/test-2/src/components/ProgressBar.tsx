import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: number;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  const start = () => setIsRunning(true);
  const reset = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="progress-bar-container">
      <h2>Progress Bar</h2>
      
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        >
          <span className="progress-label">{progress}%</span>
        </div>
      </div>

      <div className="controls">
        <button onClick={start} disabled={isRunning || progress === 100}>
          Start
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
