import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ollama Chatbot",
  description: "chatbot using local ollama. model used llama3.2",
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
