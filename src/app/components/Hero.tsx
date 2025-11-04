import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import CustomButton from "./UI/button";
import { useRouter } from "next/navigation";
import { useWhatsApp } from "../hooks/useWhatsApp";

const HeroSection = () => {
    const router = useRouter();
    const { sendWhatsApp } = useWhatsApp();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/1.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center min-h-screen py-30">
                    {/* Content */}
                    <div className="space-y-8 max-w-4xl">
                        <div className="space-y-6">
                            {/* Badge */}
                            <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 transition-all duration-700 transform ${isLoaded
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                                }`}>
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium text-white tracking-wider uppercase">
                                    Líderes en fabricación de muebles
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-5xl lg:text-7xl font-medium text-white leading-tight">
                                <span className={`block transition-all duration-700 transform ${isLoaded
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-12 opacity-0'
                                    }`}
                                    style={{ transitionDelay: '200ms' }}>
                                    TU FUTURO
                                </span>
                                <span className={`block text-green-400 font-black transition-all duration-700 transform ${isLoaded
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-12 opacity-0'
                                    }`}
                                    style={{ transitionDelay: '400ms' }}>
                                    NUESTRA MISIÓN
                                </span>
                            </h1>

                            {/* Description */}
                            <p className={`text-lg text-gray-100 leading-relaxed max-w-2xl transition-all duration-700 transform ${isLoaded
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                                }`}
                                style={{ transitionDelay: '600ms' }}>
                                Somos una empresa líder en fabricación de muebles de todo
                                tipo, desde muebles de oficina hasta muebles de hogar. Nuestro
                                objetivo es ofrecer productos de alta calidad y durabilidad a
                                nuestros clientes.
                            </p>
                        </div>

                        {/* Button */}
                        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 transform ${isLoaded
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: '800ms' }}>
                            <CustomButton
                                onClick={() => sendWhatsApp('¡Hola! Me gustaría consultar sobre sus muebles.')}
                                className="text-lg max-w-xs px-8 flex items-center space-x-2"
                                variant="secondary"
                                size="md"
                            >
                                <span>Saber más</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </CustomButton>

                            {/* Secondary Action */}
                            <CustomButton
                                className="text-lg max-w-xs px-8 flex items-center space-x-2"
                                variant="outline"
                                size="md"
                                onClick={() => { router.push('/catalogo'); }}
                            >
                                <span>Ver catálogo</span>
                            </CustomButton>
                        </div>

                        {/* Scroll indicator */}
                        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${isLoaded
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: '1200ms' }}>
                            <div className="flex flex-col items-center space-y-2">
                                <span className="text-white/60 text-xs uppercase tracking-wider">
                                    Explorar
                                </span>
                                <div className="w-0.5 h-8 bg-white/40 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-1/4 right-10 w-2 h-2 bg-green-400 rounded-full transition-all duration-1000 ${isLoaded ? 'animate-ping opacity-60' : 'opacity-0'
                }`} style={{ transitionDelay: '1400ms' }}></div>

            <div className={`absolute bottom-1/3 left-10 w-1 h-1 bg-green-300 rounded-full transition-all duration-1000 ${isLoaded ? 'animate-bounce opacity-40' : 'opacity-0'
                }`} style={{ transitionDelay: '1600ms' }}></div>
        </section>
    );
};

export default HeroSection;