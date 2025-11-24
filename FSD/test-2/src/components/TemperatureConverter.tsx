import { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const f = (parseFloat(value) * 9/5) + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const c = (parseFloat(value) - 32) * 5/9;
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div className="temperature-converter">
      <h2>Temperature Converter</h2>
      
      <div className="converter-group">
        <label>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => handleCelsiusChange(e.target.value)}
          placeholder="Enter Celsius"
        />
      </div>

      <div className="converter-group">
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => handleFahrenheitChange(e.target.value)}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
}
