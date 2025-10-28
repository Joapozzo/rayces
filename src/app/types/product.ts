export interface Product {
    id: number;
    name: string;
    description: string;
    category: 'madera' | 'cromo';
    subcategory: string;
    images: {
        ambient: string;
        white_bg?: string;
    };
    features: string[];
    materials: string[];
    isNew?: boolean;
    isBestseller?: boolean;
    price?: number;
    originalPrice?: number;
    discount?: number;
    stock?: number;
    dimensions?: {
        width: number;
        height: number;
        depth: number;
        unit: 'cm' | 'm';
    };
    colors?: string[];
    warranty?: number;
    assemblyRequired?: boolean;
    weight?: number;
    sku?: string;
    rating?: number;
    reviewCount?: number;
}

// Tipo para categorías principales
export type ProductCategory = Product['category'];

// Tipo para subcategorías
export type ProductSubcategory = Product['subcategory'];

// Tipo para filtros
export interface ProductFilters {
    category?: ProductCategory | 'todos';
    subcategory?: ProductSubcategory | 'todos';
    priceMin?: number;
    priceMax?: number;
    isNew?: boolean;
    isBestseller?: boolean;
    inStock?: boolean;
}

// Tipo para ordenamiento
export type ProductSortOption = 'nombre' | 'precio-asc' | 'precio-desc' | 'rating' | 'newest';