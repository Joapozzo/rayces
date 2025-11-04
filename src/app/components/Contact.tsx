import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useWhatsApp } from "../hooks/useWhatsApp";
import { z } from "zod";

// Esquema de validación con Zod
const contactSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(8, "Teléfono inválido"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});

type ContactFormData = z.infer<typeof contactSchema>;

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
    const { sendWhatsApp } = useWhatsApp();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isValid, setIsValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Validar el formulario en tiempo real
    useEffect(() => {
        const result = contactSchema.safeParse(formData);
        setIsValid(result.success);

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
            result.error.issues.forEach((err) => {
                const field = err.path[0];
                if (field && typeof field === 'string') {
                    fieldErrors[field as keyof ContactFormData] = err.message;
                }
            });
            setErrors(fieldErrors);
        } else {
            setErrors({});
        }
    }, [formData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     // Validar antes de enviar
    //     const result = contactSchema.safeParse(formData);
    //     if (!result.success) {
    //         return;
    //     }

    //     setIsSubmitting(true);
    //     setSubmitStatus('idle');

    //     try {
    //         // Enviar el email a través de la API
    //         const response = await fetch('/api/contact', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Error al enviar el mensaje');
    //         }

    //         // Éxito
    //         setSubmitStatus('success');

    //         // Limpiar el formulario
    //         setFormData({
    //             name: '',
    //             email: '',
    //             phone: '',
    //             message: ''
    //         });

    //         // Resetear el mensaje de éxito después de 5 segundos
    //         setTimeout(() => {
    //             setSubmitStatus('idle');
    //         }, 5000);

    //     } catch (error) {
    //         console.error('Error:', error);
    //         setSubmitStatus('error');

    //         // Resetear el mensaje de error después de 5 segundos
    //         setTimeout(() => {
    //             setSubmitStatus('idle');
    //         }, 5000);
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = contactSchema.safeParse(formData);
        if (!result.success) return;

        const mensaje = `
    👤 *Nombre:* ${formData.name}
    📧 *Email:* ${formData.email}
    📱 *Teléfono:* ${formData.phone}
    
    💬 *Mensaje:*
    ${formData.message}
        `.trim();

        sendWhatsApp(mensaje);

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    const contactInfo: Array<{
        icon: React.ReactElement;
        title: string;
        content: string;
        subtitle: string;
        onClick?: () => void;
    }> = [
            {
                icon: <MapPin className="w-6 h-6" />,
                title: "Showroom",
                content: "Av. Castro Barros 966",
                subtitle: "Lunes a Viernes 9:00 - 18:00"
            },
            {
                icon: <Phone className="w-6 h-6" />,
                title: "WhatsApp",
                content: "+54 351 352-8804",
                subtitle: "Respuesta inmediata",
                onClick: () => sendWhatsApp("¡Hola! Me gustaría consultar sobre sus muebles.")
            },
            {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                content: "mueblesrayces@gmail.com",
                subtitle: "Respuesta en 24hs"
            }
        ];

    return (
        <section ref={sectionRef} id="contacto" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className={`absolute top-1/4 left-1/3 w-36 h-36 bg-green-100 rounded-full opacity-40 transition-all duration-1000 ${isVisible ? 'animate-pulse scale-100' : 'scale-0'
                    }`}></div>
                <div className={`absolute bottom-1/3 right-1/4 w-24 h-24 bg-green-200 rounded-full opacity-30 transition-all duration-1000 ${isVisible ? 'animate-bounce scale-100' : 'scale-0'
                    }`} style={{ animationDelay: '300ms' }}></div>
                <div className={`absolute top-1/3 right-1/3 w-4 h-4 bg-green-400 rounded-full transition-all duration-1000 ${isVisible ? 'animate-ping scale-100' : 'scale-0'
                    }`} style={{ animationDelay: '600ms' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Contact Info */}
                    <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                            Hagamos realidad tu proyecto
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Contáctanos para una consulta personalizada sin compromiso.
                        </p>
                        <div className={`w-16 h-1 bg-green-400 mb-12 rounded transition-all duration-700 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                            }`} style={{ transitionDelay: '400ms' }}></div>

                        <div className="space-y-8">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start space-x-4 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${600 + (index * 150)}ms`
                                    }}
                                >
                                    <div className={`w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group transition-all duration-300 hover:bg-green-700 hover:scale-110 transform ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
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
                    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                        style={{ transitionDelay: '200ms' }}>
                        <div className="space-y-6">
                            {/* Name */}
                            <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: '400ms' }}>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nombre <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 ${errors.name && formData.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Tu nombre"
                                />
                                {errors.name && formData.name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                )}
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                                    style={{ transitionDelay: '500ms' }}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 ${errors.email && formData.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="tu@email.com"
                                    />
                                    {errors.email && formData.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                                    style={{ transitionDelay: '600ms' }}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Teléfono <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 ${errors.phone && formData.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="+54 351 352-8804"
                                    />
                                    {errors.phone && formData.phone && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: '700ms' }}>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Mensaje <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none ${errors.message && formData.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                ></textarea>
                                {errors.message && formData.message && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: '800ms' }}>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!isValid || isSubmitting}
                                    className={`w-full py-4 font-semibold transition-all duration-300 rounded-xl shadow-lg transform group relative overflow-hidden ${isValid && !isSubmitting
                                        ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-xl hover:scale-[1.02] cursor-pointer'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {/* Ripple effect */}
                                    {isValid && !isSubmitting && (
                                        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                                    )}

                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Enviando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{isValid ? 'Enviar consulta' : 'Complete todos los campos'}</span>
                                                <Send className={`w-5 h-5 ${isValid ? 'group-hover:translate-x-1' : ''} transition-transform duration-300`} />
                                            </>
                                        )}
                                    </span>
                                </button>

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                                        ✓ ¡Mensaje enviado con éxito! Te responderemos pronto.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                                        ✗ Error al enviar el mensaje. Por favor intenta nuevamente.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Form footer */}
                        <div className={`mt-6 text-center transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: '900ms' }}>
                            <p className="text-sm text-gray-500">
                                <span className="text-red-500">*</span> Campos obligatorios.
                                Tu mensaje se enviará por WhatsApp.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;