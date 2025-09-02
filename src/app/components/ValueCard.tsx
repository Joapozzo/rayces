
import { Hammer, Leaf, PenTool } from 'lucide-react';

interface ValueItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const values: ValueItem[] = [
    {
        title: "Artesanía tradicional",
        description: "Técnicas centenarias combinadas con herramientas de última generación para resultados excepcionales.",
        icon: <Hammer className="w-8 h-8" />
    },
    {
        title: "Materiales premium",
        description: "Seleccionamos cuidadosamente cada pieza de madera, priorizando calidad y sostenibilidad.",
        icon: <Leaf className="w-8 h-8" />
    },
    {
        title: "Diseño personalizado",
        description: "Cada proyecto es único, diseñado específicamente para tu espacio y estilo de vida.",
        icon: <PenTool className="w-8 h-8" />
    }
];

const ValueCard: React.FC<{ value: ValueItem; index: number; startAnimation: boolean }> = ({
    value,
    index,
    startAnimation
}) => {
    return (
        <div
            className={`text-center group transition-all duration-700 transform ${startAnimation
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                }`}
            style={{
                transitionDelay: `${index * 200}ms`
            }}
        >
            {/* Icon Container */}
            <div className={`mx-auto w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-xl group-hover:scale-110 transform ${startAnimation ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                } ${index === 1
                    ? 'bg-green-50 text-green-600 group-hover:bg-green-100'
                    : 'text-gray-600 group-hover:bg-gray-50'
                }`}
                style={{
                    transitionDelay: `${300 + (index * 200)}ms`
                }}>
                {value.icon}
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className={`text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-green-600 ${startAnimation ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        transitionDelay: `${500 + (index * 200)}ms`
                    }}>
                    {value.title}
                </h3>

                <p className={`text-gray-600 leading-relaxed max-w-sm mx-auto transition-all duration-500 ${startAnimation ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        transitionDelay: `${700 + (index * 200)}ms`
                    }}>
                    {value.description}
                </p>

                {/* Decorative line for middle card */}
                {index === 1 && (
                    <div className={`w-12 h-1 bg-green-400 mx-auto mt-6 rounded transition-all duration-500 transform ${startAnimation ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                        }`}
                        style={{
                            transitionDelay: `${900 + (index * 200)}ms`
                        }}></div>
                )}
            </div>

            {/* Hover effect - floating dots */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${startAnimation ? 'animate-pulse' : ''
                    }`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${startAnimation ? 'animate-bounce' : ''
                    }`} style={{ animationDelay: '150ms' }}></div>
            </div>
        </div>
    );
};

export default ValueCard;