import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Missy Bakes",
  description: "Delicious baked goods and desserts"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bakery-50 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
