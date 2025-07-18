import "./projects.css";

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
      doc: "/docs/fondecyt.pdf",
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
      doc: "/docs/tibox-desarrollo.pdf",
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
      doc: "/docs/tibox-analitica.pdf",
    },
    {
      titulo: "🚀 Evomove Journey (Mindhub Bootcamp)",
      descripcion:
        "Proyecto desarrollado en el bootcamp de Product Owner de Mindhub. Se trabajó en la conceptualización y planificación de la plataforma Evomove Journey, aplicando metodologías ágiles y herramientas de gestión de producto.",
      detalles: [
        "Aplicación de prácticas de Product Ownership",
        "Definición de backlog y roadmap",
        "Aplicación de metodologías ágiles (Scrum)",
        "Planificación de MVP y releases",
      ],
      color: "#9c27b0",
      link: "https://ecomovejourney.netlify.app/",
      doc: "/docs/evomove-journey.pdf",
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
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
        🚀 Mis Proyectos Destacados
      </h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "50px", lineHeight: "1.6" }}>
        A continuación puedes explorar algunos de los proyectos más relevantes en los
        que he participado. Cada uno incluye herramientas clave y un documento para más detalle.
      </p>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.titulo} className="project-card">
            {/* Parte superior */}
            <div>
              <h3
                className="project-title"
                style={{ color: proyecto.color }}
              >
                {proyecto.titulo}
              </h3>
              <p className="project-description">{proyecto.descripcion}</p>
              <ul className="project-details">
                {proyecto.detalles.map((detalle) => (
                  <li key={detalle}>
                    <span style={{ color: proyecto.color }}>✔</span>
                    {detalle}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botones */}
            <div style={{ marginTop: "20px" }}>
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
                style={{ backgroundColor: proyecto.color }}
              >
                🔗 Ver más
              </a>
              <a
                href={proyecto.doc}
                download
                className="project-button doc"
              >
                📄 Descargar documento
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
