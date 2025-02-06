import { CTAButton } from "@/components/buttons";
import { useState } from "react";
import Footer from "../components/footer";
import SolarCalculator from "@/components/SolarCalculator";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [showCalc, setShowCalc] = useState(false);

  const handleShowCalc = () => {
    if (showCalc) {
      setShowCalc(false);
    } else {
      setShowCalc(true);
    }
  };

  return (
    <div id="root">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="mt-6 relative h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/E8CzYLy7SoQ7JAdI1exA9Os4MM.avif')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 px-6">
            <h1 className="font-bold">
              Switch to Solar & Save More
            </h1>
            <p className="mt-2">
              Our solar solutions help you lower energy costs, reduce reliance on the grid, and embrace clean energy.
            </p>
          </div>
        </div>

        {/* Solar Calculator Button */}
        <div className="flex justify-center mt-6">
          <CTAButton text="Use our free solar calculator to get started!" onClick={handleShowCalc} />
        </div>

        {showCalc &&
          <div className="mt-6 transition-all duration-500 ease-in-out">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <SolarCalculator />
            </div>
          </div>
        }
      </main>
      <Footer />
    </div>
  );
}
