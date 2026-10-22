import { useState } from "react";
import { products, categories } from "../data/products";

export default function Catalog() {
  const [selected, setSelected] = useState("Todos");

  const visible =
    selected === "Todos"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <section className="container section">
      <h2>Catálogo</h2>
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={c === selected ? "chip active" : "chip"}
            onClick={() => setSelected(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {visible.map((p) => (
          <article className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="card-body">
              <span className="tag">{p.category}</span>
              <h3>{p.name}</h3>
              <p className="price">${p.price.toLocaleString("es-AR")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}