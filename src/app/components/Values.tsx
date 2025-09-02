import React, { useState, useEffect, useRef } from 'react';
import ValueCard, { values } from './ValueCard';

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

const ValuesSection: React.FC = () => {
    const [sectionRef, isVisible] = useIntersectionObserver(0.2);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className={`absolute top-1/3 left-1/4 w-40 h-40 bg-green-50 rounded-full opacity-50 transition-all duration-1000 ${isVisible ? 'animate-pulse scale-100' : 'scale-0'
                    }`}></div>
                <div className={`absolute bottom-1/4 right-1/3 w-56 h-56 bg-green-100 rounded-full opacity-30 transition-all duration-1000 ${isVisible ? 'animate-bounce scale-100' : 'scale-0'
                    }`} style={{ animationDelay: '300ms' }}></div>
                <div className={`absolute top-1/4 right-1/4 w-20 h-20 bg-green-200 rounded-full opacity-40 transition-all duration-1000 ${isVisible ? 'animate-ping scale-100' : 'scale-0'
                    }`} style={{ animationDelay: '600ms' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Nuestra filosofía
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Creemos en la perfección de los detalles y la belleza de lo auténtico
                    </p>
                    <div className={`w-16 h-1 bg-green-400 mx-auto mt-8 rounded transition-all duration-700 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                        }`} style={{ transitionDelay: '400ms' }}></div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            value={value}
                            index={index}
                            startAnimation={isVisible}
                        />
                    ))}

                    {/* Connecting lines (visible on larger screens) */}
                    <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px">
                        <div className={`h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-all duration-1000 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                            }`} style={{ transitionDelay: '1200ms' }}></div>
                    </div>
                </div>

                {/* Bottom decorative element */}
                <div className={`flex justify-center mt-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`} style={{ transitionDelay: '1400ms' }}>
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;