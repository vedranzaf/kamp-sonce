import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Камп Сонце — Summer Camp in Macedonia",
  description:
    "Камп Сонце is a summer camp in Macedonia for children aged 4–10. Language, nature, and sports under the Macedonian sun.",
  openGraph: {
    title: "Камп Сонце — Summer Camp in Macedonia",
    description: "Language, nature, and sports under the Macedonian sun.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk" className={geist.variable}>
      <body className="font-[--font-geist] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
