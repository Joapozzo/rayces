import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Home, Sofa, Table, Coffee, ChefHat } from 'lucide-react';
import { products } from "../data/product";
import ProductCard from "./CardProduct";
import CustomButton from "./UI/button";

export const categories = [
    { id: "conjuntos", name: "Mesas", description: "Mesas de comedor", icon: <Table className="w-8 h-8" /> },
    { id: "sillones", name: "Sillones", description: "Sofás y esquineros", icon: <Sofa className="w-8 h-8" /> },
    { id: "ratonas", name: "Ratonas", description: "Mesas de centro", icon: <Coffee className="w-8 h-8" /> },
    { id: "sillas", name: "Sillas", description: "Sillas de comedor", icon: <ChefHat className="w-8 h-8" /> },
    // { id: "conjuntos", name: "Conjuntos", description: "Sets completos", icon: <Archive className="w-8 h-8" /> }
];

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

// Categories Section Component
const CategoriesSection: React.FC = () => {
    const router = useRouter();
    const [sectionRef, isVisible] = useIntersectionObserver(0.2);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredProducts = selectedCategory === 'all'
        ? products.slice(0, 6) // Limitar a 6 productos para esta sección
        : products.filter(p => p.category === selectedCategory).slice(0, 6);

    const goToPageProduct = (id: number) => () => {
        router.push(`/product/${id}`);
    };

    const goToCatalog = () => {
        router.push('/catalogo');
    };

    return (
        <section ref={sectionRef} id="productos" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className={`absolute top-20 left-20 w-32 h-32 bg-green-50 rounded-full opacity-40 transition-all duration-1000 ${isVisible ? 'animate-pulse scale-100' : 'scale-0'
                    }`}></div>
                <div className={`absolute bottom-20 right-20 w-24 h-24 bg-green-100 rounded-full opacity-30 transition-all duration-1000 ${isVisible ? 'animate-bounce scale-100' : 'scale-0'
                    }`} style={{ animationDelay: '300ms' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Catálogo por categorías
                    </h2>
                    <p className="text-xl text-gray-600">
                        Explora nuestra colección organizada por ambientes
                    </p>
                    <div className={`w-20 h-1 bg-green-400 mx-auto mt-8 rounded transition-all duration-700 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                        }`} style={{ transitionDelay: '400ms' }}></div>
                </div>

                {/* Category Filters */}
                <div className={`grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '200ms' }}>
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`group relative p-6 rounded-xl transition-all duration-300 hover:scale-105 ${selectedCategory === 'all'
                                ? 'bg-green-600 text-white shadow-lg scale-105'
                                : 'bg-white text-gray-700 hover:bg-green-50 shadow-sm hover:shadow-md'
                            }`}
                    >
                        <div className="text-center space-y-3">
                            <div className="mx-auto w-12 h-12 flex items-center justify-center">
                                <Home className="w-8 h-8" />
                            </div>
                            <p className="font-medium">Todos</p>
                            <p className="text-xs opacity-75">Ver todo</p>
                        </div>
                    </button>

                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`group relative p-6 rounded-xl transition-all duration-300 hover:scale-105 ${selectedCategory === category.id
                                    ? 'bg-green-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-green-50 shadow-sm hover:shadow-md'
                                }`}
                            style={{
                                transitionDelay: `${(index + 1) * 50}ms`
                            }}
                        >
                            <div className="text-center space-y-3">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center">
                                    {category.icon}
                                </div>
                                <p className="font-medium">{category.name}</p>
                                <p className="text-xs opacity-75">{category.description}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            startAnimation={isVisible}
                            onClick={goToPageProduct(product.id)}
                        />
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className={`text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '800ms' }}>
                    <CustomButton   
                        onClick={goToCatalog}
                        variant="primary"
                        size="lg"
                        className="mx-auto"
                    >
                        Ver catálogo completo
                    </CustomButton>

                    <p className="text-gray-500 text-sm mt-4">
                        Descubre más de 100 productos únicos
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;