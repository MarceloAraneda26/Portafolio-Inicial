export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "40px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Proyectos</h2>
      <p style={{ lineHeight: "1.6", marginTop: "20px" }}>
        He trabajado en proyectos de diferentes disciplinas, integrando mis habilidades en
        bioinformática, tecnología y análisis de datos.
      </p>

      {/* Proyecto FONDECYT */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "left",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Proyecto FONDECYT</h3>
        <p style={{ marginTop: "10px" }}>
          Proyecto <strong>FONDECYT N°1191133</strong>, etapa 2022. El trabajo se tituló:
          <em>
            {" "}
            “Búsqueda de receptóforo en canales de potasio hERG, BK y TREK, y búsqueda
            basada en farmacóforo de compuestos afines al receptóforo encontrado”.
          </em>
        </p>
      </div>

      {/* Proyecto Desarrollo TI para Tibox */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "left",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Proyectos de Desarrollo TI para Tibox</h3>
        <p style={{ marginTop: "10px" }}>
          He participado en diversos proyectos de desarrollo de software y soluciones
          tecnológicas para la empresa <strong>Tibox</strong>, aplicando prácticas de
          ingeniería y metodologías ágiles.
        </p>
      </div>

      {/* Proyecto Analítica y Reportería para Tibox */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "left",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Proyectos de Analítica y Reportería para Tibox</h3>
        <p style={{ marginTop: "10px" }}>
          Implementación de soluciones de <strong>analítica y reportería</strong> para
          clientes de Tibox, mejorando la visualización de datos, procesos de
          automatización y toma de decisiones basada en información.
        </p>
      </div>
    </section>
  );
}
