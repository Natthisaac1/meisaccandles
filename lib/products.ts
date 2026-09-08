export type Aroma = "floral" | "amaderado" | "cítrico" | "dulce";
export type Formato = "vaso" | "pilar" | "tarro";

export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
  aroma: Aroma;
  format: Formato;
  burnHours: number;
  size: string;
  wick: string;
  notes: string;
  image: string;
  featured?: boolean;
};

export const aromaLabels: Record<Aroma, string> = {
  floral: "Floral",
  amaderado: "Amaderado",
  cítrico: "Cítrico",
  dulce: "Dulce"
};

export const formatLabels: Record<Formato, string> = {
  vaso: "Vaso",
  pilar: "Pilar",
  tarro: "Tarro"
};

export const products: Product[] = [
  {
    slug: "alba-de-cacao",
    name: "Alba de Cacao",
    price: 18,
    description:
      "Cacao tostado, vainilla tibia y un hilo de café de Loja. Una vela de mañana lenta, para cuando la casa aún está en silencio.",
    aroma: "dulce",
    format: "vaso",
    burnHours: 45,
    size: "220 g",
    wick: "Algodón trenzado",
    notes: "Cacao, vainilla, café",
    image: "/products/alba-de-cacao.jpg",
    featured: true
  },
  {
    slug: "bruma-de-sal",
    name: "Bruma de Sal",
    price: 22,
    description:
      "Sal marina, bergamota y cáscara de limón. Limpia el ambiente sin gritar: un cítrico de costa, fresco y sereno.",
    aroma: "cítrico",
    format: "vaso",
    burnHours: 40,
    size: "200 g",
    wick: "Algodón trenzado",
    notes: "Sal, bergamota, limón",
    image: "/products/bruma-de-sal.jpg"
  },
  {
    slug: "miel-de-montana",
    name: "Miel de Montaña",
    price: 19,
    description:
      "Miel de abeja, flor de naranjo y un fondo cremoso. Dulce, pero claro: pensada para tardes de lectura.",
    aroma: "dulce",
    format: "vaso",
    burnHours: 42,
    size: "210 g",
    wick: "Algodón trenzado",
    notes: "Miel, flor de naranjo, crema",
    image: "/products/miel-de-montana.jpg",
    featured: true
  },
  {
    slug: "jazmin-nocturno",
    name: "Jazmín Nocturno",
    price: 24,
    description:
      "Jazmín blanco, té blanco y un almizcle suave. El floral de la casa: discreto en el día, presente al anochecer.",
    aroma: "floral",
    format: "vaso",
    burnHours: 48,
    size: "230 g",
    wick: "Algodón trenzado",
    notes: "Jazmín, té blanco, almizcle",
    image: "/products/jazmin-nocturno.jpg",
    featured: true
  },
  {
    slug: "naranja-de-loja",
    name: "Naranja de Loja",
    price: 17,
    description:
      "Cáscara de naranja, neroli y un toque de jengibre. Cítrico luminoso, de quema corta para la cocina o el escritorio.",
    aroma: "cítrico",
    format: "vaso",
    burnHours: 36,
    size: "180 g",
    wick: "Algodón trenzado",
    notes: "Naranja, neroli, jengibre",
    image: "/products/naranja-de-loja.jpg"
  },
  {
    slug: "lino-blanco",
    name: "Lino Blanco",
    price: 21,
    description:
      "Algodón recién lavado, flor blanca y un musgo muy ligero. El vaso más quieto de la colección.",
    aroma: "floral",
    format: "vaso",
    burnHours: 44,
    size: "220 g",
    wick: "Algodón trenzado",
    notes: "Algodón, flor blanca, musgo",
    image: "/products/lino-blanco.jpg"
  },
  {
    slug: "flor-de-guayusa",
    name: "Flor de Guayusa",
    price: 20,
    description:
      "Hoja de guayusa, gardenia y un verde de selva. Floral amazónico, claro y un poco salvaje.",
    aroma: "floral",
    format: "vaso",
    burnHours: 46,
    size: "220 g",
    wick: "Algodón trenzado",
    notes: "Guayusa, gardenia, hoja verde",
    image: "/products/flor-de-guayusa.jpg"
  },
  {
    slug: "eucalipto-andino",
    name: "Eucalipto Andino",
    price: 23,
    description:
      "Eucalipto, cedro y hoja de la sierra. Pilar alto, de quema larga, para el rincón más frío de la casa.",
    aroma: "amaderado",
    format: "pilar",
    burnHours: 55,
    size: "280 g",
    wick: "Algodón trenzado",
    notes: "Eucalipto, cedro, hoja",
    image: "/products/eucalipto-andino.jpg",
    featured: true
  },
  {
    slug: "vainilla-de-costa",
    name: "Vainilla de Costa",
    price: 21,
    description:
      "Vainilla de la costa, crema y madera clara. Un pilar dulce, sin empalagar, para la mesa del comedor.",
    aroma: "dulce",
    format: "pilar",
    burnHours: 52,
    size: "260 g",
    wick: "Algodón trenzado",
    notes: "Vainilla, crema, madera clara",
    image: "/products/vainilla-de-costa.jpg"
  },
  {
    slug: "rosa-de-quito",
    name: "Rosa de Quito",
    price: 25,
    description:
      "Rosa fresca, peonía y un fondo de sándalo. Floral de altura: preciso, no empalagoso.",
    aroma: "floral",
    format: "pilar",
    burnHours: 58,
    size: "300 g",
    wick: "Algodón trenzado",
    notes: "Rosa, peonía, sándalo",
    image: "/products/rosa-de-quito.jpg"
  },
  {
    slug: "cedro-silvestre",
    name: "Cedro Silvestre",
    price: 26,
    description:
      "Cedro, musgo y resina suave en tarro de vidrio reusable. El amaderado más profundo de MeisacCandles.",
    aroma: "amaderado",
    format: "tarro",
    burnHours: 50,
    size: "240 g",
    wick: "Algodón trenzado",
    notes: "Cedro, musgo, resina",
    image: "/products/cedro-silvestre.jpg"
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(price);
}
