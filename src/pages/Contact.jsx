//aqui es donde se envia los correos para una consulta, en este caso el mio.
//pero lo cambie para que usted profe pueda poner el suyo y probarlo
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_v2mh0g7";
const TEMPLATE_ID = "template_5kx1wik";
const PUBLIC_KEY = "g5ClaKquH6v8NIGFu";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("ok");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="container section">
      <h2>Contacto</h2>
      <div className="contact-grid">
        <form ref={formRef} onSubmit={handleSubmit} className="form">
          <label>Nombre
            <input type="text" name="user_name" required />
          </label>
          <label>Email
            <input type="email" name="user_email" required />
          </label>
          <label>Mensaje
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit" className="btn" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar consulta"}
          </button>
          {status === "ok" && <p className="msg ok">¡Mensaje enviado! Te responderemos pronto.</p>}
          {status === "error" && <p className="msg error">No se pudo enviar. Intentá de nuevo.</p>}
        </form>

        <iframe
          title="Ubicación de la librería"
          className="map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-64.34%2C-23.145%2C-64.31%2C-23.12&layer=mapnik&marker=-23.1322%2C-64.3260"
          loading="lazy"
        />
      </div>
    </section>
  );
}