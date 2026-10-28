//esto seria donde se navega entre los diferentes partes de la pagina 
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <span className="logo">Libreria Aula</span>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/catalogo">Catalogo</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}