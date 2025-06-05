// Stats Section Component  
const StatsSection: React.FC = () => {
    const stats = [
        { number: "15+", label: "Años de experiencia", description: "Perfeccionando nuestro arte" },
        { number: "500+", label: "Proyectos únicos", description: "Cada uno con su historia" },
        { number: "98%", label: "Clientes satisfechos", description: "Calidad que perdura" },
        { number: "24/7", label: "Soporte dedicado", description: "Siempre disponibles" }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-32 h-32 bg-green-50 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center section-reveal">
                            <div className="space-y-2">
                                <h3 className="text-4xl lg:text-5xl font-light text-gray-900">{stat.number}</h3>
                                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
                                <p className="text-sm text-gray-500">{stat.description}</p>
                                {index === 1 && <div className="w-8 h-1 bg-green-400 mx-auto mt-2 rounded"></div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;