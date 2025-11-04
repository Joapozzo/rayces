import { useCallback } from 'react';

interface UseWhatsAppReturn {
    sendWhatsApp: (message?: string) => void;
    phoneNumber: string;
}

/**
 * Hook personalizado para enviar mensajes a WhatsApp
 * @param defaultPhone - Número de teléfono predeterminado (opcional)
 * @returns Objeto con la función sendWhatsApp y el número de teléfono
 */
export const useWhatsApp = (defaultPhone: string = '5493513528804'): UseWhatsAppReturn => {
    const phoneNumber = defaultPhone;

    /**
     * Envía un mensaje a WhatsApp
     * @param message - Mensaje a enviar (opcional)
     */
    const sendWhatsApp = useCallback((message: string = '') => {
        // Limpiar el número de teléfono (remover espacios, guiones, etc.)
        const cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');

        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(message);

        // Construir la URL de WhatsApp
        const whatsappUrl = `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ''}`;

        // Abrir WhatsApp en una nueva ventana
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, [phoneNumber]);

    return {
        sendWhatsApp,
        phoneNumber
    };
};
