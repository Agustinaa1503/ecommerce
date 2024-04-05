import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header";
import { titleFont } from "@/config/fonts";
import  Providers   from "@/components/theme/provider";
import MainMenu from "@/components/ui/top-menu/main-menu";
import MenuMobile from "@/components/ui/top-menu/menu-mobile";
import { Footer } from "@/components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const metadata: Metadata = {
  title: "Cotillón Libertad", 
  description: "Tienda Online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="es" suppressHydrationWarning>
      <body className={titleFont.className}>
        <Providers 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          <ToastContainer />
        {/* <Header /> */}
        {children}
          <Footer />
        </Providers>
        
      </body>
    </html>
  );
}