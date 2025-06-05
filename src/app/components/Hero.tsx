// Hero Section Component
const HeroSection = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative pt-10">
            {/* Dynamic background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gray-200 rounded-full opacity-30 blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-200 rounded-full opacity-15 blur-xl animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-green-50 rounded-full opacity-25 blur-2xl animate-pulse"></div>

                {/* Floating dots */}
                <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute top-40 right-40 w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-40 left-40 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 section-reveal">
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-green-600 tracking-wider uppercase">Mueblería Premium</p>
                            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                                Diseñamos
                                <span className="block font-bold">desde la raíz</span>
                            </h1>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Creamos muebles únicos trabajando directamente la materia prima.
                            Cada pieza cuenta una historia de calidad excepcional.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2">
                                <span className="font-medium">Explorar catálogo</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded hover:border-green-500 hover:text-green-600 transition-all duration-300 font-medium">
                                Consulta personalizada
                            </button>
                        </div>
                    </div>

                    <div className="relative section-reveal">
                        <div className="aspect-[4/3] rounded overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop"
                                alt="Mueble Premium Rayces"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded shadow-xl border border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">500+</p>
                                    <p className="text-sm text-gray-600">Proyectos únicos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;