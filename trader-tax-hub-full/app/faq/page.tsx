
"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "Is this investment advice?", a: "No. This site provides tax preparation workflows and tools only." },
    { q: "Do you support crypto?", a: "Yes — same-day/30-day/pooling with wallet transfer treatment and staking summaries." },
    { q: "International clients?", a: "We support UK tax worldwide (residency permitting) and provide expat add-ons." },
    { q: "Do you automate CGT fully?", a: "Templates now; full calculator planned. Manual review stays in the loop for accuracy." },

    // FX Converter FAQs
    { q: "What does the FX Converter do?", a: "It converts trade amounts from foreign currencies (USD, EUR, JPY, etc.) into GBP instantly, using live exchange rates from ExchangeRate.host." },
    { q: "How accurate are the FX Converter rates?", a: "Rates are pulled in real-time from multiple trusted financial sources." },
    { q: "Can I use the FX Converter for historical rates?", a: "Currently it uses live rates, but a historical FX rate tool is coming soon for HMRC compliance." },

    // Downloads & Tools FAQs
    { q: "What files can I download?", a: "You can access free Excel templates, tax calculators, QuickBooks guides, and more from our Tools page." },
    { q: "How do I use the Trader Tax Calculator?", a: "Import your broker statement into the calculator to automatically calculate P&L, apply UK tax rules, and generate a tax return summary." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded">
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full text-left px-4 py-3 flex justify-between items-center font-semibold"
            >
              {f.q}
              <span className="text-gray-500">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-3 text-slate-700">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


