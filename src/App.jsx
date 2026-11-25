
import React, { useState } from 'react'
import {
  BookOpen,
  GraduationCap,
  House,
  BookMarked,
  ClipboardList,
  Award,
  Menu,
  X,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const materias = [
  { nombre: 'Programación y Desarrollo de Software', icono: '💻', color: 'purple', descripcion: 'Aprende a diseñar algoritmos, programar y desarrollar soluciones digitales.' },
  { nombre: 'Diseño y Desarrollo Web', icono: '🌐', color: 'pink', descripcion: 'Construye sitios web modernos e interactivos.' },
  { nombre: 'Bases de Datos', icono: '🗄️', color: 'blue', descripcion: 'Organiza, administra y consulta información.' },
  { nombre: 'Sistemas Operativos', icono: '🖥️', color: 'lavender', descripcion: 'Conoce el funcionamiento y la administración de los sistemas.' },
  { nombre: 'Redes y Conectividad', icono: '📡', color: 'gold', descripcion: 'Descubre cómo se comunican los dispositivos y las redes.' },
  { nombre: 'Soporte Técnico y Mantenimiento', icono: '🛠️', color: 'green', descripcion: 'Aprende a diagnosticar y mantener equipos informáticos.' },
  { nombre: 'Aplicaciones Ofimáticas', icono: '📊', color: 'blue', descripcion: 'Utiliza herramientas digitales para crear documentos y presentaciones.' },
  { nombre: 'Seguridad Informática', icono: '🔐', color: 'pink', descripcion: 'Aprende a proteger la información y los sistemas digitales.' },
  { nombre: 'Inteligencia Artificial Aplicada', icono: '🤖', color: 'purple', descripcion: 'Explora los usos y fundamentos de la inteligencia artificial.' },
  { nombre: 'Ética, Legislación y Ciudadanía Digital', icono: '⚖️', color: 'gold', descripcion: 'Desarrolla una participación responsable en el mundo digital.' },
  { nombre: 'Matemáticas', icono: '📐', color: 'lavender', descripcion: 'Fortalece el razonamiento lógico y la resolución de problemas.' },
  { nombre: 'Física', icono: '⚛️', color: 'blue', descripcion: 'Comprende los fenómenos naturales y sus principios.' },
  { nombre: 'Lengua y Literatura', icono: '📚', color: 'pink', descripcion: 'Desarrolla la lectura, escritura y comprensión crítica.' },
  { nombre: 'Inglés', icono: '🌎', color: 'green', descripcion: 'Fortalece tus habilidades de comunicación en inglés.' },
  { nombre: 'Emprendimiento y Gestión', icono: '💡', color: 'gold', descripcion: 'Transforma ideas en proyectos y aprende a gestionarlos.' }
]

const menu = [
  { nombre: 'Inicio', icono: House },
  { nombre: 'Materias', icono: BookOpen },
  { nombre: 'Actividades', icono: ClipboardList },
  { nombre: 'Exámenes', icono: BookMarked },
  { nombre: 'Diplomas', icono: Award }
]

export default function App() {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccion, setSeccion] = useState('Inicio')

  function irA(nombre) {
    setSeccion(nombre)
    setMateriaSeleccionada(null)
    setMenuAbierto(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="#" onClick={() => irA('Inicio')}>
          <span className="brand-icon"><GraduationCap size={34} /></span>
          <span>
            <strong>ABC Campus Virtual</strong>
            <small>Donde tus sueños se convierten en conocimiento</small>
          </span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)} aria-label="Abrir menú">
          {menuAbierto ? <X /> : <Menu />}
        </button>

        <nav className={menuAbierto ? 'navigation open' : 'navigation'}>
          {menu.map(item => {
            const Icon = item.icono
            return (
              <button
                key={item.nombre}
                className={seccion === item.nombre && !materiaSeleccionada ? 'nav-link active' : 'nav-link'}
                onClick={() => irA(item.nombre)}
              >
                <Icon size={17} />
                {item.nombre}
              </button>
            )
          })}
        </nav>
      </header>

      <main>
        {materiaSeleccionada ? (
          <section className="subject-page">
            <button className="back-link" onClick={() => setMateriaSeleccionada(null)}>
              ← Volver a las materias
            </button>
            <div className="subject-heading">
              <span className="subject-big-icon">{materiaSeleccionada.icono}</span>
              <div>
                <span className="eyebrow">AULA VIRTUAL · BACHILLERATO</span>
                <h1>{materiaSeleccionada.nombre}</h1>
                <p>{materiaSeleccionada.descripcion}</p>
              </div>
            </div>
            <div className="coming-content">
              <BookOpen size={42} />
              <h2>Tu aula de aprendizaje</h2>
              <p>Estamos preparando los módulos, las clases, los videos y las actividades de esta materia.</p>
              <p>En los siguientes pasos incorporaremos el contenido educativo completo.</p>
            </div>
          </section>
        ) : seccion === 'Inicio' || seccion === 'Materias' ? (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="eyebrow"><Sparkles size={16} /> APRENDE, AVANZA Y LOGRA</span>
                <h1>¡Bienvenido a <span>ABC Campus Virtual!</span></h1>
                <p>Un espacio creado para descubrir conocimientos, desarrollar habilidades y construir tu futuro.</p>
                <button className="primary-button" onClick={() => irA('Materias')}>
                  Comenzar a aprender <ArrowRight size={18} />
                </button>
              </div>
              <div className="hero-art">
                <div className="hero-circle">
                  <GraduationCap size={110} strokeWidth={1.4} />
                  <BookOpen size={72} strokeWidth={1.5} />
                  <span className="hero-star">✦</span>
                </div>
              </div>
            </section>

            <section className="subjects-section" id="materias">
              <div className="section-heading">
                <span className="eyebrow">TU CAMINO AL CONOCIMIENTO</span>
                <h2>Nuestras 15 materias</h2>
                <p>Explora las asignaturas y descubre todo lo que puedes aprender.</p>
              </div>

              <div className="subjects-grid">
                {materias.map((materia, index) => (
                  <article className={`subject-card ${materia.color}`} key={materia.nombre}>
                    <div className="card-art">{materia.icono}</div>
                    <span className="card-number">MATERIA {String(index + 1).padStart(2, '0')}</span>
                    <h3>{materia.nombre}</h3>
                    <p>{materia.descripcion}</p>
                    <button className="explore-button" onClick={() => setMateriaSeleccionada(materia)}>
                      Explorar materia <ArrowRight size={16} />
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="coming-content section-placeholder">
            <BookOpen size={42} />
            <h2>{seccion}</h2>
            <p>Esta sección se habilitará cuando incorporemos sus funciones y contenidos.</p>
            <button className="primary-button" onClick={() => irA('Materias')}>Explorar materias</button>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-brand"><GraduationCap size={30} /> ABC Campus Virtual</div>
        <p>Donde tus sueños se convierten en conocimiento</p>
        <strong>Aprende · Avanza · Logra</strong>
        <small>© {new Date().getFullYear()} ABC Campus Virtual</small>
      </footer>
    </div>
  )
}
