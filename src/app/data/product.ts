import { Product } from "../interfaces/product";

export // Data
    const products: Product[] = [
        {
            id: 1,
            name: "Sillón Confort Premium",
            price: 899,
            originalPrice: 999,
            discount: 10,
            description: "Sillón ergonómico con tapizado en cuero genuino y estructura de roble macizo.",
            category: "living",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
            features: ["Cuero genuino", "Estructura de roble", "Reclinable"],
            isNew: true
        },
        {
            id: 2,
            name: "Mesa de Centro Moderna",
            price: 355,
            originalPrice: 455,
            discount: 22,
            description: "Mesa elegante con tapa de vidrio templado y base metálica de diseño contemporáneo.",
            category: "living",
            image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop",
            features: ["Vidrio templado", "Base metálica", "120x60cm"],
            isBestseller: true
        },
        {
            id: 3,
            name: "Silla Nordic Style",
            price: 128,
            discount: 0,
            description: "Silla estilo nórdico con respaldo ergonómico en madera de haya natural.",
            category: "comedor",
            image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop",
            features: ["Madera de haya", "Tapizado tela", "Ergonómica"]
        },
        {
            id: 4,
            name: "Rack TV Minimalista",
            price: 652,
            discount: 0,
            description: "Rack para TV hasta 65 pulgadas con compartimentos de almacenamiento ocultos.",
            category: "living",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
            features: ["Melaminico", "150cm ancho", "3 compartimentos"],
            isNew: true
        },
        {
            id: 5,
            name: "Cama Queen Elegance",
            price: 985,
            originalPrice: 1250,
            discount: 21,
            description: "Cama matrimonial con cabecero tapizado y base con cajones integrados.",
            category: "dormitorio",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop",
            features: ["Queen size", "Cabecero tapizado", "Base con cajones"],
            isBestseller: true
        },
        {
            id: 6,
            name: "Mesa Comedor Extensible",
            price: 985,
            discount: 0,
            description: "Mesa de comedor para 6-8 personas extensible en madera maciza premium.",
            category: "comedor",
            image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500&h=400&fit=crop",
            features: ["Madera maciza", "Extensible", "160-200cm"]
        },
        {
            id: 7,
            name: "Set Jardín Rattan",
            price: 1260,
            originalPrice: 1560,
            discount: 19,
            description: "Juego de jardín en rattan sintético resistente para 4 personas.",
            category: "exterior",
            image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&h=400&fit=crop",
            features: ["Rattan sintético", "Resistente UV", "Cojines incluidos"]
        },
        {
            id: 8,
            name: "Sofá Modular L-Shape",
            price: 1899,
            discount: 0,
            description: "Sofá modular en forma de L con tapizado antimanchas para salas amplias.",
            category: "living",
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=400&fit=crop",
            features: ["Modular", "Tela antimanchas", "Espuma HR"],
            isNew: true
        },
        {
            id: 9,
            name: "Escritorio Ejecutivo",
            price: 752,
            discount: 0,
            description: "Escritorio ejecutivo con cajones laterales y acabado en roble natural.",
            category: "oficina",
            image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500&h=400&fit=crop",
            features: ["Melamina roble", "3 cajones", "140x70cm"]
        },
        {
            id: 10,
            name: "Biblioteca Moderna",
            price: 458,
            originalPrice: 580,
            discount: 21,
            description: "Biblioteca modular de 5 estantes con diseño contemporáneo.",
            category: "oficina",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
            features: ["5 estantes", "Modular", "180cm altura"]
        }
    ];