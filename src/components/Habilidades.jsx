export default function Habilidades() {
  const habilidades = [
    {
      categoria: "Sistemas y Herramientas",
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
      icon: "🖥️",
    },
    {
      categoria: "Lenguajes y Ciencia de Datos",
      items: ["R (Lenguaje de programación)", "Análisis de datos"],
      icon: "📊",
    },
    {
      categoria: "Investigación y Ciencia",
      items: [
        "Investigación",
        "Acoplamiento molecular",
        "Dinámica molecular",
        "Química computacional",
      ],
      icon: "🔬",
    },
    {
      categoria: "Habilidades Personales",
      items: [
        "Liderazgo",
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Inglés",
      ],
      icon: "🤝",
    },
  ];

  return (
    <section
      id="habilidades"
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>💡 Mis Habilidades</h2>
      <p style={{ marginBottom: "40px", fontSize: "1.1rem", lineHeight: "1.6" }}>
        Estas son algunas de las áreas técnicas y personales en las que me desempeño,
        integrando herramientas, investigación y trabajo colaborativo para lograr
        resultados efectivos.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {habilidades.map((grupo) => (
          <div
            key={grupo.categoria}
            style={{
              backgroundColor: "#f7f7f7",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{grupo.icon}</div>
            <h3 style={{ marginBottom: "15px", color: "#0A66C2" }}>{grupo.categoria}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {grupo.items.map((item) => (
                <li key={item} style={{ marginBottom: "8px", fontSize: "0.95rem" }}>
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
