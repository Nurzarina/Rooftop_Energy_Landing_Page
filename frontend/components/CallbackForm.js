import { useState } from "react";
import axios from "axios";
import PopupMessage from "./PopupMessage";

export default function CallbackForm({ quote, onClose }) {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !contact) {
            setError("Please fill in all fields.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/api/callback", {
                name,
                contact,
                systemSize: quote.systemSize,
                totalCost: quote.totalCost,
                monthlyInstallment: quote.monthlyInstallment,
            });

            if (response.status === 201) {
                setTimeout(() => {
                    setIsLoading(false);
                    setShowPopup(true);
                }, 1000);
            };
        } catch (error) {
            setIsLoading(false);
            console.error("Error submitting request:", error);
            setError(error.response?.data?.error || "Failed to submit. Please try again");
        }

    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="font-bold mb-4">Request A Callback</h3>
                {error && <p className="text red-500">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-7">
                        <label className="block font-medium bold">Name:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block font-medium">Phone or Email:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />
                    </div>

                    <p className="color-grey my-7">Note: Your calculated solar quote will be sent along with this callback request form.</p>

                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-200"
                            disabled={isLoading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-black text-white border border-white shadow-md rounded-md transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#fcd913] hover:to-white hover:text-black hover:shadow-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>
            </div>

            {/* So that Form is closed and Popup is shown after form is submitted */}
            {showPopup && <PopupMessage message="Thank you for your interest in our product. We will contact you within 3 working days!" onClose={() => { setShowPopup(false); onClose(); }} />}
        </div>
    );
}