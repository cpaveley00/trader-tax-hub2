
"use client";
import { useState } from "react";

export default function Portal() {
  const [ok, setOk] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const code = (e.currentTarget.elements.namedItem("code") as HTMLInputElement).value;
    const res = await fetch("/api/portal-auth", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ code }) });
    const json = await res.json();
    if (res.ok) setOk(true); else setMsg(json.error || "Invalid code");
  }

  async function onUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem("file") as HTMLInputElement);
    if (!input?.files?.[0]) return;
    const fd = new FormData();
    fd.append("file", input.files[0]);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const json = await res.json();
    alert(res.ok ? "Uploaded!" : json.error || "Failed");
    e.currentTarget.reset();
  }

  if (!ok) {
    return (
      <div className="max-w-sm space-y-4">
        <h1 className="text-3xl font-bold">Client Portal</h1>
        <p className="text-slate-600">Enter your access code to upload statements and view tasks.</p>
        <form onSubmit={onAuth} className="space-y-3">
          <input className="w-full border rounded p-3" placeholder="Access code" name="code" />
          <button className="bg-blue-700 text-white px-4 py-2 rounded" type="submit">Enter</button>
        </form>
        {msg && <p className="text-sm text-red-600">{msg}</p>}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-3xl font-bold">Client Portal</h1>
      <div className="border rounded p-4">
        <h2 className="font-semibold">Upload statements</h2>
        <form onSubmit={onUpload} className="space-y-3 mt-3">
          <input type="file" name="file" accept=".csv,.pdf,.xlsx" className="w-full border rounded p-2" />
          <button className="border px-4 py-2 rounded" type="submit">Upload</button>
        </form>
      </div>
      <div className="border rounded p-4">
        <h2 className="font-semibold">Tasks</h2>
        <ul className="list-disc list-inside text-sm text-slate-700 mt-2">
          <li>Sign engagement letter</li>
          <li>Upload broker CSVs (6 Apr – 5 Apr)</li>
          <li>Provide dividend/interest statements</li>
        </ul>
      </div>
    </div>
  );
}
