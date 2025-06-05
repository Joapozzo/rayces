// Ambientes Section Component
const AmbientesSection: React.FC = () => {
    const ambientes = [
        {
            title: "Living",
            subtitle: "Espacios de relajación",
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=450&fit=crop"
        },
        {
            title: "Comedor",
            subtitle: "Momentos de reunión",
            image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&h=450&fit=crop"
        },
        {
            title: "Dormitorio",
            subtitle: "Descanso premium",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=450&fit=crop"
        },
        {
            title: "Oficina",
            subtitle: "Productividad elegante",
            image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=450&fit=crop"
        }
    ];

    return (
        <section id="ambientes" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-reveal">
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Ambientes inspiradores
                    </h2>
                    <p className="text-xl text-gray-600">
                        Descubre cómo transformamos espacios en experiencias
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ambientes.map((ambiente, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer section-reveal">
                            <img
                                src={ambiente.image}
                                alt={ambiente.title}
                                className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-light mb-2">{ambiente.title}</h3>
                                <p className="text-gray-200">{ambiente.subtitle}</p>
                                <button className="mt-4 flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
                                    <span className="text-sm font-medium">Ver más</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AmbientesSection;