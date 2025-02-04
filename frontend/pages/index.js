import { CTAButton } from "@/components/buttons";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div id="root">
      <main>

        <div className="hero-section">
          <h2>See how much you can save with solar!</h2>
          <div className="sun-hover p-6 rounded-lg">
            <div className="my-4 mx-4 p-2">
              <p>Ever wonder how much you could have saved if you go solar? </p>
              <p>Calculate your solar savings and financing options now!</p>
            </div>
            <CTAButton text="Start Your Calculation" onClick={() => alert("Calculator Button Clicked!")} />
          </div>

          <div className="mt-5">
            <h2>Ready to move to solar? We can help you get started!</h2>
            <div className="sun-hover p-6 rounded-lg">
              <div className="my-4 mx-4 p-2">
                <p>Rooftop Energy is the solar energy division of the Dynasynergy Group.</p>
                <br></br>
                <p>With 8.8MWp installed and the backing of an established corporate group, we are focused on making sustainable energy accessible to all Malaysians!</p>
              </div>
              <CTAButton text="Explore Our Service" onClick={() => alert("Service Button clicked!")} />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
