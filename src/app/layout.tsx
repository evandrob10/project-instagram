import "./globals.css";
import { Viewport } from "next";
//COMPONENTS
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BackTop from "./Components/BackTop";

export const viewport: Viewport = {
  themeColor: '#colorHere',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col justify-between">
        <Header />
        <main className="flex h-[100%] flex-col justify-center items-center w-full relative">
          {children}
          <BackTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
