// Types
export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    image: string;
    features: string[];
    isNew?: boolean;
    isBestseller?: boolean;
}