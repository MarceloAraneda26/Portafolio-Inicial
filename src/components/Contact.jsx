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
     <section
  style={{
    marginTop: "50px",
    textAlign: "center",
  }}
>
  <h3 style={{ fontSize: "1.4rem", marginBottom: "30px" }}>🏢 He trabajado en:</h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    }}
  >
    {/* Universidad de Talca */}
    <a
      href="https://www.utalca.cl/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: "##f2f3f4",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        textDecoration: "none",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "180px",
        width: "100%",
        maxWidth: "250px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src="/utalca-logo.png"
        alt="Universidad de Talca"
        style={{ maxHeight: "80px", objectFit: "contain", marginBottom: "15px" }}
      />
      <span style={{ fontWeight: "bold" }}>Universidad de Talca</span>
    </a>

    {/* CBSM */}
    <a
      href="https://cbsm.utalca.cl/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: "##f2f3f4",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        textDecoration: "none",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "180px",
        width: "100%",
        maxWidth: "250px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src="/cbsm-logo.png"
        alt="CBSM"
        style={{ maxHeight: "80px", objectFit: "contain", marginBottom: "15px" }}
      />
      <span style={{ fontWeight: "bold" }}>CBSM</span>
    </a>

    {/* Tibox */}
    <a
      href="https://tibox.cl/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: "##f2f3f4",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        textDecoration: "none",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "180px",
        width: "100%",
        maxWidth: "250px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src="/tibox-logo.png"
        alt="Tibox"
        style={{ maxHeight: "80px", objectFit: "contain", marginBottom: "15px" }}
      />
      <span style={{ fontWeight: "bold" }}>Tibox</span>
    </a>
  </div>
</section>
 
    </section>
  );
}
