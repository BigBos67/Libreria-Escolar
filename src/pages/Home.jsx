import { useState, useEffect } from "react";

const URL =
  "https://openlibrary.org/search.json?q=subject:fiction&language=spa&limit=12&fields=key,title,author_name,first_publish_year,cover_i";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al consultar la API");
        return res.json();
      })
      .then((data) => {
        setBooks(data.docs.filter((b) => b.cover_i).slice(0, 8));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Todo para tu año escolar</h1>
          <p>Cuadernos, útiles y libros para estudiantes, docentes y oficinas.</p>
        </div>
      </section>

      <section className="container section">
        <h2>Libros recomendados</h2>
        {loading && <p className="msg">Cargando libros...</p>}
        {error && <p className="msg error">{error}</p>}
        <div className="grid">
          {books.map((b) => (
            <article className="card" key={b.key}>
              <img
                src={`https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`}
                alt={b.title}
              />
              <div className="card-body">
                <h3>{b.title}</h3>
                <p>{b.author_name?.[0] ?? "Autor desconocido"}</p>
                <span className="tag">{b.first_publish_year ?? "s/f"}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}