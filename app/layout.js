import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malshi Kulasinghe | Software Engineer Portfolio",
  description:
    "Premium one-page portfolio for a software engineer specializing in full-stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
