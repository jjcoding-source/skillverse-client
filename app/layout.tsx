
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillVerse - Book Skilled Workers",
  description: "Connect with trusted plumbers, electricians, cleaners & more",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}