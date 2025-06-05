// Values Section Component
const ValuesSection: React.FC = () => {
    const values = [
        {
            title: "Artesanía tradicional",
            description: "Técnicas centenarias combinadas con herramientas de última generación para resultados excepcionales.",
            icon: "🔨"
        },
        {
            title: "Materiales premium",
            description: "Seleccionamos cuidadosamente cada pieza de madera, priorizando calidad y sostenibilidad.",
            icon: "🌿"
        },
        {
            title: "Diseño personalizado",
            description: "Cada proyecto es único, diseñado específicamente para tu espacio y estilo de vida.",
            icon: "✏️"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-green-50 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-green-200 rounded-full opacity-40 animate-ping"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 section-reveal">
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Nuestra filosofía
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Creemos en la perfección de los detalles y la belleza de lo auténtico
                    </p>
                    <div className="w-16 h-1 bg-green-400 mx-auto mt-6 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value, index) => (
                        <div key={index} className="text-center section-reveal">
                            <div className="text-4xl mb-6">{value.icon}</div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            {index === 1 && <div className="w-12 h-1 bg-green-400 mx-auto mt-4 rounded"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;