import { Open_Sans } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId, title, description } from "./assistant-config";
const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title,
  description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="title">{title}</div>
        {assistantId ? children : <Warnings />}
        {/* <img className="logo" src="/openai.svg" alt="OpenAI Logo" /> */}
        {/* <img className="logo" src={icon} alt="blyng Logo" /> */}
      </body>
    </html>
  );
}
