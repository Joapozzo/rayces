interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false
}) => {
    const baseClasses = "relative overflow-hidden font-medium rounded-full transition-all duration-300 flex items-center justify-center space-x-2 group";

    const variantClasses = {
        primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl",
        secondary: "bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl",
        outline: "border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 bg-white hover:bg-green-50"
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
        >
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">{children}</span>
        </button>
    );
};

export default CustomButton;