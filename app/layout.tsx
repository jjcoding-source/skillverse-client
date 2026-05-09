
import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";

export const metadata: Metadata = {
  title: "SkillVerse - Book Skilled Workers",
  description: "Find trusted professionals for your home services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
