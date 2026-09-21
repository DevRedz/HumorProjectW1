import "./globals.css";

export const metadata = {
  title: "Test Data | Humor Project",
  description: "A view of the test data table.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <p className="brand-mark">Humor Project</p>
            <span className="connection-status">Live table</span>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
