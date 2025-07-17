export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "40px 20px",
        textAlign: "center",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>📬 Contacto</h2>
      <p style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "1.1rem" }}>
        ¿Te interesa colaborar conmigo o saber más sobre mi trabajo?
        Puedes contactarme a través de los siguientes medios:
      </p>

      {/* Botón LinkedIn */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://www.linkedin.com/in/marcelo-araneda-urbina-8939471ab"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          🔗 Visita mi LinkedIn
        </a>
      </div>

      {/* Botón Correo */}
      <div style={{ marginTop: "20px" }}>
        <a href="mailto:marcelo.araneda26@gmail.com" className="button" style={{ backgroundColor: "#28a745" }}>
          📧 Escríbeme por correo
        </a>
      </div>

      {/* Botón CV */}
      <div style={{ marginTop: "20px" }}>
        <a href="/cv.pdf" download className="button" style={{ backgroundColor: "#ff9800" }}>
          📄 Descargar mi CV
        </a>
      </div>

      {/* Por qué elegirme */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          border: "2px dashed #ccc",
          borderRadius: "12px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <h3 style={{ marginBottom: "10px", fontSize: "1.4rem" }}>💡 ¿Por qué elegirme?</h3>
        <ul
          style={{
            listStyleType: "⭐",
            textAlign: "left",
            display: "inline-block",
            margin: 0,
            padding: 0,
          }}
        >
          <li>Amplia experiencia en proyectos interdisciplinarios</li>
          <li>Habilidades en análisis de datos y visualización</li>
          <li>Capacidad de comunicación y trabajo con usuarios</li>
          <li>Enfoque proactivo y orientado a resultados</li>
        </ul>
      </div>

      {/* Sección de lugares donde he trabajado */}
      <div style={{ marginTop: "50px" }}>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "30px" }}>🏢 He trabajado en:</h3>

        <div className="card-grid">
          {/* Universidad de Talca */}
          <a
            href="https://www.utalca.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src="/utalca-logo.png" alt="Universidad de Talca" />
            <span style={{ fontWeight: "bold", textAlign: "center" }}>Universidad de Talca</span>
          </a>

          {/* CBSM */}
          <a
            href="https://cbsm.utalca.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src="/cbsm-logo.png" alt="CBSM" />
            <span style={{ fontWeight: "bold", textAlign: "center" }}>CBSM</span>
          </a>

          {/* Tibox */}
          <a
            href="https://tibox.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src="/tibox-logo.png" alt="Tibox" />
            <span style={{ fontWeight: "bold", textAlign: "center" }}>Tibox</span>
          </a>
        </div>
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
