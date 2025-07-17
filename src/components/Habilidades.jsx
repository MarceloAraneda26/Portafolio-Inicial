export default function Habilidades() {
  const habilidades = [
    {
      categoria: "Sistemas y Herramientas",
      icon: "💻",
      items: [
        "Linux",
        "GNU/Linux",
        "SQL",
        "MySQL",
        "Power BI",
        "Excel",
        "Microsoft Office",
        "Jira",
        "Loop",
        "Azure",
      ],
    },
    {
      categoria: "Lenguajes y Ciencia de Datos",
      icon: "📊",
      items: ["R (Lenguaje de programación)", "Análisis de datos"],
    },
    {
      categoria: "Investigación y Ciencia",
      icon: "🔬",
      items: [
        "Investigación",
        "Acoplamiento molecular",
        "Dinámica molecular",
        "Química computacional",
      ],
    },
    {
      categoria: "Habilidades Personales",
      icon: "🤝",
      items: ["Liderazgo", "Trabajo en equipo", "Comunicación efectiva", "Inglés"],
    },
  ];

  return (
    <section
      id="habilidades"
      style={{
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>💡 Mis Habilidades</h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "40px", lineHeight: "1.6" }}>
        Estas son algunas de las áreas técnicas y personales en las que destaco.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {habilidades.map((grupo) => (
          <div
            key={grupo.categoria}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              minHeight: "300px", // 👈 fuerza misma altura aproximada
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{grupo.icon}</div>
            <h3
              style={{
                color: "#0A66C2",
                marginBottom: "15px",
                fontSize: "1.2rem",
              }}
            >
              {grupo.categoria}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                textAlign: "left",
                width: "100%",
              }}
            >
              {grupo.items.map((item) => (
                <li
                  key={item}
                  style={{
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.95rem",
                  }}
                >
                  <span
                    style={{
                      color: "#28a745",
                      fontWeight: "bold",
                      marginRight: "8px",
                    }}
                  >
                    ✔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a
        href="#top"
        className="button"
        style={{ marginTop: "30px", display: "inline-block" }}
      >
        ⬆️ Volver al inicio
      </a>

    </section>
  );
}
