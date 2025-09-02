import React, { useState, useEffect } from 'react';

interface StatItem {
    number: number;
    suffix: string;
    label: string;
    description: string;
    highlight: boolean;
    isDark?: boolean;
    icon: React.ReactNode;
}

export const stats: StatItem[] = [
    {
        number: 500,
        suffix: "+",
        label: "VENTAS",
        description: "EXITOSAS",
        highlight: false,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )
    },
    {
        number: 15,
        suffix: "+",
        label: "AÑOS DE EXPERIENCIA",
        description: "CONFIABLE",
        highlight: true,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        )
    },
    {
        number: 10,
        suffix: "K",
        label: "SEGUIDORES",
        description: "",
        highlight: false,
        isDark: true,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
];

// Hook para animar números
const useCountUp = (end: number, duration: number = 2000, startAnimation: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (!startAnimation) return;
        
        let startTime: number;
        let animationFrame: number;
        
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function para suavizar la animación
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(end * easeOutQuart));
            
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, startAnimation]);
    
    return count;
};

// Componente individual de estadística con animación
const StatCard: React.FC<{ stat: StatItem; index: number; startAnimation: boolean }> = ({
    stat,
    index,
    startAnimation
}) => {
    const animatedCount = useCountUp(stat.number, 2000 + (index * 200), startAnimation);

    return (
        <div
            className={`relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 group transform ${startAnimation
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                } ${stat.isDark
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white hover:shadow-xl hover:shadow-gray-200/50'
                }`}
            style={{
                transitionDelay: `${index * 150}ms`
            }}
        >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 transform ${startAnimation ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                } ${stat.isDark
                    ? 'bg-white/10 text-white group-hover:bg-green-400 group-hover:text-gray-900'
                    : 'bg-gray-50 text-gray-600 group-hover:bg-green-50 group-hover:text-green-600'
                }`}>
                {stat.icon}
            </div>

            {/* Stat Content */}
            <div className="space-y-3">
                <h3 className={`text-4xl lg:text-5xl font-bold transition-colors duration-300 ${stat.isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {startAnimation ? animatedCount : 0}{stat.suffix}
                </h3>
                <p className={`text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${stat.isDark ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                    {stat.label}
                </p>
                {stat.description && (
                    <div className="pt-2">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 transform ${startAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                            } ${stat.highlight
                                ? 'bg-green-100 text-green-700 group-hover:bg-green-200'
                                : stat.isDark
                                    ? 'bg-white/10 text-white'
                                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                            }`}>
                            {stat.description}
                        </span>
                    </div>
                )}
            </div>

            {/* Decorative elements */}
            {index === 1 && (
                <div className="absolute top-6 right-6">
                    <div className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-300 ${startAnimation ? 'animate-pulse scale-100' : 'scale-0'
                        }`}></div>
                </div>
            )}

            {stat.isDark && (
                <div className={`absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 transition-all duration-500 ${startAnimation ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                    }`}>
                    <div className="w-16 h-16 border border-white/20 rounded-full"></div>
                    <div className="absolute top-2 left-2 w-12 h-12 border border-white/10 rounded-full"></div>
                </div>
            )}

            {/* Hover effect line */}
            <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${stat.isDark ? 'bg-green-400' : 'bg-green-500'
                }`}></div>

            {/* Progress bar animation */}
            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-1000 ${stat.isDark
                    ? 'from-green-400 to-green-500'
                    : 'from-green-500 to-green-600'
                } ${startAnimation ? 'w-full opacity-20' : 'w-0 opacity-0'
                }`}
                style={{
                    transitionDelay: `${1000 + (index * 200)}ms`
                }}></div>
        </div>
    );
};

export default StatCard;