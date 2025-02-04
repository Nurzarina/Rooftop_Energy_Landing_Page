import "../styles/globals.css";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  weight: "700",                             // For bold font.
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: "600",                             // For semi-bold font.
  subsets: ["latin"],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }) {
  return (
    // Used .className instead of .variable so the font applies directly to elements.
    <div className={`${montserrat.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
