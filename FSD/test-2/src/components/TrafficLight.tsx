import { useState, useEffect } from 'react';

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState<'green' | 'yellow' | 'red'>('green');

  useEffect(() => {
    const durations: Record<'green' | 'yellow' | 'red', number> = { 
      green: 3000, 
      yellow: 1000, 
      red: 2000 
    };
    const nextLight: Record<'green' | 'yellow' | 'red', 'green' | 'yellow' | 'red'> = { 
      green: 'yellow', 
      yellow: 'red', 
      red: 'green' 
    };

    const timer = setTimeout(() => {
      setActiveLight(nextLight[activeLight]);
    }, durations[activeLight]);

    return () => clearTimeout(timer);
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === 'red' ? 'active' : ''}`} />
      <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`} />
      <div className={`light green ${activeLight === 'green' ? 'active' : ''}`} />
    </div>
  );
}
