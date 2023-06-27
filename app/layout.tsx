import "./globals.css";

export const metadata = {
  title: "Trello 2.0",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">{children}</body>
    </html>
  );
}
