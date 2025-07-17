export default function Projects() {
  const proyectos = [
    {
      titulo: "🔬 Proyecto FONDECYT",
      descripcion:
        "Participación en el proyecto FONDECYT N°1191133 (etapa 2022): \"Búsqueda de receptóforo en canales de potasio hERG, BK y TREK, y búsqueda basada en farmacóforo de compuestos afines al receptóforo encontrado\".",
      detalles: [
        "Dinámicas moleculares",
        "Acoplamiento molecular",
        "Virtual Screening",
        "VMD",
        "Scripting avanzado",
        "Uso de herramientas bioinformáticas",
      ],
      color: "#0A66C2",
      link: "https://cbsm.utalca.cl/wendylab/",
    },
    {
      titulo: "🌱 Desarrollo TI para Tibox",
      descripcion:
        "Diseño y desarrollo de portales y sistemas internos para mejorar la gestión de clientes y productores en el ámbito agrícola.",
      detalles: [
        "Portal para productores y clientes de exportadoras",
        "Portal de visitas a clientes para asesoría agronómica",
        "Portal de ecuación productiva para asesoría agronómica",
      ],
      color: "#28a745",
      link: "https://www.tibox.cl/desarrollo-de-aplicaciones-a-medida/",
    },
    {
      titulo: "📊 Reportería y Analítica para Tibox",
      descripcion:
        "Implementación de soluciones de reportería y analítica para diversas empresas, potenciando la toma de decisiones basada en datos.",
      detalles: [
        "Reportería para exportadoras",
        "Reportería y analítica para empresas de riego",
        "Implementación de Microsoft Fabric en clientes",
        "Asesoramiento con RPA para clientes",
      ],
      color: "#ff9800",
      link: "https://www.tibox.cl/reportes-en-power-bi/",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "50px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>🚀 Mis Proyectos Destacados</h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "50px", lineHeight: "1.6" }}>
        A continuación puedes explorar algunos de los proyectos más relevantes en los que he
        participado. Cada uno destaca mi experiencia técnica y mi capacidad para liderar y
        colaborar en equipos multidisciplinarios.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.titulo}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <h3
              style={{
                color: proyecto.color,
                fontSize: "1.4rem",
                marginBottom: "15px",
              }}
            >
              {proyecto.titulo}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "20px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              {proyecto.descripcion}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}>
              {proyecto.detalles.map((detalle) => (
                <li
                  key={detalle}
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.95rem",
                  }}
                >
                  <span
                    style={{
                      color: proyecto.color,
                      fontWeight: "bold",
                      marginRight: "8px",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✔
                  </span>
                  {detalle}
                </li>
              ))}
            </ul>

            {/* Botón para el link */}
            <a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: proyecto.color,
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#222")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = proyecto.color)}
            >
              🔗 Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
