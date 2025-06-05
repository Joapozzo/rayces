"use client";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <h1 className="text-3xl font-light tracking-wide text-gray-900">
                            Ray<span className="font-bold">ces</span>
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center space-x-12">
                        <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Inicio</a>
                        <a href="#productos" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Productos</a>
                        <a href="#ambientes" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Ambientes</a>
                        <a href="#proceso" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Proceso</a>
                        <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Contacto</a>
                    </div>
                    <button className="md:hidden text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;