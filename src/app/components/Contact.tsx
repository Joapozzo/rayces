import { useState } from "react";

// Contact Section Component
const ContactSection: React.FC = () => {
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

    return (
        <section id="contacto" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Dynamic background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-green-100 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="section-reveal">
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                            Hagamos realidad tu proyecto
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Contáctanos para una consulta personalizada sin compromiso.
                        </p>
                        <div className="w-16 h-1 bg-green-400 mb-8 rounded"></div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Showroom</p>
                                    <p className="text-gray-600">Av. Principal 1234, Córdoba</p>
                                    <p className="text-sm text-gray-500 mt-1">Lunes a Viernes 9:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Teléfono</p>
                                    <p className="text-gray-600">+54 351 123-4567</p>
                                    <p className="text-sm text-gray-500 mt-1">WhatsApp disponible</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Email</p>
                                    <p className="text-gray-600">hola@rayces.com</p>
                                    <p className="text-sm text-gray-500 mt-1">Respuesta en 24hs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded shadow-sm border border-gray-200 p-8 section-reveal">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                        placeholder="+54 351 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de proyecto</label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-4 font-medium hover:bg-green-700 transition-colors duration-300 rounded"
                            >
                                Enviar consulta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;