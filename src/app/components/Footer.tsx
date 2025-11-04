import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-light tracking-wide">
                            Ray<span className="font-bold">ces</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Diseñamos y construimos muebles únicos desde la materia prima,
                            creando piezas que durarán generaciones.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/mueblesrayces"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 rounded-lg flex items-center justify-center transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61557195388117"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Productos</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Mesas
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Sillas
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Ratonas
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Almacenaje
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Contacto</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MdLocationOn className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Showroom</p>
                                    <p>Av. Castro Barros 966</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MdLocationOn className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Fábrica</p>
                                    <p>Culpina 260</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MdEmail className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <a
                                    href="mailto:mueblesrayces@gmail.com"
                                    className="hover:text-white transition-colors"
                                >
                                    mueblesrayces@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-center items-center text-gray-400">
                <p>&copy; 2025 Rayces. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;