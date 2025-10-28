"use client";
import React, { use, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Package, Shield, CreditCard, Wrench, Share2, Heart } from 'lucide-react';
import { products } from '@/app/data/product';

type PageProps = {
    params: Promise<{ id: string }>;
};

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

const Page = ({ params }: PageProps) => {
    const { id } = use(params);
    const [imageRef, isImageVisible] = useIntersectionObserver(0.3);
    const [contentRef, isContentVisible] = useIntersectionObserver(0.2);
    const [relatedRef, isRelatedVisible] = useIntersectionObserver(0.2);

    const product = products.find(p => p.id === parseInt(id as string));

    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-light text-gray-900 mb-4">Producto no encontrado</h1>
                    <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        );
    }

    const imageGallery: string[] = [
        product.images.ambient,
        product.images.white_bg
    ].filter((img): img is string => Boolean(img));

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="pt-30 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-green-600 transition-colors">
                            Inicio
                        </Link>
                        <span>/</span>
                        <Link href="/catalogo" className="hover:text-green-600 transition-colors">
                            Catálogo
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 truncate">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* Image Gallery */}
                    <div ref={imageRef} className="space-y-4 lg:space-y-6">
                        {/* Main Image */}
                        <div className={`relative overflow-hidden rounded-2xl bg-gray-50 transition-all duration-700 transform ${
                            isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                            <div className="aspect-square w-full relative">
                                <Image
                                    src={imageGallery[selectedImage] || product.images.ambient}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Badges */}
                            <div className="absolute top-4 lg:top-6 left-4 lg:left-6 flex flex-col space-y-2">
                                {product.isNew && (
                                    <div className="bg-white text-gray-900 px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-lg shadow-lg">
                                        Nuevo
                                    </div>
                                )}
                                {product.isBestseller && (
                                    <div className="bg-gray-900 text-white px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-lg shadow-lg">
                                        Bestseller
                                    </div>
                                )}
                            </div>

                            {/* {product.discount && product.discount > 0 && (
                                <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-green-600 text-white px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-lg shadow-lg">
                                    -{product.discount}%
                                </div>
                            )} */}

                            {/* Action buttons */}
                            {/* <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6 flex space-x-2">
                                <button className="w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 shadow-lg">
                                    <Heart className="w-4 h-4 lg:w-5 lg:h-5" />
                                </button>
                                <button className="w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 shadow-lg">
                                    <Share2 className="w-4 h-4 lg:w-5 lg:h-5" />
                                </button>
                            </div> */}
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className={`grid grid-cols-2 gap-3 lg:gap-4 transition-all duration-700 transform ${
                            isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`} style={{ transitionDelay: '200ms' }}>
                            {imageGallery.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-300 ${
                                        selectedImage === index
                                            ? 'ring-2 ring-green-500 scale-105'
                                            : 'hover:opacity-75 hover:scale-105'
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} - ${index === 0 ? 'Ambiente' : 'Fondo blanco'}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div ref={contentRef} className="space-y-6 lg:space-y-8">

                        {/* Header */}
                        <div className={`space-y-4 lg:space-y-6 transition-all duration-700 transform ${
                            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full capitalize">
                                        {product.category}
                                    </span>
                                    <span className="text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full capitalize">
                                        {product.subcategory}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className={`space-y-4 lg:space-y-6 transition-all duration-700 transform ${
                            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`} style={{ transitionDelay: '200ms' }}>
                            <h3 className="text-xl lg:text-2xl font-medium text-gray-900">
                                Características destacadas
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {product.features?.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                                    >
                                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className={`space-y-6 pt-6 lg:pt-8 border-t border-gray-200 transition-all duration-700 transform ${
                            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`} style={{ transitionDelay: '400ms' }}>
                            <h3 className="text-xl lg:text-2xl font-medium text-gray-900">
                                Información del producto
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Categoría</span>
                                    <span className="font-medium text-gray-900 capitalize">{product.category}</span>
                                </div>

                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Subcategoría</span>
                                    <span className="font-medium text-gray-900 capitalize">{product.subcategory}</span>
                                </div>

                                {product.materials && product.materials.length > 0 && (
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Materiales</span>
                                        <span className="font-medium text-gray-900">{product.materials.join(', ')}</span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Código de producto</span>
                                    <span className="font-medium text-gray-900">MBL-{product.id.toString().padStart(3, '0')}</span>
                                </div>

                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Disponibilidad</span>
                                    <span className="font-medium text-green-600">En stock</span>
                                </div>

                                <div className="flex justify-between items-center py-3">
                                    <span className="text-gray-600">Tiempo de entrega</span>
                                    <span className="font-medium text-gray-900">7-15 días hábiles</span>
                                </div>
                            </div>
                        </div>

                        {/* Services Information */}
                        <div className={`space-y-6 pt-6 lg:pt-8 border-t border-gray-200 transition-all duration-700 transform ${
                            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`} style={{ transitionDelay: '600ms' }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

                                {/* Delivery Info */}
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <Package className="w-5 h-5 text-green-600" />
                                        <span>Envío</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Envío gratuito a todo el país en compras superiores a $50.000
                                    </p>
                                </div>

                                {/* Warranty Info */}
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <Shield className="w-5 h-5 text-green-600" />
                                        <span>Garantía</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        12 meses de garantía en defectos de fabricación
                                    </p>
                                </div>

                                {/* Payment Info */}
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <CreditCard className="w-5 h-5 text-green-600" />
                                        <span>Formas de pago</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Hasta 12 cuotas sin interés con tarjetas de crédito
                                    </p>
                                </div>

                                {/* Assembly Info */}
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <Wrench className="w-5 h-5 text-green-600" />
                                        <span>Armado</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Servicio de armado profesional disponible
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Back Button */}
                        <div className={`pt-6 lg:pt-8 transition-all duration-700 transform ${
                            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`} style={{ transitionDelay: '800ms' }}>
                            <Link
                                href="/catalog"
                                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                                <span>Volver al catálogo</span>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Related Products Section */}
                <div ref={relatedRef} className="mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-gray-200">
                    <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 transform ${
                        isRelatedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-4 lg:mb-6">
                            Productos relacionados
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600">
                            Otros productos que te pueden interesar
                        </p>
                        <div className={`w-20 h-1 bg-green-400 mx-auto mt-6 lg:mt-8 rounded transition-all duration-700 transform ${
                            isRelatedVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                        }`} style={{ transitionDelay: '400ms' }}></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {products
                            .filter(p => p.subcategory === product.subcategory && p.id !== product.id)
                            .slice(0, 3)
                            .map((relatedProduct, index) => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/product/${relatedProduct.id}`}
                                    className={`group cursor-pointer block transition-all duration-700 transform ${
                                        isRelatedVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${600 + (index * 150)}ms` }}
                                >
                                    <div className="relative overflow-hidden rounded-xl mb-4 lg:mb-6 shadow-sm group-hover:shadow-lg transition-all duration-500">
                                        <div className="aspect-[4/3] w-full relative">
                                            <Image
                                                src={relatedProduct.images.ambient}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg font-medium">
                                                Ver producto
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 lg:space-y-3">
                                        <h3 className="text-base lg:text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm lg:text-base line-clamp-2">
                                            {relatedProduct.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;