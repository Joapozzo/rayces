"use client";
import React, { use, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/product'; 

type PageProps = {
    params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
    const { id } = use(params);

    // Encontrar el producto
    const product = products.find(p => p.id === parseInt(id as string));

    // Estado para la galería de imágenes
    const [selectedImage, setSelectedImage] = useState(0);

    // Producto no encontrado
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

    // Simular galería de imágenes (en un proyecto real tendrías múltiples imágenes)
    const imageGallery = [
        product.image,
        product.image, // En un proyecto real, estas serían imágenes diferentes
        product.image,
        product.image
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 pt-25">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-green-600 transition-colors">
                            Inicio
                        </Link>
                        <span>/</span>
                        <Link href="/productos" className="hover:text-green-600 transition-colors">
                            Productos
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 capitalize">{product.category}</span>
                        <span>/</span>
                        <span className="text-gray-900">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Image Gallery */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-lg bg-gray-50">
                            <div className="aspect-square w-full relative">
                                <Image
                                    src={imageGallery[selectedImage]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Badges */}
                            <div className="absolute top-6 left-6 flex flex-col space-y-2">
                                {product.isNew && (
                                    <div className="bg-white text-gray-900 px-4 py-2 text-sm font-medium rounded shadow-lg">
                                        Nuevo
                                    </div>
                                )}
                                {product.isBestseller && (
                                    <div className="bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded shadow-lg">
                                        Bestseller
                                    </div>
                                )}
                            </div>

                            {product.discount > 0 && (
                                <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 text-sm font-medium rounded shadow-lg">
                                    -{product.discount}%
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-4 gap-4">
                            {imageGallery.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative overflow-hidden rounded-lg aspect-square ${selectedImage === index
                                            ? 'ring-2 ring-green-500'
                                            : 'hover:opacity-75'
                                        } transition-all duration-200`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-8">

                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full capitalize">
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-light text-gray-900">
                                {product.name}
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                                {product.originalPrice ? (
                                    <>
                                        <span className="text-4xl font-light text-gray-900">
                                            ${product.price.toLocaleString()}
                                        </span>
                                        <span className="text-2xl text-gray-400 line-through">
                                            ${product.originalPrice.toLocaleString()}
                                        </span>
                                        <span className="text-lg font-medium text-green-600">
                                            Ahorrás ${(product.originalPrice - product.price).toLocaleString()}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-4xl font-light text-gray-900">
                                        ${product.price.toLocaleString()}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500">
                                Precio en pesos argentinos. Incluye IVA.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-gray-900">
                                Características destacadas
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                                    >
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-medium text-gray-900">
                                Especificaciones técnicas
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Categoría</span>
                                    <span className="font-medium text-gray-900 capitalize">{product.category}</span>
                                </div>

                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Código de producto</span>
                                    <span className="font-medium text-gray-900">MBL-{product.id.toString().padStart(3, '0')}</span>
                                </div>

                                {product.originalPrice && (
                                    <div className="flex justify-between py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Descuento</span>
                                        <span className="font-medium text-green-600">{product.discount}% OFF</span>
                                    </div>
                                )}

                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Disponibilidad</span>
                                    <span className="font-medium text-green-600">En stock</span>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="space-y-6 pt-8 border-t border-gray-200">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                {/* Delivery Info */}
                                <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7" />
                                        </svg>
                                        <span>Envío</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Envío gratuito a todo el país en compras superiores a $50.000
                                    </p>
                                </div>

                                {/* Warranty Info */}
                                <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Garantía</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        12 meses de garantía en defectos de fabricación
                                    </p>
                                </div>

                                {/* Payment Info */}
                                <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <span>Formas de pago</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Hasta 12 cuotas sin interés con tarjetas de crédito
                                    </p>
                                </div>

                                {/* Assembly Info */}
                                <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                        <span>Armado</span>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Servicio de armado profesional disponible
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Back Button */}
                        <div className="pt-8">
                            <Link
                                href="/"
                                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                <span>Volver al inicio</span>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-24 pt-24 border-t border-gray-200">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Productos relacionados
                        </h2>
                        <p className="text-lg text-gray-600">
                            Otros productos que te pueden interesar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 3)
                            .map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/product/${relatedProduct.id}`}
                                    className="group cursor-pointer block"
                                >
                                    <div className="relative overflow-hidden rounded mb-6">
                                        <div className="aspect-[4/3] w-full relative">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {relatedProduct.discount > 0 && (
                                            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-sm font-medium rounded">
                                                -{relatedProduct.discount}%
                                            </div>
                                        )}

                                        {relatedProduct.isNew && (
                                            <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 text-sm font-medium rounded">
                                                Nuevo
                                            </div>
                                        )}

                                        {relatedProduct.isBestseller && (
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
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">{relatedProduct.description}</p>
                                        <div className="flex items-center space-x-3">
                                            {relatedProduct.originalPrice ? (
                                                <>
                                                    <span className="text-xl font-bold text-gray-900">${relatedProduct.price.toLocaleString()}</span>
                                                    <span className="text-lg text-gray-400 line-through">${relatedProduct.originalPrice.toLocaleString()}</span>
                                                </>
                                            ) : (
                                                <span className="text-xl font-bold text-gray-900">${relatedProduct.price.toLocaleString()}</span>
                                            )}
                                        </div>
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