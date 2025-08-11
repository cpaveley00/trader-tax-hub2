
export default function FAQ() {
  const faqs = [
    { q: "Is this investment advice?", a: "No. This site provides tax preparation workflows and tools only." },
    { q: "Do you support crypto?", a: "Yes — same-day/30-day/pooling with wallet transfer treatment and staking summaries." },
    { q: "International clients?", a: "We support UK tax worldwide (residency permitting) and provide expat add-ons." },
    { q: "Do you automate CGT fully?", a: "Templates now; full calculator planned. Manual review stays in the loop for accuracy." },

    // New FX Converter FAQs
    { q: "What does the FX Converter do?", a: "It converts trade amounts from foreign currencies (USD, EUR, JPY, etc.) into GBP instantly, using live exchange rates from ExchangeRate.host." },
    { q: "How accurate are the FX Converter rates?", a: "Rates are pulled in real-time from multiple trusted financial sources." },
    { q: "Can I use the FX Converter for historical rates?", a: "Currently it uses live rates, but a historical FX rate tool is coming soon for HMRC compliance." },

    // New Downloads & Tools FAQs
    { q: "What files can I download?", a: "You can access free Excel templates, tax calculators, QuickBooks guides, and more from our Tools page." },
    { q: "How do I use the Trader Tax Calculator?", a: "Import your broker statement into the calculator to automatically calculate P&L, apply UK tax rules, and generate a tax return summary." }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded p-4">
            <p className="font-semibold">{f.q}</p>
            <p className="text-slate-700">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

