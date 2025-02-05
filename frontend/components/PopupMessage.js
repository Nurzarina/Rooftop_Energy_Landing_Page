import { CTAButton } from "./buttons";

export default function PopupMessage({ message, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-lg">{message}</p>
                <CTAButton text="OK" onClick={onClose} />
            </div>
        </div>
    );
}