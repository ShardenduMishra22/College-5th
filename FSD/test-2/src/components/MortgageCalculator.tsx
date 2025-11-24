import { useState } from 'react';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTerm, setLoanTerm] = useState<string>('');
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    if (principal && rate && term) {
      const x = Math.pow(1 + rate, term);
      const monthly = (principal * rate * x) / (x - 1);
      setMonthlyPayment(monthly.toFixed(2));
    }
  };

  return (
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      
      <div className="form-group">
        <label>Loan Amount ($):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="300000"
        />
      </div>

      <div className="form-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="3.5"
        />
      </div>

      <div className="form-group">
        <label>Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder="30"
        />
      </div>

      <button onClick={calculateMortgage}>Calculate</button>

      {monthlyPayment && (
        <div className="result">
          <h3>Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
}
