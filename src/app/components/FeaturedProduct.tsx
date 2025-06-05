import { useRouter } from "next/navigation";
import { products } from "../data/product";

// Featured Products Section Component
const FeaturedProductsSection: React.FC = () => {
    const router = useRouter();
    const featuredProducts = products.slice(0, 3);

    const goToPageProduct = (id: number) => () => {
        router.push(`/product/${id}`);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Dynamic background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-32 left-32 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-green-50 rounded-full opacity-40 animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 section-reveal">
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Productos destacados
                    </h2>
                    <p className="text-xl text-gray-600">
                        Nuestras piezas más exclusivas con ofertas especiales
                    </p>
                    <div className="w-20 h-1 bg-green-400 mx-auto mt-6 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer section-reveal"
                            onClick={goToPageProduct(product.id)}
                        >
                            <div className="relative overflow-hidden rounded mb-6">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {product.discount > 0 && (
                                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-sm font-medium rounded">
                                        -{product.discount}%
                                    </div>
                                )}
                                {product.isNew && (
                                    <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 text-sm font-medium rounded">
                                        Nuevo
                                    </div>
                                )}
                                {product.isBestseller && (
                                    <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded">
                                        Bestseller
                                    </div>
                                )}

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-3 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Ver detalles
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center space-x-3">
                                    {product.originalPrice ? (
                                        <>
                                            <span className="text-xl font-bold text-gray-900">
                                                ${product.price}
                                            </span>
                                            <span className="text-lg text-gray-400 line-through">
                                                ${product.originalPrice}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProductsSection;
