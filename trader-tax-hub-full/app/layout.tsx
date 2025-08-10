export const metadata = {
  title: "Trader Tax Hub",
  description: "UK trader tax tools"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0}}>{children}</body>
    </html>
  );
}
