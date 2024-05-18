import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blyng Click2Trace Alpha Demo",
  description: "Blyng Click2Trace Alpha Demo apps",
  icons: {
    // icon: "/openai.svg",
    icon: "/blyng.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        {/* <img className="logo" src="/openai.svg" alt="OpenAI Logo" /> */}
        <img className="logo" src="/blyng.svg" alt="blyng Logo" />
      </body>
    </html>
  );
}
