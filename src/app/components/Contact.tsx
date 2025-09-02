import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

// Hook para detectar cuando un elemento entra en el viewport
const useIntersectionObserver = (threshold: number = 0.2) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);
    
    return [ref, isVisible] as const;
};

// Contact Section Component
const ContactSection: React.FC = () => {
    const [sectionRef, isVisible] = useIntersectionObserver(0.2);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Showroom",
            content: "Av. Principal 1234, Córdoba",
            subtitle: "Lunes a Viernes 9:00 - 18:00"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Teléfono",
            content: "+54 351 123-4567",
            subtitle: "WhatsApp disponible"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            content: "hola@rayces.com",
            subtitle: "Respuesta en 24hs"
        }
    ];

    return (
        <section ref={sectionRef} id="contacto" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className={`absolute top-1/4 left-1/3 w-36 h-36 bg-green-100 rounded-full opacity-40 transition-all duration-1000 ${
                    isVisible ? 'animate-pulse scale-100' : 'scale-0'
                }`}></div>
                <div className={`absolute bottom-1/3 right-1/4 w-24 h-24 bg-green-200 rounded-full opacity-30 transition-all duration-1000 ${
                    isVisible ? 'animate-bounce scale-100' : 'scale-0'
                }`} style={{ animationDelay: '300ms' }}></div>
                <div className={`absolute top-1/3 right-1/3 w-4 h-4 bg-green-400 rounded-full transition-all duration-1000 ${
                    isVisible ? 'animate-ping scale-100' : 'scale-0'
                }`} style={{ animationDelay: '600ms' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Contact Info */}
                    <div className={`transition-all duration-700 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                            Hagamos realidad tu proyecto
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Contáctanos para una consulta personalizada sin compromiso.
                        </p>
                        <div className={`w-16 h-1 bg-green-400 mb-12 rounded transition-all duration-700 transform ${
                            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                        }`} style={{ transitionDelay: '400ms' }}></div>

                        <div className="space-y-8">
                            {contactInfo.map((info, index) => (
                                <div 
                                    key={index}
                                    className={`flex items-start space-x-4 transition-all duration-700 transform ${
                                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                    }`}
                                    style={{ 
                                        transitionDelay: `${600 + (index * 150)}ms` 
                                    }}
                                >
                                    <div className={`w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group transition-all duration-300 hover:bg-green-700 hover:scale-110 transform ${
                                        isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                                    }`}
                                    style={{ 
                                        transitionDelay: `${700 + (index * 150)}ms` 
                                    }}>
                                        <div className="text-white transition-transform duration-300 group-hover:scale-110">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900 mb-1">{info.title}</p>
                                        <p className="text-gray-700 font-medium">{info.content}</p>
                                        <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional CTA */}
                        {/* <div className={`mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-700 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '1200ms' }}>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <p className="font-medium text-gray-900">¿Necesitas ayuda inmediata?</p>
                            </div>
                            <p className="text-gray-600 mt-2 text-sm">
                                Llámanos ahora y te asesoramos sin compromiso sobre tu proyecto.
                            </p>
                        </div> */}
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transition-all duration-700 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={{ transitionDelay: '200ms' }}>
                        <div className="space-y-6">
                            {/* Name and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className={`transition-all duration-500 transform ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: '400ms' }}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div className={`transition-all duration-500 transform ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: '500ms' }}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            {/* Phone and Project Type */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className={`transition-all duration-500 transform ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: '600ms' }}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                                        placeholder="+54 351 123-4567"
                                    />
                                </div>

                                <div className={`transition-all duration-500 transform ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: '700ms' }}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de proyecto</label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                                    >
                                        <option value="">Selecciona...</option>
                                        <option value="living">Living completo</option>
                                        <option value="comedor">Comedor</option>
                                        <option value="dormitorio">Dormitorio</option>
                                        <option value="oficina">Oficina</option>
                                        <option value="personalizado">Mueble personalizado</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className={`transition-all duration-500 transform ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: '800ms' }}>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className={`transition-all duration-500 transform ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: '900ms' }}>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-green-600 text-white py-4 font-semibold hover:bg-green-700 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] group relative overflow-hidden"
                                >
                                    {/* Ripple effect */}
                                    <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                                    
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        <span>Enviar consulta</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Form footer */}
                        <div className={`mt-6 text-center transition-all duration-500 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '1000ms' }}>
                            <p className="text-sm text-gray-500">
                                Al enviar este formulario, aceptas que nos comuniquemos contigo sobre tu proyecto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;