import { useState } from "react";
import { products } from "../data/product";
import { categories } from "../data/category";
import { useRouter } from "next/navigation";

// Categories Section Component
const CategoriesSection: React.FC = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const goToPageProduct = (id: number) => () => {
        router.push(`/product/${id}`);
    };

    return (
        <section id="productos" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-reveal">
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Catálogo completo
                    </h2>
                    <p className="text-xl text-gray-600">
                        Explora nuestra colección organizada por ambientes
                    </p>
                </div>

                {/* Innovative Category Filters */}
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-16 section-reveal">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`group relative p-6 border border-gray-200 rounded transition-all duration-300 hover:border-green-500 hover:shadow-lg ${selectedCategory === 'all'
                                ? 'bg-green-600 text-white border-green-600 shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-green-50'
                            }`}
                    >
                        <div className="text-center space-y-3">
                            <div className="text-3xl">🏠</div>
                            <p className="font-medium">Todos</p>
                            <p className="text-xs opacity-75">Ver todo</p>
                        </div>
                    </button>

                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`group relative p-6 border border-gray-200 rounded transition-all duration-300 hover:border-green-500 hover:shadow-lg ${selectedCategory === category.id
                                    ? 'bg-green-600 text-white border-green-600 shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-green-50'
                                }`}
                        >
                            <div className="text-center space-y-3">
                                <div className="text-3xl">{category.icon}</div>
                                <p className="font-medium">{category.name}</p>
                                <p className="text-xs opacity-75">{category.description}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300" onClick={goToPageProduct(product.id)}>
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {product.discount > 0 && (
                                    <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-sm font-medium">
                                        -{product.discount}%
                                    </div>
                                )}
                                {product.isNew && (
                                    <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 text-sm font-medium">
                                        Nuevo
                                    </div>
                                )}
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {product.originalPrice ? (
                                            <>
                                                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                                            </>
                                        ) : (
                                            <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                        )}
                                    </div>

                                    <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;