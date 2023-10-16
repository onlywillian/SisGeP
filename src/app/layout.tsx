import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from '@/contexts/authContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SisGeP",
  description: "Sistema de Gerenciamento de Patrimônio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </AuthProvider>
  );
}
