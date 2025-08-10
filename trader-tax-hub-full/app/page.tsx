import Section from "@/components/Section";
import DownloadCard from "@/components/DownloadCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-14">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">One hub to prepare your trader taxes</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Upload broker & exchange statements, clean them automatically, apply UK matching rules, and export HMRC-ready packs.
        </p>
        <div className="flex gap-3 justify-center">
          <Link className="bg-blue-700 text-white px-5 py-3 rounded" href="/pricing">View Pricing</Link>
          <Link className="border px-5 py-3 rounded" href="/contact">Book a Call</Link>
        </div>
      </section>

      {/* Downloads Section */}
      <Section title="Downloads & Tools">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DownloadCard
            title="Trade Data Conversion Template"
            href="/downloads/Trade_Data_Conversion_Master_Template.xlsx"
            description="Paste raw broker CSVs → get clean, HMRC-ready data."
          />
          <DownloadCard
            title="Trader Accounting Toolkit"
            href="/downloads/Trader_Accounting_Toolkit_Calum.xlsx"
          />
          <DownloadCard
            title="Retail Trader Tax Process (PDF)"
            href="/downloads/Retail_Trader_Tax_Process_Full_Calum.pdf"
          />
          <DownloadCard
            title="QuickBooks for Traders (PDF)"
            href="/downloads/QuickBooks_For_Traders_Calum.pdf"
          />
          <DownloadCard
            title="Income Streams Guide (PDF)"
            href="/downloads/Expanded_Trading_and_Bookkeeping_Income_Streams.pdf"
          />
          <DownloadCard
            title="Trader Tax Calculator (Excel)"
            href="/downloads/Trader_Tax_Calculator.xlsx"
            description="Import broker statements → get instant P&L and tax summary."
          />
        </div>
      </Section>

      {/* Features Section */}
      <Section title="Features">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-slate-700">
          <li>Data ingestion: drag-and-drop broker CSVs & wallet exports</li>
          <li>Cleaning & mapping: standardise columns, dates, fees, currencies</li>
          <li>UK matching rules: same-day, 30-day, Section 104 pooling</li>
          <li>HMRC-ready outputs: SA108 summaries + working papers</li>
          <li>Client portal: secure uploads & task checklists</li>
          <li>Audit trail: reconciliation notes & approvals</li>
        </ul>
      </Section>
    </div>
  );
}

