import CallbackForm from './CallbackForm';
import { useState, useRef } from 'react';
import { CTAButton } from './buttons';

export default function SolarCalculator() {
    const [bill, setBill] = useState("");
    const [state, setState] = useState("");                                // For optional state selection.
    const [result, setResult] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const printRef = useRef(null);                                        // Reference for the printable section.

    const TNB_TARIFF = 0.509;                                             // RM per kWh.
    const SOLAR_COST = 3000;                                              // RM per kWp.
    const PEAK_SUN_HOURS = 3;
    const INTEREST_RATE = 0.05;                                          // 5% annual interest.
    const TARGET_SAVINGS = 0.7;                                          // 30% savings.

    const handleCalculate = () => {
        if (!bill || isNaN(bill) || bill <= 0) {
            alert("Please enter a valid monthly bill amount.");
            return;
        }

        //  System Sizing
        const monthlyEnergy = bill / TNB_TARIFF;
        const dailyEnergy = monthlyEnergy / 30;
        const systemSize = dailyEnergy / (PEAK_SUN_HOURS * 0.8);

        // Cost Calculation
        const totalSystemCost = systemSize * SOLAR_COST;

        // Loan Payment Calculation
        const targetMonthlyPayment = bill * TARGET_SAVINGS;
        const r = INTEREST_RATE / 12;                                    // Monthly interest rate.
        const n = 12 * 10;                                              // Assuming 10-year loan term.
        const monthlyInstallment =
            (totalSystemCost * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        // For storing quote result
        setResult({
            systemSize: systemSize.toFixed(2),
            totalCost: totalSystemCost.toFixed(2),
            monthlyInstallment: monthlyInstallment.toFixed(2),
        });
    };

    const handlePrint = () => {
        const printContent = printRef.current;
        if (printContent) {
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContent.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
        };
    };

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <div>
            <h2>Solar Savings Calculator</h2>

            {/* Monthly Bill Input */}
            <label className="block mt-4">Monthly TNB Bill (RM):</label>
            <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="border p-2 w-full rounded"
                placeholder="Enter your bill amount"
            />

            {/* Location Dropdown (Optional) */}
            <label className="block mt-4">Location (Optional):</label>
            <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="border p-2 w-full rounded"
            >
                <option value="">Select a state</option>
                <option value="johor">Johor</option>
                <option value="kedah">Kedah</option>
                <option value="kelantan">Kelantan</option>
                <option value="malacca">Malacca</option>
                <option value="negerisembilan">Negeri Sembilan</option>
                <option value="pahang">Pahang</option>
                <option value="penang">Penang</option>
                <option value="perak">Perak</option>
                <option value="perlis">Perlis</option>
                <option value="sabah">Sabah</option>
                <option value="sarawak">Sarawak</option>
                <option value="selangor">Selangor</option>
                <option value="terengganu">Terengganu</option>
            </select>

            {/* Calculate Button */}
            <CTAButton text="Calculate Savings" onClick={handleCalculate} />

            {/* Display Results */}
            {result && (
                <div>
                    <div ref={printRef} className='my-7 py-10 bg-white rounded shadow'>
                        <h3 className='text-lg font semibold mb-6'>Quote Details</h3>
                        <p><b>Estimated System Size:</b> {result.systemSize} kWp</p>
                        <p><b>Total Sytem Cost:</b> RM {result.totalCost}</p>
                        <p><b>Estimated Monthly Installment:</b> RM {result.monthlyInstallment}</p>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                    {/* Print Button */}
                    <CTAButton text="Print Quote" onClick={handlePrint} />
                    {/* Request Callback Button */}
                    <CTAButton text="Request Callback" onClick={handleShowForm} />
                    </div>
                </div>
            )}

            {/* To show Callback Form when Callback Button is clicked */}
            {showForm &&
                <CallbackForm
                    quote={result}
                    onClose={() => setShowForm(false)}
                    onSubmit={(data) => console.log("Submitted", data)}
                />
            }
        </div>
    );
}