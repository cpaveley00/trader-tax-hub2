
"use client";
import { useState } from "react";

export default function Tools() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function onUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem("csv") as HTMLInputElement);
    if (!input?.files?.[0]) return;
    const formData = new FormData();
    formData.append("file", input.files[0]);
    setMessage("Uploading...");
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const json = await res.json();
    if (res.ok) {
      setMessage(json.message);
      setFileName(json.fileName);
    } else {
      setMessage(json.error || "Upload failed");
    }
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold">Tools</h1>
      <p className="text-slate-600">Demo upload (stores file temporarily on server). In production, connect S3 or another storage.</p>
      <form onSubmit={onUpload} className="border rounded p-4 space-y-3">
        <input type="file" name="csv" accept=".csv" className="w-full border rounded p-2" />
        <button className="bg-blue-700 text-white px-4 py-2 rounded" type="submit">Upload CSV</button>
      </form>
      {message && <p className="text-sm">{message}</p>}
      {fileName && <p className="text-sm text-slate-600">Saved as: {fileName}</p>}
    </div>
  );
}
