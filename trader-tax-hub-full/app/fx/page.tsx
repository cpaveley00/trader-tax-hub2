"use client";
import { useState } from "react";

export default function FXConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<string | null>(null);

  const convertCurrency = async () => {
    if (!amount) return;
    try {
      const res = await fetch(`https://api.exchangerate.host/convert?from=${currency}&to=GBP&amount=${amount}`);
      const data = await res.json();
      setResult(`${amount} ${currency} = £${data.result.toFixed(2)}`);
    } catch (err) {
      console.error(err);
      setResult("Error fetching exchange rate.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Live FX Rate Tool</h1>
      <p className="text-gray-600 mb-6">Convert foreign trades into GBP instantly using live exchange rates.</p>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border px-4 py-2 w-full mb-4 rounded"
      />

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border px-4 py-2 w-full mb-4 rounded"
      >
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="JPY">JPY - Japanese Yen</option>
        <option value="AUD">AUD - Australian Dollar</option>
        <option value="CAD">CAD - Canadian Dollar</option>
      </select>

      <button
        onClick={convertCurrency}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Convert to GBP
      </button>

      {result && <p className="mt-4 text-lg font-semibold">{result}</p>}
    </div>
  );
}

