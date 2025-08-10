"use client";
import { useState } from "react";

export default function FXConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const convertCurrency = async () => {
    setErr(null);
    setResult(null);
    if (!amount) { setErr("Enter an amount."); return; }
    setLoading(true);
    try {
      const res = await fetch(
        `/api/fx?from=${encodeURIComponent(currency)}&to=GBP&amount=${encodeURIComponent(amount)}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      if (!res.ok || data?.result == null) throw new Error("No rate returned");
      setResult(`${amount} ${currency} = £${Number(data.result).toFixed(2)}`);
    } catch (e) {
      setErr("Error fetching exchange rate. Try again.");
    } finally {
      setLoading(false);
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
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Converting..." : "Convert to GBP"}
      </button>

      {err && <p className="text-red-600 mt-3 text-sm">{err}</p>}
      {result && <p className="mt-4 text-lg font-semibold">{result}</p>}
      <p className="text-xs text-slate-500 mt-6">
        Rates via exchangerate.host. For HMRC filing, use official EOD rates; this is a quick guide value.
      </p>
    </div>
  );
}

