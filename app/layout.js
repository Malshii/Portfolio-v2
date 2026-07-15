import { Toaster } from "react-hot-toast";
import TopNav from "./components/navigation/TopNav";
import "./globals.css";

export const metadata = {
  title: "Malshi Kulasinghe | Software Engineer Portfolio",
  description:
    "Premium one-page portfolio for a software engineer specializing in full-stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <TopNav />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
          }}
        />
      </body>
    </html>
  );
}
