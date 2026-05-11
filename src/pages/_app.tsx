import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Exo_2, Orbitron } from "next/font/google";
import { ToastContainer } from "react-toastify";

const orbitron = Orbitron({
  variable: "--font-titulo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-padrao",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${orbitron.variable} ${exo2.variable}`}>
    <Component {...pageProps} />
    <ToastContainer />
    </main>
  ) 
}