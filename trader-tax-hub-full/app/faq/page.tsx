
export default function FAQ() {
  const faqs = [
    { q: "Is this investment advice?", a: "No. This site provides tax preparation workflows and tools only." },
    { q: "Do you support crypto?", a: "Yes — same-day/30-day/pooling with wallet transfer treatment and staking summaries." },
    { q: "International clients?", a: "We support UK tax worldwide (residency permitting) and provide expat add-ons." },
    { q: "Do you automate CGT fully?", a: "Templates now; full calculator planned. Manual review stays in the loop for accuracy." }
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
