import { Product } from "../interfaces/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Mesa Contemporánea + 6 Sillas Modelo 462",
        description: "En Rayces te ofrecemos estilo moderno y a medida✨ Presentamos esta mesa contemporánea 1.60 x 0.90 acompañada por 6 sillas modelo 462, con opción de apoyabrazos 🙌🪑✔️ Madera Paraíso ✔️ Lustre y tapizado a elección ✔️ Elegancia, confort y diseño en una sola propuesta",
        category: "conjuntos",
        image: "/imgs/contemporanea-1.png",
        features: ["Madera Paraíso", "Lustre a elección", "Tapizado a elección", "Con opción de apoyabrazos", "1.60 x 0.90m"],
        isNew: true
    },
    {
        id: 2,
        name: "Mesa Radicce + 4 Sillas Modelo 470",
        description: "🌿 En Rayces creamos piezas únicas como esta que se adapta a tu espacio: Mesa Radicce 1.20m de diámetro + 4 sillas modelo 470 🪑✔️ Madera Paraíso ✔️ Lustre y tapizado a elección ✔️ Estilo, calidad y calidez en cada detalle",
        category: "conjuntos",
        image: "/imgs/radicce.png",
        features: ["Madera Paraíso", "1.20m de diámetro", "Lustre a elección", "Tapizado a elección", "4 sillas modelo 470"]
    },
    // {
    //     id: 3,
    //     name: "Mesa Contemporánea Guatambú + 4 Sillas Modelo 503",
    //     description: "🪑 Conjunto Contemporáneo en Rayces Amoblamientos. Elegancia, funcionalidad y calidad en una propuesta ideal para tu comedor: ✨ Mesa contemporánea de 1,30 x 0,80 mts 🌳 Fabricada en madera Guatambú lustrada 🪑 Acompañada por 4 sillas modelo 503, con tapizado a elección",
    //     category: "conjuntos",
    //     image: "mesa-guatambu-503-1.jpg",
    //     features: ["Madera Guatambú", "1.30 x 0.80m", "Lustrada", "4 sillas modelo 503", "Tapizado a elección"]
    // },
    {
        id: 4,
        name: "Mesa Chipre 2x1 + 6 Sillas",
        description: "Promo IMPERDIBLE en Muebles!🔥 Mesa Chipre 2x1 + 6 Sillas 🔥 Elegí calidad, estilo y comodidad para tu hogar con esta propuesta única: ✨ Mesa modelo Chipre Medida: 2x1 metros Material: Madera Paraíso lustrada Incluye 6 sillas con tapizado a elección",
        category: "conjuntos",
        image: "/imgs/mesa-chipre-1.jpg",
        features: ["Madera Paraíso lustrada", "2x1 metros", "6 sillas incluidas", "Tapizado a elección"],
        isBestseller: true
    },
    {
        id: 5,
        name: "Mesa Aura + 4 Sillas Modelo 470",
        description: "Elegí diseño, calidad y calidez natural 🌿 Mesa Aura con tapa de paraíso + 4 sillas modelo 470 en madera paraíso. Lustre y tapizado a elección para que se adapte a tu estilo",
        category: "conjuntos",
        image: "/imgs/aura.png",
        features: ["Tapa de Paraíso", "4 sillas modelo 470", "Madera Paraíso", "Lustre a elección", "Tapizado a elección"]
    },
    {
        id: 6,
        name: "Sillón Davice Onix",
        description: "✨ ¡El combo perfecto de diseño y confort llegó a RAYCES! Rinconero disponible en dos medidas: ➡️ 2 cuerpos: 2.65 mts ➡️ 3 cuerpos: 2.95 mts. Apoya cabezas reclinables con 3 posiciones, desmontables con cierre y relleno de vellón 100% siliconado. Asientos extensibles con múltiples posiciones. Espuma de alta densidad.",
        category: "sillones",
        image: "/imgs/davicce.png",
        features: ["2 medidas disponibles", "Apoya cabezas reclinables", "Relleno 100% siliconado", "Asientos extensibles", "Espuma alta densidad"],
        isNew: true
    },
    {
        id: 7,
        name: "Mesa Ratona Clear",
        description: "✨ ¡Novedad en RAYCES! Tenemos la mesa ratona CLEAR que estabas buscando 😍 Medidas: 1 x 0.60 mts. Colores disponibles: White ⚪ y Black ⚫. Vidrio templado + pegado láser para máxima resistencia y diseño moderno",
        category: "ratonas",
        image: "/imgs/ratona.png",
        features: ["1 x 0.60m", "Vidrio templado", "Pegado láser", "Colores: White y Black", "Diseño moderno"],
        isNew: true
    },
    // {
    //     id: 8,
    //     name: "Sillón Confort Premium",
    //     description: "Sillón ergonómico con tapizado en cuero genuino y estructura de roble macizo. Ideal para relajarse con máximo confort.",
    //     category: "sillones",
    //     image: "/imgs/sillon.png",
    //     features: ["Cuero genuino", "Estructura de roble", "Ergonómico", "Reclinable"]
    // },
    {
        id: 9,
        name: "Esquinero Rayces 2.10m",
        description: "🛋️ Confort y estilo que se adapta a vos – Esquinero Rayces. Sumá funcionalidad y diseño a tu living con nuestro esquinero de 2,10 mts, ideal para optimizar el espacio sin resignar comodidad ✔️ Banqueta móvil para cambiar la disposición según tu ambiente ✔️ Tapizado en tela Floyd con proceso antimancha, pensado para el uso diario ✔️ Color a elección, para que combine perfecto con tu estilo",
        category: "sillones",
        image: "/imgs/esquinero.png",
        features: ["2.10 metros", "Banqueta móvil", "Tela Floyd antimancha", "Color a elección", "Optimiza el espacio"],
        isNew: true
    }
];