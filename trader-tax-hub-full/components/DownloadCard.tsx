
export default function DownloadCard({ title, href, description }: { title: string; href: string; description?: string; }) {
  return (
    <a href={href} className="block rounded-lg border p-6 hover:shadow transition">
      <h3 className="font-semibold">{title}</h3>
      {description && <p className="text-slate-600 text-sm mt-2">{description}</p>}
      <p className="text-blue-700 text-sm mt-2">Download</p>
    </a>
  );
}
