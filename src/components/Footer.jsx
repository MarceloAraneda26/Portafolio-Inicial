export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 20px",
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      {/* Eslogan o descripción corta */}
      <h3 style={{ marginBottom: "10px" }}>Marcelo Araneda – Product Owner & Ingeniero en Bioinformática</h3>
      <p style={{ fontSize: "0.95rem", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto 20px" }}>
        Experto en coordinar equipos multidisciplinarios, priorizar el backlog y garantizar
        que el producto entregue valor continuo. Apasionado por la innovación, la mejora
        continua y la experiencia del usuario.
      </p>

      {/* Links rápidos de navegación */}
      <nav style={{ marginBottom: "20px" }}>
        <a
          href="#about"
          style={{ color: "#61dafb", margin: "0 10px", textDecoration: "none" }}
        >
          Sobre mí
        </a>
        <a
          href="#projects"
          style={{ color: "#61dafb", margin: "0 10px", textDecoration: "none" }}
        >
          Proyectos
        </a>
        <a
          href="#contact"
          style={{ color: "#61dafb", margin: "0 10px", textDecoration: "none" }}
        >
          Contacto
        </a>
      </nav>

      {/* Llamado a la acción */}
      <p style={{ fontSize: "1rem", fontWeight: "bold", marginTop: "10px" }}>
        🚀 Disponible para nuevos desafíos y proyectos innovadores.
      </p>

      {/* Derechos reservados */}
      <p style={{ marginTop: "30px", fontSize: "0.8rem", color: "#bbb" }}>
        © 2025 Marcelo Araneda. Todos los derechos reservados.
      </p>
    </footer>
  );
}
