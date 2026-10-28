//la parte de los diferentes productos que hay 
const img = (txt, color) =>
  `https://placehold.co/400x300/${color}/ffffff?text=${txt}`;

export const products = [
  { id: 1, name: "Cuaderno universitario", category: "Cuadernos", price: 3500, image: img("Cuaderno", "4f46e5") },
  { id: 2, name: "Cuaderno tapa dura", category: "Cuadernos", price: 5200, image: img("Cuaderno+Duro", "4f46e5") },
  { id: 3, name: "Lapicera azul x3", category: "Lapiceras", price: 1800, image: img("Lapiceras", "0ea5e9") },
  { id: 4, name: "Lapicera gel colores", category: "Lapiceras", price: 2600, image: img("Gel", "0ea5e9") },
  { id: 5, name: "Lápiz negro HB x12", category: "Lápices", price: 2400, image: img("Lapices", "f59e0b") },
  { id: 6, name: "Lápices de colores x24", category: "Lápices", price: 4100, image: img("Colores", "f59e0b") },
  { id: 7, name: "Mochila escolar", category: "Mochilas", price: 18500, image: img("Mochila", "10b981") },
  { id: 8, name: "Mochila con ruedas", category: "Mochilas", price: 32000, image: img("Mochila+Ruedas", "10b981") },
  { id: 9, name: "Cartulinas de colores x10", category: "Cartulinas", price: 2900, image: img("Cartulinas", "ec4899") },
  { id: 10, name: "Cartulina fluor x5", category: "Cartulinas", price: 2200, image: img("Fluor", "ec4899") },
  { id: 11, name: "Carpeta N°3 con anillos", category: "Carpetas", price: 6800, image: img("Carpeta", "ef4444") },
  { id: 12, name: "Carpeta de oficina A4", category: "Carpetas", price: 4500, image: img("Carpeta+A4", "ef4444") },
];

export const categories = ["Todos", ...new Set(products.map((p) => p.category))];