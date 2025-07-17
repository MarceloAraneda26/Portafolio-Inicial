import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Habilidades from "./components/Habilidades";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./style.css"; // asegúrate de que este archivo exista

export default function App() {
  return (
    <>
      {/* Encabezado */}
      <Header />

      {/* Secciones principales */}
      <main>
        <About />
        <Projects />
        <Habilidades />
        <Contact />
      </main>

      {/* Footer al final */}
      <Footer />

      {/* Botón flotante para volver al inicio */}
      <a
        href="#top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0A66C2",
          color: "#fff",
          padding: "14px 16px",
          borderRadius: "50%",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          transition: "transform 0.3s, box-shadow 0.3s",
          zIndex: 999,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
        }}
        title="Volver al inicio"
      >
        ⬆️
      </a>
    </>
  );
}
