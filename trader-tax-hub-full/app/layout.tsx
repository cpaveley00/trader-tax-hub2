import "./globals.css";
import Header from "@/components/Header";

export const metadata = { 
  title: "Trader Tax Hub", 
  description: "UK trader tax tools" 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* This shows your navigation and FX Converter link */}
        {children}
      </body>
    </html>
  );
}
