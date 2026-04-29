import { Product } from "./types"
// services/api.ts
export async function getProdutos() {
  const response = await fetch("http://localhost:8080/produtos")
  return response.json()
}
export const products: Product[] = [
  {
    id: "1",
    name: "Vestido Longo Elegance",
    description: "Vestido longo em tecido fluido, perfeito para ocasiões especiais. Modelagem sofisticada com decote em V.",
    price: 389.90,
    originalPrice: 459.90,
    image: "/images/collection-1.jpg",
    category: "Vestidos",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Azul Marinho", "Vinho"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Conjunto Alfaiataria Premium",
    description: "Conjunto de blazer e calça em alfaiataria premium. Ideal para o ambiente corporativo ou eventos formais.",
    price: 549.90,
    originalPrice: 649.90,
    image: "/images/collection-2.jpg",
    category: "Conjuntos",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Bege", "Preto", "Cinza"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Vestido Midi Romântico",
    description: "Vestido midi em tecido leve, com estampa floral delicada. Perfeito para o dia a dia ou eventos casuais.",
    price: 279.90,
    image: "/images/collection-3.jpg",
    category: "Vestidos",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Branco", "Rosa Claro", "Azul Bebê"],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Blusa Estampada Premium",
    description: "Blusa em seda com estampa exclusiva. Combina perfeitamente com calças de alfaiataria ou jeans.",
    price: 189.90,
    originalPrice: 229.90,
    image: "/images/collection-4.jpg",
    category: "Blusas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Estampado", "Nude", "Preto"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Vestido Cocktail",
    description: "Vestido curto para festas e eventos noturnos. Tecido com brilho sutil e caimento impecável.",
    price: 429.90,
    image: "/images/collection-1.jpg",
    category: "Vestidos",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Preto", "Dourado", "Prata"],
    inStock: true,
  },
  {
    id: "6",
    name: "Calça Pantalona",
    description: "Calça pantalona em tecido fluido. Conforto e elegância para o dia a dia ou eventos.",
    price: 219.90,
    image: "/images/collection-2.jpg",
    category: "Calças",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Bege", "Branco"],
    inStock: true,
  },
  {
    id: "7",
    name: "Saia Midi Plissada",
    description: "Saia midi plissada em tecido acetinado. Peça versátil para compor looks elegantes.",
    price: 199.90,
    originalPrice: 249.90,
    image: "/images/collection-3.jpg",
    category: "Saias",
    sizes: ["P", "M", "G"],
    colors: ["Rosa", "Verde Oliva", "Preto"],
    inStock: true,
  },
  {
    id: "8",
    name: "Blazer Oversized",
    description: "Blazer oversized em alfaiataria italiana. Peça statement para qualquer ocasião.",
    price: 399.90,
    image: "/images/collection-4.jpg",
    category: "Blazers",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Caramelo", "Preto", "Cinza"],
    inStock: true,
  },
]
export const categories = ["Todos", "Vestidos", "Conjuntos", "Blusas", "Calças", "Saias", "Blazers"]



export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "Todos") return products
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}