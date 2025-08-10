
import Link from "next/link";
export default function Header() {
  const nav = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/pricing", label: "Pricing" },
    { href: "/portal", label: "Client Portal" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" }
  ];
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-bold">Trader Tax Hub</Link>
        <nav className="flex gap-4 text-sm">{nav.map(n => <Link key={n.href} href={n.href} className="hover:text-blue-700">{n.label}</Link>)}</nav>
      </div>
    </header>
  );
  <Link href="/fx">FX Converter</Link>
}
