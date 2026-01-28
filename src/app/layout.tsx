import "./globals.css";

export const metadata = {
  title: "Humor Project",
  description: "A Next.js skeleton for the Humor Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
          <h1>Humor Project</h1>
        </header>
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
