export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "40px",
        textAlign: "center",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h2>Contacto</h2>
      <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
        ¿Te interesa colaborar conmigo o saber más sobre mi trabajo? 
        Puedes contactarme a través de los siguientes medios:
      </p>

      {/* Enlace a LinkedIn */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://www.linkedin.com/in/marcelo-araneda-urbina-8939471ab"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 24px",
            backgroundColor: "#0A66C2",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          🔗 Visita mi LinkedIn
        </a>
      </div>

      {/* Correo */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="mailto:marcelo.araneda26@gmail.com"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 24px",
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          📧 Escríbeme por correo
        </a>
      </div>

      {/* Descarga de CV */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="/cv.pdf"
          download
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 24px",
            backgroundColor: "#ff9800",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          📄 Descargar mi CV
        </a>
      </div>

      {/* Elemento extra llamativo */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          border: "2px dashed #ccc",
          borderRadius: "12px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>💡 ¿Por qué elegirme?</h3>
        <ul
          style={{
            listStyleType: "⭐",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          <li>Amplia experiencia en proyectos interdisciplinarios</li>
          <li>Habilidades en análisis de datos y visualización</li>
          <li>Capacidad de comunicación y trabajo con usuarios</li>
          <li>Enfoque proactivo y orientado a resultados</li>
        </ul>
      </div>

      {/* Sección de lugares donde he trabajado */}
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>🏢 He trabajado en:</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Tarjeta 1 */}
          <a
            href="https://www.utalca.cl"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "200px",
              textDecoration: "none",
              color: "#333",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/utalca-logo.png"
              alt="Universidad de Talca"
              style={{ width: "100px", height: "auto", marginBottom: "15px" }}
            />
            <span style={{ fontWeight: "bold", textAlign: "center" }}>
              Universidad de Talca
            </span>
          </a>

          {/* Tarjeta 2 */}
          <a
            href="https://cbsm.utalca.cl/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "200px",
              textDecoration: "none",
              color: "#333",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/cbsm-logo.png"
              alt="CBSM"
              style={{ width: "100px", height: "auto", marginBottom: "15px" }}
            />
            <span style={{ fontWeight: "bold", textAlign: "center" }}>CBSM</span>
          </a>

          {/* Tarjeta 3 */}
          <a
            href="https://tibox.cl"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "200px",
              textDecoration: "none",
              color: "#333",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/tibox-logo.png"
              alt="Tibox"
              style={{ width: "100px", height: "auto", marginBottom: "15px" }}
            />
            <span style={{ fontWeight: "bold", textAlign: "center" }}>Tibox</span>
          </a>
        </div>
      </div>
    </section>
  );
}
