import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Habilidades from './components/Habilidades.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Habilidades />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
