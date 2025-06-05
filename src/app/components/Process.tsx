// Process Section Component
const ProcessSection: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Consulta inicial",
            description: "Analizamos tu espacio, necesidades y estilo personal para crear el diseño perfecto."
        },
        {
            number: "02",
            title: "Diseño personalizado",
            description: "Desarrollamos bocetos y renderizados 3D para que visualices tu mueble antes de construirlo."
        },
        {
            number: "03",
            title: "Selección de materiales",
            description: "Elegimos juntos las maderas y acabados que mejor se adapten a tu proyecto."
        },
        {
            number: "04",
            title: "Construcción artesanal",
            description: "Nuestros maestros carpinteros dan vida a tu diseño con técnicas tradicionales."
        },
        {
            number: "05",
            title: "Entrega e instalación",
            description: "Llevamos tu mueble terminado y lo instalamos cuidadosamente en tu hogar."
        }
    ];

    return (
        <section id="proceso" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-reveal">
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Nuestro proceso
                    </h2>
                    <p className="text-xl text-gray-600">
                        De la idea a la realidad en 5 pasos cuidadosamente planificados
                    </p>
                </div>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 section-reveal ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}>
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center space-x-4">
                                    <span className="text-6xl font-light text-gray-300">{step.number}</span>
                                    <h3 className="text-2xl font-medium text-gray-900">{step.title}</h3>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                    {step.description}
                                </p>
                            </div>

                            <div className="flex-1">
                                <img
                                    src={`https://images.unsplash.com/photo-${index === 0 ? '1600585154340-be6161a56a0c' :
                                            index === 1 ? '1600585154340-be6161a56a0c' :
                                                index === 2 ? '1600585154340-be6161a56a0c' :
                                                    index === 3 ? '1600585154340-be6161a56a0c' :
                                                        '1600585154340-be6161a56a0c'
                                        }?w=600&h=450&fit=crop&auto=format&dpr=2`}
                                    alt={step.title}
                                    className="aspect-[4/3] w-full object-cover rounded-lg"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
