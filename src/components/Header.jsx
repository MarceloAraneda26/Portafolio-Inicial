export default function Header() {
  const habilidadesClaves = [
  
  
  ];

  return (
    <header
      style={{
        background: "linear-gradient(90deg, #0A66C2, #004182)",
        color: "#fff",
        padding: "30px 20px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        position: "relative",
      }}
    >
      {/* Nombre y Rol */}
      <h1 style={{ fontSize: "2.2rem", margin: "0", fontWeight: "bold" }}>
        Marcelo Araneda
      </h1>
      <h2
        style={{
          fontSize: "1.3rem",
          marginTop: "8px",
          fontWeight: "normal",
          color: "#d0e6ff",
        }}
      >
        🚀 Product Owner | Ingeniero Civil en Bioinformática
      </h2>

      {/* Barra de navegación */}
      <nav
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#about"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.1)",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        >
          Sobre mí
        </a>
        <a
          href="#projects"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.1)",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        >
          Proyectos
        </a>
        <a
          href="#habilidades"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.1)",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        >
          Habilidades
        </a>
        <a
          href="#contact"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.1)",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        >
          Contacto
        </a>
      </nav>

      {/* Habilidades Clave */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {habilidadesClaves.map((hab) => (
          <span
            key={hab}
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "0.95rem",
              boxShadow: "0 0 6px rgba(255,255,255,0.3)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            ✨ {hab}
          </span>
        ))}
      </div>
    </header>
  );
}
