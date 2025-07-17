export default function Header() {
  return (
    <header
      id="top"
      style={{
        background: "linear-gradient(90deg, #0A66C2, #004182)",
        color: "#fff",
        padding: "50px 20px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Nombre y rol */}
      <h1 style={{ fontSize: "2.5rem", margin: 0, fontWeight: "700" }}>
        Marcelo Araneda
      </h1>
      <h2
        style={{
          fontSize: "1.4rem",
          marginTop: "10px",
          fontWeight: "400",
          color: "#dbe9ff",
        }}
      >
        🚀 Product Owner · Ingeniero Civil en Bioinformática
      </h2>

      {/* Descripción breve */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.1rem",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6",
        }}
      >
        Apasionado por la tecnología, la innovación y el trabajo en equipo.
        Transformo ideas en soluciones digitales con metodologías ágiles y foco en resultados.
      </p>

      {/* Barra de navegación */}
      <nav
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <a href="#about" className="button" style={{ backgroundColor: "#f2f3f4", color: "#0A66C2" }}>
          Sobre mí
        </a>
        <a href="#projects" className="button" style={{ backgroundColor: "#f2f3f4", color: "#0A66C2" }}>
          Proyectos
        </a>
        <a href="#habilidades" className="button" style={{ backgroundColor: "#f2f3f4", color: "#0A66C2" }}>
          Habilidades
        </a>
        <a href="#contact" className="button" style={{ backgroundColor: "#f2f3f4", color: "#0A66C2" }}>
          Contacto
        </a>
      </nav>

      {/* Habilidades clave destacadas */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {["Liderazgo", "Trabajo en equipo", "Comunicación efectiva", "Inglés"].map((skill) => (
          <span
            key={skill}
            style={{
              backgroundColor: "#ffffff33",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "600",
              backdropFilter: "blur(2px)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            ✨ {skill}
          </span>
        ))}
      </div>
    </header>
  );
}
