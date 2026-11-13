import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupani International Academy | Houston, Texas",
  description:
    "An inclusive IB learning community in Houston where curiosity, compassion, and global perspectives help every learner thrive.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
