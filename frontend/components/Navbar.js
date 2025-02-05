export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md fixed w-full top-0 z-50">
            <div className="text-2xl font-bold text-gray-800">Rooftop Energy</div>
            <ul className="flex space-x-6">
                <li><a href="#features" className="hover:text-[#fcd913] hover:font-bold">Why Solar?</a></li>
                <li><a href="#services" className="hover:text-[#fcd913] hover:font-bold">Our Services</a></li>
                <li><a href="#calculator" className="hover:text-[#fcd913] hover:font-bold">Calculator</a></li>
                <li><a href="#contact" className="hover:text-[#fcd913] hover:font-bold">Contact</a></li>
            </ul>
        </nav>

    );
}