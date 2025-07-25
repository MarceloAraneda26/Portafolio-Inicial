export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "50px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "left",
        lineHeight: "1.8",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: "40px",
      }}
    >
      {/* Foto */}
      <div
        style={{
          flex: "1 1 250px",
          textAlign: "center",
        }}
      >
        <img
          src="/foto.jpg" // asegúrate de poner tu foto en /public/mi-foto.jpg
          alt="Foto de Marcelo Araneda"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            border: "4px solid #f2f3f4",
          }}
        />
      </div>

      {/* Texto */}
      <div style={{ flex: "3 1 500px" }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "30px",
            textAlign: "left",
          }}
        >
          👋 Sobre Mí
        </h2>

        <p style={{ marginBottom: "20px" }}>
          Soy <strong>Ingeniero Civil en Bioinformática</strong>, con una profunda
          pasión por la ciencia, la tecnología y los datos. Mi formación y
          experiencia me han otorgado habilidades sólidas en desarrollo de
          software, administración de sistemas Linux y gestión de bases de datos SQL.
        </p>

        <p style={{ marginBottom: "20px" }}>
          A lo largo de mi trayectoria profesional he liderado y participado en proyectos
          de diversa índole, destacando:
        </p>

        <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            ✅ <strong>Consultor de Proyectos TI en TIBOX:</strong> realizando
            levantamiento de requerimientos, planificación de tareas, coordinación
            de equipos multidisciplinarios y seguimiento de entregables en
            proyectos de infraestructura y desarrollo tecnológico.
          </li>
          <li style={{ marginBottom: "10px" }}>
            ✅ <strong>Centro de Bioinformática, Simulación y Modelado (CBSM):</strong>
            participando en proyectos FONDECYT y desarrollando simulaciones
            moleculares, optimizando procesos de análisis y mejorando la calidad
            de resultados de investigación.
          </li>
          <li style={{ marginBottom: "10px" }}>
            ✅ <strong>Experiencia en atención al cliente y ventas técnicas:</strong>
            fortaleciendo mis habilidades de comunicación, resolución de problemas
            y orientación al servicio.
          </li>
        </ul>

        <p style={{ marginBottom: "30px" }}>
          Cuento además con un <strong>minor en simulación molecular</strong>,
          cursos especializados en <strong>Excel</strong> y <strong>Power BI</strong>, y la participación en un
          <strong> bootcamp de Product Owner</strong>, lo que ha potenciado mis
          competencias en análisis de datos, gestión ágil de proyectos y
          visualización de información estratégica.
        </p>

        {/* Caja llamativa para descargar CV */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            backgroundColor: "#f2f3f4",
            borderRadius: "16px",
            padding: "30px 20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            border: "2px dashed #0A66C2",
          }}
        >
          <h3
            style={{
              marginBottom: "15px",
              color: "#0A66C2",
              fontSize: "1.5rem",
            }}
          >
            📄 ¿Quieres saber más?
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Descarga mi CV completo y conoce más sobre mi experiencia y habilidades.
          </p>
          <a
            href="/cv.pdf"
            download
            style={{
              display: "inline-block",
              padding: "14px 30px",
              backgroundColor: "#0A66C2",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "18px",
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#084a91";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#0A66C2";
            }}
          >
            📥 Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
