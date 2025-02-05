import { CTAButton } from "@/components/buttons";
import { useState } from "react";
import Footer from "../components/footer";
import SolarCalculator from "@/components/SolarCalculator";

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
      <main>
        <h1>Looking to become more sustainable and environmental-friendly?</h1>

        <CTAButton text="Use our free solar calculator to get started!" onClick={handleShowCalc} />

        {showCalc &&
          <div className="mt-6">
            <div className="brand-bg p-6 rounded-lg">
              <SolarCalculator />
            </div>
          </div>
        }
      </main>
      <Footer />
    </div>
  );
}
