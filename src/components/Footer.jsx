export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A66C2",
        color: "#fff",
        textAlign: "center",
        padding: "30px 20px",
        marginTop: "50px",
      }}
    >
      <p style={{ margin: "5px 0", fontSize: "1rem" }}>
        © {new Date().getFullYear()} Marcelo Araneda · Todos los derechos reservados
      </p>

      {/* Links rápidos */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://www.linkedin.com/in/marcelo-araneda-urbina-8939471ab"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          LinkedIn
        </a>
        <a
          href="#top"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          Volver arriba
        </a>
      </div>
    </footer>
  );
}
