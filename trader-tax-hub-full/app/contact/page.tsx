
"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    setStatus("Sending...");
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const json = await res.json();
    setStatus(res.ok ? "Sent! I'll reply shortly." : json.error || "Something went wrong.");
    form.reset();
  }

  async function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("emailSub") as HTMLInputElement).value;
    const res = await fetch("/api/subscribe", { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ email }) });
    const json = await res.json();
    alert(res.ok ? "Subscribed!" : json.error || "Failed to subscribe");
    e.currentTarget.reset();
  }

  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-slate-600 mt-2">Email: <a href="mailto:calumpaveley@hotmail.com" className="text-blue-700 underline">calumpaveley@hotmail.com</a></p>
        <form onSubmit={onSubmit} className="space-y-3 mt-6">
          <input className="w-full border rounded p-3" placeholder="Your name" name="name" required />
          <input className="w-full border rounded p-3" placeholder="Your email" name="email" type="email" required />
          <textarea className="w-full border rounded p-3" rows={6} placeholder="How can I help?" name="message" required />
          <button className="bg-blue-700 text-white px-4 py-2 rounded">Send</button>
        </form>
        {status && <p className="text-sm mt-2">{status}</p>}
      </div>
      <div>
        <h2 className="text-xl font-semibold">Subscribe for updates</h2>
        <p className="text-slate-600 text-sm">Get checklists, guides, and deadline reminders.</p>
        <form onSubmit={onSubscribe} className="space-y-3 mt-4">
          <input className="w-full border rounded p-3" placeholder="Your email" name="emailSub" type="email" required />
          <button className="border px-4 py-2 rounded">Subscribe</button>
        </form>
        <div className="mt-8 border rounded p-4">
          <h3 className="font-semibold">Compliance & Security</h3>
          <ul className="list-disc list-inside text-sm text-slate-700 mt-2">
            <li>AML/KYC onboarding and engagement letters for all clients.</li>
            <li>ICO data protection fee paid; encrypted storage for uploads.</li>
            <li>HMRC Agent Services Account filing; HMRC-ready computation packs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
