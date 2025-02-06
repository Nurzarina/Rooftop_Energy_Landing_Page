import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md fixed w-full top-0 z-50">

                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">Rooftop Energy</div>

                {/* Desktop Navbar */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#features" className="hover:text-[#fcd913] hover:font-bold">Why Solar?</a></li>
                    <li><a href="#services" className="hover:text-[#fcd913] hover:font-bold">Our Services</a></li>
                    <li><a href="#calculator" className="hover:text-[#fcd913] hover:font-bold">Calculator</a></li>
                    <li><a href="#contact" className="hover:text-[#fcd913] hover:font-bold">Contact</a></li>
                </ul>

                {/* Mobile Navbar */}
                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            {/* Mobile Dropdown Menu */}
            <div className={`transition-transform duration-500 ease-in-out bg-white shadow-lg ${isOpen ? "translate-y-0" : "hidden"} absolute w-full top-16 left-0`}>
                <ul className="flex flex-col items-center py-4 space-y-4">
                    <li><a href="#" className="block hover:text-[#fcd913] hover:font-bold" onClick={() => setIsOpen(false)}>Why Solar?</a></li>
                    <li><a href="#services" className="block hover:text-[#fcd913] hover:font-bold" onClick={() => setIsOpen(false)}>Our Services</a></li>
                    <li><a href="#calculator" className="block hover:text-[#fcd913] hover:font-bold" onClick={() => setIsOpen(false)}>Calculator</a></li>
                    <li><a href="#contact" className="block hover:text-[#fcd913] hover:font-bold" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>

    );
}