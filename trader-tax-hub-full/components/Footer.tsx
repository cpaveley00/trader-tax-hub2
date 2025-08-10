
export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 grid md:grid-cols-2 gap-4 text-sm text-slate-600">
        <div>© {new Date().getFullYear()} Calum Paveley — UK Accountant for Traders.</div>
        <div className="md:text-right">Educational content only — no investment advice.</div>
      </div>
    </footer>
  );
}
