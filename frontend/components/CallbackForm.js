import { useState } from "react";
import PopupMessage from "./PopupMessage";

export default function CallbackForm({ quote, onClose, onSubmit }) {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !contact) {
            setError("Please fill in all fields.");
            return;
        }

        onSubmit({ name, contact, ...quote });
        setShowPopup(true);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lgw-96">
                <h2 className="text-lg font-bold mb-4">Request A Callback</h2>
                {error && <p className="text red-500">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
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

                    <p className="color-grey">Note: Your calculated solar quote will be sent along with this callback request form.</p>

                    <div className="flex justify-end space-x-2 mt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-200">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-[#fcd913] text-black rounded hover:bg-black hover:text-white">Submit</button>
                    </div>

                </form>
            </div>

            {/* So that Form is closed and Popup is shown after form is submitted */}
            {showPopup && <PopupMessage message="Thank you for your interest in our product. We will contact you within 3 working days!" onClose={() => { setShowPopup(false); onClose();}} />}
        </div>
    );
}