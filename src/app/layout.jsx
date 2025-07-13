import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nafees Cake House",
  description: "Get your customized orders",
  icons: {
    icon: '/bakery/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        <div className="bg-gradient-to-r from-pink-200 to-pink-100 md:bg-bg-gradient-to-r from-pink-600 to-pink-500">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
