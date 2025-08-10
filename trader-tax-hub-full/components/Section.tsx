
export default function Section({ title, children }: { title: string; children: React.ReactNode; }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}
