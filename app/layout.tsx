import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId, title, description, icon } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title,
  description,
  icons: {
    icon,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        {/* <img className="logo" src="/openai.svg" alt="OpenAI Logo" /> */}
        <img className="logo" src={icon} alt="blyng Logo" />
      </body>
    </html>
  );
}
