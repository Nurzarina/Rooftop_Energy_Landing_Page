export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="text-center">
                <p className="text-sm font-bold">Rooftop Energy © 2024</p>

                <p className="mt-4 font-bold">Contact Us:</p>

                {/* Contact List */}
                <ul className="text-sm space-y-2 mt-2 md:space-y-0 md:flex md: justify-center md:space-x-6">
                    <li>
                        <p>Sales: <a href="mailto:sales@rooftop.my" className="company-contact-info">sales@rooftop.my</a></p>
                    </li>
                    <li>
                        <p>Partnerships: <a href="mailto:partnerships@rooftop.my" className="company-contact-info">partnerships@rooftop.my</a></p>
                    </li>
                    <li>
                        <p>Investors: <a href="mailto:investors@rooftop.my" className="company-contact-info">investors@rooftop.my</a></p>
                    </li>
                </ul>
                <br></br>
            </div>
        </footer>
    );
}