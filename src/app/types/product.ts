export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discount: number;
    description: string;
    category: 'living' | 'comedor' | 'dormitorio' | 'oficina' | 'exterior';
    image: string;
    images?: string[]; // Array de imágenes adicionales
    features: string[];
    isNew?: boolean;
    isBestseller?: boolean;
    stock?: number;
    dimensions?: {
        width: number;
        height: number;
        depth: number;
        unit: 'cm' | 'm';
    };
    materials?: string[];
    colors?: string[];
    warranty?: number; // Meses de garantía
    assemblyRequired?: boolean;
    weight?: number; // En kg
    sku?: string;
    rating?: number; // De 1 a 5
    reviewCount?: number;
}

// Tipo para categorías
export type ProductCategory = Product['category'];

// Tipo para filtros
export interface ProductFilters {
    category?: ProductCategory | 'todos';
    priceMin?: number;
    priceMax?: number;
    isNew?: boolean;
    isBestseller?: boolean;
    inStock?: boolean;
}

// Tipo para ordenamiento
export type ProductSortOption = 'nombre' | 'precio-asc' | 'precio-desc' | 'rating' | 'newest'