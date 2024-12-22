import "@/styles/globals.css";
import { birthstone, poppins } from "@/utils/fonts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className}`}>
      <Component {...pageProps} />
    </div>
);
}
