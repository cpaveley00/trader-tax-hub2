import Section from "@/components/Section";
import DownloadCard from "@/components/DownloadCard";

export default function ToolsPage() {
  return (
    <div className="space-y-14">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Trader Tools & Downloads</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your one-stop hub for tax preparation templates, calculators, and accounting guides.
        </p>
      </section>

      <Section title="Free Downloads">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DownloadCard
            title="Trade Data Conversion Template"
            href="/downloads/Trade_Data_Conversion_Master_Template.xlsx"
            description="Paste raw broker CSVs → get clean, HMRC-ready data."
          />
          <DownloadCard
            title="Trader Accounting Toolkit"
            href="/downloads/Trader_Accounting_Toolkit_Calum.xlsx"
            description="Track expenses, income, and P&L for your trading."
          />
          <DownloadCard
            title="Retail Trader Tax Process (PDF)"
            href="/downloads/Retail_Trader_Tax_Process_Full_Calum.pdf"
            description="Step-by-step guide to preparing your tax return."
          />
          <DownloadCard
            title="QuickBooks for Traders (PDF)"
            href="/downloads/QuickBooks_For_Traders_Calum.pdf"
            description="How to set up QuickBooks specifically for trading."
          />
          <DownloadCard
            title="Income Streams Guide (PDF)"
            href="/downloads/Expanded_Trading_and_Bookkeeping_Income_Streams.pdf"
            description="Ideas for extra income from trading and bookkeeping."
          />
          <DownloadCard
            title="Trader Tax Calculator (Excel)"
            href="/downloads/Trader_Tax_Calculator.xlsx"
            description="Import broker statements → get instant P&L and tax summary."
          />
        </div>
      </Section>

      <Section title="Coming Soon">
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>Automated capital gains calculator for crypto & stocks</li>
          <li>Secure cloud-based trade journal</li>
          <li>Self-Assessment direct submission to HMRC</li>
        </ul>
      </Section>
    </div>
  );
}


