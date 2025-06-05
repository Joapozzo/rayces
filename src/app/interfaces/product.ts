// Types
export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discount: number;
    description: string;
    category: string;
    image: string;
    features: string[];
    isNew?: boolean;
    isBestseller?: boolean;
}