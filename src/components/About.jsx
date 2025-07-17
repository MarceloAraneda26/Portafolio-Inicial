export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "40px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Sobre mí</h2>

      {/* Foto personal */}
      <img
        src="/foto.jpg" // coloca tu imagen en la carpeta public
        alt="Foto de Marcelo Araneda"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginTop: "20px",
          marginBottom: "20px",
          border: "3px solid #ccc",
        }}
      />

      <p style={{ lineHeight: "1.6", textAlign: "justify", marginBottom: "20px" }}>
        Soy <strong>Marcelo Araneda</strong>, Ingeniero Civil en Bioinformática con una
        profunda pasión por la ciencia, tecnología y los datos. Mi formación y experiencia
        me han otorgado habilidades robustas en desarrollo de software, administración de
        sistemas Linux y gestión de bases de datos SQL. A lo largo de mi trayectoria, he
        tenido la oportunidad de trabajar en diversos proyectos, lo que ha enriquecido mi
        capacidad analítica y de gestión. Además, he desempeñado roles que requieren
        atención directa a usuarios, fortaleciendo mis habilidades de comunicación y
        servicio al cliente.
      </p>

      <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
        También cuento con un <strong>minor en simulación molecular</strong>, he realizado
        cursos de <strong>Excel</strong> y <strong>Power BI</strong>, y participé en un
        <strong> bootcamp de Product Owner</strong>, ampliando mis competencias en áreas
        de análisis, visualización de datos y gestión de proyectos.
      </p>
    </section>
  );
}
