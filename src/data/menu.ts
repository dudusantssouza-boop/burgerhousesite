/**
 * ============================================================
 *  ÁREA DE EDIÇÃO DO CARDÁPIO — Burger House (DEMONSTRAÇÃO)
 * ============================================================
 *  Edite aqui as informações da loja e os produtos.
 *  Todos os dados são fictícios.
 */
import burger from "@/assets/burger.jpg";
import combo from "@/assets/combo.jpg";
import fries from "@/assets/fries.jpg";
import drink from "@/assets/drink.jpg";

export const STORE = {
  name: "Burger House",
  // Número de DEMONSTRAÇÃO (fictício). Formato: código do país + DDD + número, só dígitos.
  whatsappDemo: "5500000000000",
  whatsappLabel: "(00) 00000-0000 — número de demonstração",
  address: "Rua Fictícia, 123 — Centro, Cidade Exemplo - BR",
  hours: [
    { days: "Terça a Quinta", time: "18h às 23h" },
    { days: "Sexta e Sábado", time: "18h às 00h" },
    { days: "Domingo", time: "17h às 22h" },
    { days: "Segunda", time: "Fechado" },
  ],
  mapQuery: "Praça da Sé, São Paulo",
};

export type Category = "hamburgueres" | "combos" | "acompanhamentos" | "bebidas";

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "hamburgueres", label: "Hambúrgueres" },
  { id: "combos", label: "Combos" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
  { id: "bebidas", label: "Bebidas" },
];

export type Product = {
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  tag?: string;
};

export const PRODUCTS: Product[] = [
  { category: "hamburgueres", name: "House Classic", description: "Blend 160g, cheddar, alface, tomate, cebola roxa e molho da casa.", price: 29.9, image: burger, tag: "Mais pedido" },
  { category: "hamburgueres", name: "Bacon Smash", description: "Dois smash 90g, bacon crocante, cheddar duplo e maionese defumada.", price: 34.9, image: burger },
  { category: "hamburgueres", name: "Yellow Cheese", description: "Blend 180g, queijo prato derretido, cebola caramelizada e pão brioche.", price: 32.9, image: burger },
  { category: "hamburgueres", name: "Veggie House", description: "Burger de grão-de-bico, queijo, rúcula, tomate e molho de ervas.", price: 28.9, image: burger },
  { category: "combos", name: "Combo Classic", description: "House Classic + batata média + refrigerante lata.", price: 42.9, image: combo, tag: "Economize" },
  { category: "combos", name: "Combo Smash", description: "Bacon Smash + batata média + refrigerante lata.", price: 47.9, image: combo },
  { category: "combos", name: "Combo Casal", description: "2 hambúrgueres à escolha + batata grande + 2 bebidas.", price: 84.9, image: combo },
  { category: "acompanhamentos", name: "Batata Frita", description: "Porção crocante com sal e páprica. Serve 1–2 pessoas.", price: 14.9, image: fries },
  { category: "acompanhamentos", name: "Onion Rings", description: "Anéis de cebola empanados com molho barbecue.", price: 17.9, image: fries },
  { category: "acompanhamentos", name: "Batata com Cheddar e Bacon", description: "Batata frita coberta com cheddar cremoso e bacon.", price: 22.9, image: fries },
  { category: "bebidas", name: "Refrigerante Lata", description: "350ml. Diversos sabores.", price: 6.9, image: drink },
  { category: "bebidas", name: "Milkshake", description: "400ml. Chocolate, morango ou baunilha.", price: 18.9, image: drink, tag: "Novo" },
  { category: "bebidas", name: "Suco Natural", description: "500ml. Laranja, limão ou maracujá.", price: 9.9, image: drink },
];
