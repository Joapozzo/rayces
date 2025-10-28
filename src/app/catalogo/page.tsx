"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/product';
import ProductCard from '../components/CardProduct';
import CustomInput from '../components/UI/Input';
import { categories } from '../data/categories';

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

const CatalogPage = () => {
    const [heroRef, isHeroVisible] = useIntersectionObserver(0.3);
    const [productsRef, isProductsVisible] = useIntersectionObserver(0.2);

    const [filters, setFilters] = useState({
        search: '',
        category: 'all'
    });

    const [showFilters, setShowFilters] = useState(false);

    // Filtrar productos
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchesCategory = filters.category === 'all' || product.subcategory === filters.category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-[70vh] flex items-center justify-center overflow-hidden"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop"
                        alt="Catálogo de muebles"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-35 pb-30">
                    <div
                        className={`transition-all duration-700 transform ${isHeroVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
                    >
                        <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
                            Catálogo completo
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Descubre toda nuestra colección de muebles únicos
                        </p>
                        <div
                            className={`w-20 h-1 bg-green-400 mx-auto rounded transition-all duration-700 transform ${isHeroVisible
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0"
                                }`}
                            style={{ transitionDelay: "400ms" }}
                        ></div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <CustomInput
                                type="search"
                                placeholder="Buscar productos..."
                                value={filters.search}
                                onChange={(e) =>
                                    setFilters({ ...filters, search: e.target.value })
                                }
                                variant="default"
                                size="md"
                                className='text-gray-400'
                            />
                        </div>

                        {/* Category Filters - Desktop */}
                        <div className="hidden lg:flex items-center space-x-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        setFilters({ ...filters, category: category.id })
                                    }
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${filters.category === category.id
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                        }`}
                                >
                                    {category.icon}
                                    <span>{category.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                            <span>Filtros</span>
                        </button>
                    </div>

                    {/* Mobile Filters */}
                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-300 ${showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="pt-6 grid grid-cols-2 gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        setFilters({ ...filters, category: category.id })
                                    }
                                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${filters.category === category.id
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-green-50"
                                        }`}
                                >
                                    {category.icon}
                                    <span>{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Info */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between">
                    <p className="text-gray-600">
                        {filteredProducts.length} productos encontrados
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Filter className="w-4 h-4" />
                        <span>
                            {filters.category !== "all"
                                ? categories.find((c) => c.id === filters.category)?.name
                                : "Todas las categorías"}
                        </span>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section
                ref={productsRef}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            startAnimation={isProductsVisible}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No se encontraron productos
                        </h3>
                        <p className="text-gray-600">
                            Intenta ajustar los filtros o términos de búsqueda.
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default CatalogPage;