import React, { useState, useEffect, useRef } from 'react';
import { products } from "../data/product";
import ProductCard from './CardProduct';

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

const FeaturedProductsSection: React.FC = () => {
    const [sectionRef, isVisible] = useIntersectionObserver(0.2);
    const featuredProducts = products.slice(0, 3);

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className={`absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full transition-all duration-1000 ${
                    isVisible ? 'animate-ping scale-100' : 'scale-0'
                }`}></div>
                <div className={`absolute bottom-32 left-32 w-2 h-2 bg-green-500 rounded-full transition-all duration-1000 ${
                    isVisible ? 'animate-bounce scale-100' : 'scale-0'
                }`} style={{ animationDelay: '300ms' }}></div>
                <div className={`absolute top-1/2 right-1/3 w-28 h-28 bg-green-50 rounded-full opacity-40 transition-all duration-1000 ${
                    isVisible ? 'animate-pulse scale-100' : 'scale-0'
                }`} style={{ animationDelay: '600ms' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Productos destacados
                    </h2>
                    <p className="text-xl text-gray-600">
                        Nuestras piezas más exclusivas seleccionadas especialmente
                    </p>
                    <div className={`w-20 h-1 bg-green-400 mx-auto mt-8 rounded transition-all duration-700 transform ${
                        isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`} style={{ transitionDelay: '400ms' }}></div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            startAnimation={isVisible}
                            isFeatured={true}
                        />
                    ))}
                </div>

                {/* Bottom decoration */}
                <div className={`flex justify-center mt-16 space-x-2 transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '1000ms' }}>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                </div>
            </div>
        </section>
    );
};

// Exportar también el componente ProductCard para reutilización
export { ProductCard };
export default FeaturedProductsSection;
