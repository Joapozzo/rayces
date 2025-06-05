import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

// Tipografía principal - Inter (moderna, clean, perfecta legibilidad)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Mejora performance
  weight: ["300", "400", "500", "600", "700"],
});

// Tipografía secundaria - Poppins (para títulos especiales si quieres)
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", 
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rayces - Mueblería Premium | Diseñamos desde la raíz",
  description: "Creamos muebles únicos trabajando directamente la materia prima. Cada pieza cuenta una historia de calidad excepcional.",
  keywords: "muebles, diseño, artesanal, premium, madera, córdoba",
  authors: [{ name: "Rayces" }],
  openGraph: {
    title: "Rayces - Mueblería Premium",
    description: "Diseñamos muebles únicos desde la raíz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}