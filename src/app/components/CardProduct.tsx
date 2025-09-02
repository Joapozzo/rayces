import { useRouter } from "next/navigation";
import { Product } from "../interfaces/product";

interface ProductCardProps {
    product: Product;
    index: number;
    startAnimation: boolean;
    isFeatured?: boolean;
    onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
    product, 
    index, 
    startAnimation, 
    isFeatured = false,
    onClick 
}) => {
    const router = useRouter();
    return (
        <div
            className={`group cursor-pointer transition-all duration-700 transform relative ${
                startAnimation 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
            } ${
                isFeatured ? 'hover:scale-105' : 'hover:scale-102'
            }`}
            style={{
                transitionDelay: `${index * 150}ms`
            }}
            onClick={onClick}
        >
            {/* Featured Badge */}
            {isFeatured && (
                <div className={`absolute -top-3 -right-3 z-20 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                    startAnimation ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                }`}
                style={{
                    transitionDelay: `${800 + (index * 150)}ms`
                }}>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
            )}

            {/* Image Container */}
            <div className={`relative overflow-hidden rounded-2xl mb-4 ${
                isFeatured 
                    ? 'shadow-lg group-hover:shadow-2xl' 
                    : 'shadow-sm group-hover:shadow-lg'
            } transition-all duration-500`}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={`aspect-[4/3] w-full object-cover transition-all duration-700 p-8 ${
                        isFeatured 
                            ? 'group-hover:scale-110' 
                            : 'group-hover:scale-105'
                    }`}
                />
                
                {/* Gradient overlay for featured products */}
                {isFeatured && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-all duration-300 flex items-center justify-center">
                    <div className={`opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${
                        isFeatured 
                            ? 'bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg' 
                            : 'bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg font-medium'
                    }`} onClick={() => router.push(`/product/${product.id}`)}>
                        {isFeatured ? 'Ver destacado' : 'Ver producto'}
                    </div>
                </div>

                {/* Corner decoration for featured */}
                {isFeatured && (
                    <div className="absolute top-4 left-4">
                        <div className={`w-1 h-8 bg-green-400 rounded-full transition-all duration-500 transform ${
                            startAnimation ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                        }`}
                        style={{
                            transitionDelay: `${600 + (index * 150)}ms`
                        }}></div>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="space-y-2">
                <h3 className={`font-medium transition-all duration-300 ${
                    isFeatured 
                        ? 'text-lg text-gray-900 group-hover:text-green-600' 
                        : 'text-base text-gray-800 group-hover:text-gray-900'
                } ${
                    startAnimation ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    transitionDelay: `${400 + (index * 150)}ms`
                }}>
                    {product.name}
                </h3>

                {/* Featured indicator line */}
                {isFeatured && (
                    <div className={`w-12 h-0.5 bg-green-400 rounded transition-all duration-500 transform ${
                        startAnimation ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                    style={{
                        transitionDelay: `${700 + (index * 150)}ms`
                    }}></div>
                )}
            </div>

            {/* Floating decoration for featured products */}
            {isFeatured && (
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-1 bg-green-100 rounded-full animate-ping"></div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;