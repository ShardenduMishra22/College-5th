import React, { useState } from 'react';

export default function FlightBooker() {
  const [flightType, setFlightType] = useState<string>('one-way');
  const [departDate, setDepartDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = flightType === 'one-way'
      ? `Booked one-way flight on ${departDate}`
      : `Booked round-trip flight: ${departDate} to ${returnDate}`;
    alert(message);
  };

  const isReturnDateValid = () => {
    if (flightType === 'one-way') return true;
    if (!departDate || !returnDate) return false;
    return new Date(returnDate) >= new Date(departDate);
  };

  return (
    <div className="flight-booker">
      <h2>Book a Flight</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <select
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
          >
            <option value="one-way">One-way Flight</option>
            <option value="round-trip">Round-trip Flight</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="date"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        {flightType === 'round-trip' && (
          <div className="form-group">
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={departDate}
              required
              className={!isReturnDateValid() ? 'invalid' : ''}
            />
          </div>
        )}

        <button type="submit" disabled={!isReturnDateValid()}>
          Book Flight
        </button>
      </form>
    </div>
  );
}
