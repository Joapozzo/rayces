import React, { useState } from 'react';
import { Eye, EyeOff} from 'lucide-react';

interface CustomInputProps {
    type?: 'text' | 'email' | 'password' | 'tel' | 'search';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    icon?: React.ReactNode;
    variant?: 'default' | 'filled' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    error?: string;
    disabled?: boolean;
    className?: string;
    required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
    type = 'text',
    placeholder = '',
    value = '',
    onChange,
    label,
    icon,
    variant = 'default',
    size = 'md',
    error,
    disabled = false,
    className = '',
    required = false
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Determinar el tipo de input (manejar password toggle)
    const inputType = type === 'password' && showPassword ? 'text' : type;

    // Clases base
    const baseClasses = "w-full transition-all duration-300 border rounded-xl focus:outline-none";
    
    // Variantes de estilo
    const variantClasses = {
        default: `border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-gray-400 ${
            error ? 'border-red-300 focus:ring-red-500' : ''
        }`,
        filled: `border-transparent bg-gray-100 focus:bg-white focus:ring-2 focus:ring-green-500 hover:bg-gray-50 ${
            error ? 'bg-red-50 focus:ring-red-500' : ''
        }`,
        outline: `border-2 border-gray-200 bg-transparent focus:border-green-500 hover:border-gray-300 ${
            error ? 'border-red-300 focus:border-red-500' : ''
        }`
    };

    // Tamaños
    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-5 py-4 text-lg'
    };

    // Calcular padding izquierdo si hay icono
    const paddingLeft = icon ? (size === 'sm' ? 'pl-9' : size === 'md' ? 'pl-10' : 'pl-12') : '';
    
    // Calcular padding derecho si es password
    const paddingRight = type === 'password' ? (size === 'sm' ? 'pr-9' : size === 'md' ? 'pr-10' : 'pr-12') : '';

    return (
        <div className={`relative ${className}`}>
            {/* Label */}
            {label && (
                <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    error ? 'text-red-600' : 'text-gray-700'
                } ${isFocused ? 'text-green-600' : ''}`}>
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative">
                {/* Icono izquierdo */}
                {icon && (
                    <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                        isFocused ? 'text-green-500' : error ? 'text-red-400' : 'text-gray-400'
                    } ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}`}>
                        {icon}
                    </div>
                )}

                {/* Input */}
                <input
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`
                        ${baseClasses}
                        ${variantClasses[variant]}
                        ${sizeClasses[size]}
                        ${paddingLeft}
                        ${paddingRight}
                        ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
                        placeholder:text-gray-400 placeholder:font-normal
                    `}
                />

                {/* Toggle password visibility */}
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 hover:text-gray-600 ${
                            isFocused ? 'text-green-500' : 'text-gray-400'
                        } ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}`}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                )}
            </div>

            {/* Error message */}
            {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                    <span className="w-4 h-4">⚠️</span>
                    <span>{error}</span>
                </p>
            )}
        </div>
    );
};

export default CustomInput;