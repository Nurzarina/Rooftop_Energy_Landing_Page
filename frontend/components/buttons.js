
{/* Unable to make transition for CTA button to apply properly from globals.css so I'm making a reusable CTAButton component and style it in className instead. */ }export const CTAButton = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
                bg-black text-white border border-white shadow-md rounded-md
                mt-6 mb-6 px-6 py-3 text-lg transition-all duration-300
                ease-in-out hover:bg-gradient-to-r hover:from-[#fcd913]
                hover:to-white hover:text-black hover:shadow-lg
            "
        >
            {text}
        </button>
    );
}