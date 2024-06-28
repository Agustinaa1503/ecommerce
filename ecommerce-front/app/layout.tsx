import type { Metadata } from "next";
import "./globals.css";
import { titleFont } from "@/config/fonts";
import  Providers   from "@/components/theme/providerNexui";
import { Footer } from "@/components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProviderAuth} from "./ProviderAuth";



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
        <ProviderAuth>
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
        </ProviderAuth>
        
      </body>
    </html>
  );
}