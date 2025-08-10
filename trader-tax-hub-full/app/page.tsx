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

import Section from "@/components/Section";
import DownloadCard from "@/components/DownloadCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12 bg-gray-50">
        <h1 className="text-4xl sm:text-5xl font-bold">
          One Hub to Prepare Your Trader Taxes
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Upload broker & exchange statements, clean them automatically, apply
          UK matching rules, and export HMRC-ready packs.
        </p>
        <div className="flex gap-3 justify-center">
          <Link className="bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-800" href="/pricing">
            View Pricing
          </Link>
          <Link className="border px-5 py-3 rounded hover:bg-gray-100" href="/contact">
            Book a Call
          </Link>
        </div>
      </section>

      {/* Free Tools */}
      <Section title="Free Tools & Downloads">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DownloadCard title="Trade Data Conversion Template" href="/downloads/Trade_Data_Conversion_Master_Template.xlsx" description="Paste raw broker CSVs → get clean, HMRC-ready data." />
          <DownloadCard title="Trader Accounting Toolkit" href="/downloads/Trader_Accounting_Toolkit_Calum.xlsx" description="Organise all your trades & expenses in one file." />
          <DownloadCard title="Retail Trader Tax Process (PDF)" href="/downloads/Retail_Trader_Tax_Process_Full_Calum.pdf" description="Full step-by-step guide to filing trader taxes." />
          <DownloadCard title="QuickBooks for Traders (PDF)" href="/downloads/QuickBooks_For_Traders_Calum.pdf" description="Set up QuickBooks specifically for trading income." />
          <DownloadCard title="Income Streams Guide (PDF)" href="/downloads/Expanded_Trading_and_Bookkeeping_Income_Streams.pdf" description="Maximise deductions & understand taxable income." />
          <DownloadCard title="Trader Tax Calculator (Excel)" href="/downloads/Trader_Tax_Calculator.xlsx" description="Import broker statements → get instant P&L and tax summary." />
        </div>
      </Section>

      {/* Premium Tools */}
      <Section title="Premium Tools">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DownloadCard title="Capital Gains Tax Calculator" href="/pricing" description="Apply UK same-day, 30-day, Section 104 rules automatically." />
          <DownloadCard title="Multi-Broker Merge Tool" href="/pricing" description="Combine trades from multiple platforms in one file." />
          <DownloadCard title="Dividend & Interest Tracker" href="/pricing" description="Track and categorise investment income for HMRC." />
        </div>
        <div className="text-center mt-6">
          <Link href="/pricing" className="bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-800">
            Unlock Premium Tools
          </Link>
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How It Works">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-decimal list-inside text-slate-700">
          <li><strong>1. Download Tools:</strong> Get our templates & calculators.</li>
          <li><strong>2. Import Data:</strong> Upload broker/exchange CSV files.</li>
          <li><strong>3. Clean & Match:</strong> Automatic formatting & UK tax rules applied.</li>
          <li><strong>4. Export Reports:</strong> HMRC-ready files in minutes.</li>
        </ol>
      </Section>

      {/* Features */}
      <Section title="Platform Features">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-slate-700">
          <li>Drag-and-drop broker CSVs & wallet exports</li>
          <li>Standardise columns, dates, fees, and currencies</li>
          <li>UK matching rules: same-day, 30-day, Section 104 pooling</li>
          <li>SA108 summaries + working papers</li>
          <li>Secure client portal with file uploads</li>
          <li>Audit trail with reconciliation notes</li>
        </ul>
      </Section>

      {/* Call To Action */}
      <section className="text-center py-12 bg-blue-50">
        <h2 className="text-3xl font-bold mb-4">Ready to simplify your trader taxes?</h2>
        <p className="text-lg text-slate-600 mb-6">Join hundreds of traders using our tools to prepare HMRC-compliant tax returns.</p>
        <Link className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800" href="/pricing">
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
