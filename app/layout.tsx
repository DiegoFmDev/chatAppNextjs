import "./globals.css";

export const metadata = {
  title: "ChatApp",
  description: "Un chat rápido y casual sin necesidad de registro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
