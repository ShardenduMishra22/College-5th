import { useState, useEffect } from 'react';

export default function AnalogClock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondsDegrees = (seconds / 60) * 360;
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="analog-clock-container">
      <h2>Analog Clock</h2>
      <svg className="analog-clock" viewBox="0 0 200 200" width="300" height="300">
        <circle cx="100" cy="100" r="98" fill="white" stroke="#333" strokeWidth="2" />
        
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 100 + 85 * Math.cos(angle);
          const y1 = 100 + 85 * Math.sin(angle);
          const x2 = 100 + 90 * Math.cos(angle);
          const y2 = 100 + 90 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#333"
              strokeWidth="2"
            />
          );
        })}

        {/* Hour hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="50"
          stroke="#333"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${hoursDegrees} 100 100)`}
        />

        {/* Minute hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="#666"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${minutesDegrees} 100 100)`}
        />

        {/* Second hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="25"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${secondsDegrees} 100 100)`}
        />

        {/* Center dot */}
        <circle cx="100" cy="100" r="5" fill="#333" />
      </svg>
    </div>
  );
}
