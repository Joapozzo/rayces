"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isProductPage = pathname?.startsWith('/product/');
    // const isCatalogPage = pathname === '/catalogo';
    const isOtherPage = (pathname !== '/' && pathname !== '/catalogo');
    
    const shouldHaveBackground = isScrolled || isProductPage || isOtherPage;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    // Alternar menú móvil
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            shouldHaveBackground 
                ? 'bg-white/95 backdrop-blur-md shadow-sm' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-25">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="block">
                            <Image
                                src={shouldHaveBackground ? "/logos/logo-1.png" : "/logos/logo-2.png"}
                                alt="Rayces Logo"
                                width={120}
                                height={50}
                                className="h-15 md:h-20 w-auto transition-all duration-300"
                                priority
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        <a 
                            href="/#inicio" 
                            className={`transition-colors font-medium hover:text-green-400 ${
                                shouldHaveBackground ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            Inicio
                        </a>
                        <a 
                            href="/catalogo" 
                            className={`transition-colors font-medium hover:text-green-400 ${
                                shouldHaveBackground ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            Catálogo
                        </a>
                        <a 
                            href="/#productos" 
                            className={`transition-colors font-medium hover:text-green-400 ${
                                shouldHaveBackground ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            Productos
                        </a>
                        {/* <a 
                            href="/#nosotros" 
                            className={`transition-colors font-medium hover:text-green-400 ${
                                shouldHaveBackground ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            Nosotros
                        </a> */}
                        <a 
                            href="/#contacto" 
                            className={`transition-colors font-medium hover:text-green-400 ${
                                shouldHaveBackground ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            Contacto
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className={`md:hidden p-2 transition-colors duration-300 ${
                            shouldHaveBackground ? 'text-gray-700' : 'text-white'
                        }`}
                        aria-label="Toggle mobile menu"
                    >
                        <div className="relative w-6 h-5 flex flex-col justify-center">
                            {/* Hamburger Icon */}
                            <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${
                                isMobileMenuOpen ? 'rotate-45 top-[9px]' : 'top-0'
                            }`}></span>
                            <span className={`absolute left-0 top-[9px] w-6 h-0.5 bg-current transition-all duration-300 ${
                                isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                            }`}></span>
                            <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${
                                isMobileMenuOpen ? '-rotate-45 top-[9px]' : 'top-[18px]'
                            }`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMobileMenuOpen 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                }`}>
                    <div className={`py-6 space-y-4 border-t ${
                        shouldHaveBackground ? 'border-gray-200' : 'border-white/20'
                    }`}>
                        <a 
                            href="/#inicio"
                            onClick={handleLinkClick}
                            className={`block px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-green-50 hover:text-green-600 rounded-lg ${
                                shouldHaveBackground ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/10'
                            }`}
                        >
                            Inicio
                        </a>
                        <a 
                            href="/catalogo"
                            onClick={handleLinkClick}
                            className={`block px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-green-50 hover:text-green-600 rounded-lg ${
                                shouldHaveBackground ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/10'
                            }`}
                        >
                            Catálogo
                        </a>
                        <a 
                            href="/#productos"
                            onClick={handleLinkClick}
                            className={`block px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-green-50 hover:text-green-600 rounded-lg ${
                                shouldHaveBackground ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/10'
                            }`}
                        >
                            Productos
                        </a>
                        <a 
                            href="/#nosotros"
                            onClick={handleLinkClick}
                            className={`block px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-green-50 hover:text-green-600 rounded-lg ${
                                shouldHaveBackground ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/10'
                            }`}
                        >
                            Nosotros
                        </a>
                        <a 
                            href="/#contacto"
                            onClick={handleLinkClick}
                            className={`block px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-green-50 hover:text-green-600 rounded-lg ${
                                shouldHaveBackground ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/10'
                            }`}
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;