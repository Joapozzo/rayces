import React, { useState, useEffect, useRef } from 'react';
import StatCard, { stats } from './StatCard';

const useIntersectionObserver = (threshold: number = 0.3) => {
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

const StatsSection: React.FC = () => {
    const [sectionRef, isVisible] = useIntersectionObserver(0.3);

    return (
        <section ref={sectionRef} className="py-16 relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0">
                <div className={`absolute top-10 right-10 w-32 h-32 bg-green-50 rounded-full opacity-40 transition-all duration-1000 ${
                    isVisible ? 'animate-pulse scale-100' : 'scale-0'
                }`}></div>
                <div className={`absolute bottom-10 left-10 w-24 h-24 bg-green-100 rounded-full opacity-30 transition-all duration-1000 ${
                    isVisible ? 'animate-bounce scale-100' : 'scale-0'
                }`} style={{ animationDelay: '500ms' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            stat={stat}
                            index={index}
                            startAnimation={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;