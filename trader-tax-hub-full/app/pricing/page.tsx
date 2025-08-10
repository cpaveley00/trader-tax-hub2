
export default function Pricing() {
  const tiers = [
    { name: "CGT Lite", price: "£295–£350", features: ["≤1 broker", "≤500 disposals", "SA108 + SA100", "1 reconciliation"] },
    { name: "Active Trader", price: "£495–£650", features: ["≤3 brokers", "≤5,000 disposals", "Quarterly hygiene", "Crypto pooling (≤2)"] },
    { name: "Crypto Heavy", price: "£750–£995", features: ["≤5 exchanges", "≤10,000 disposals", "Wallet transfers", "Staking summary"] },
    { name: "Pro / Complex", price: "Custom", features: ["HFT & multi‑asset", "Expat/residence", "Unlimited platforms", "Priority support"] }
  ];
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="text-2xl font-bold mt-2">{t.price}<span className="text-base font-normal text-slate-500">/return</span></p>
            <ul className="mt-4 list-disc list-inside text-slate-700">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <form action="/api/checkout" method="POST" className="mt-4">
              <input type="hidden" name="tier" value={t.name} />
              <button className="bg-blue-700 text-white px-4 py-2 rounded w-full" type="submit">Choose {t.name}</button>
            </form>
            <p className="text-xs text-slate-500 mt-2">Checkout uses a placeholder endpoint. Set STRIPE_CHECKOUT_URL in .env to enable.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
