import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeineb Khaled | Développeuse Full Stack",
  description: "Portfolio de Zeineb Khaled, développeuse Full Stack et étudiante en Master DevOps & Cloud.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
