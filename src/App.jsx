
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
  Sparkles,
  ChevronDown,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  RotateCcw,
  Target,
  Lightbulb,
  BookOpenCheck
} from 'lucide-react'

import { materias as curriculo } from './curriculo.js'
import { lecciones } from './lecciones.js'

const informacionMaterias = [
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
  const [moduloSeleccionado, setModuloSeleccionado] = useState(null)
  const [temaSeleccionado, setTemaSeleccionado] = useState(null)
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccion, setSeccion] = useState('Inicio')

  const materiaActual = materiaSeleccionada
    ? curriculo.find(item => item.nombre === materiaSeleccionada.nombre)
    : null

  const modulos = materiaActual?.modulos || []

  const moduloActual = moduloSeleccionado !== null
    ? modulos[moduloSeleccionado]
    : null

  const leccionActual = temaSeleccionado
    ? lecciones[temaSeleccionado]
    : null

  function irA(nombre) {
    setSeccion(nombre)
    setMateriaSeleccionada(null)
    setModuloSeleccionado(null)
    setTemaSeleccionado(null)
    setRespuestaSeleccionada(null)
    setMenuAbierto(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function abrirMateria(materia) {
    setMateriaSeleccionada(materia)
    setModuloSeleccionado(null)
    setTemaSeleccionado(null)
    setRespuestaSeleccionada(null)
    setSeccion('Materias')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function abrirTema(tema) {
    setTemaSeleccionado(tema)
    setRespuestaSeleccionada(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function volverMaterias() {
    setMateriaSeleccionada(null)
    setModuloSeleccionado(null)
    setTemaSeleccionado(null)
    setRespuestaSeleccionada(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function volverModulos() {
    setModuloSeleccionado(null)
    setTemaSeleccionado(null)
    setRespuestaSeleccionada(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function seleccionarModulo(index) {
    setModuloSeleccionado(index)
    setTemaSeleccionado(null)
    setRespuestaSeleccionada(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const actividad = leccionActual?.actividad
  const respondio = respuestaSeleccionada !== null
  const respuestaCorrecta = respondio && respuestaSeleccionada === actividad?.respuesta

  return (
    <div className="app">
      <header className="header">
        <a
          className="brand"
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            irA('Inicio')
          }}
        >
          <span className="brand-icon">
            <GraduationCap size={34} />
          </span>
          <span>
            <strong>ABC Campus Virtual</strong>
            <small>Donde tus sueños se convierten en conocimiento</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
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
            <button className="back-link" onClick={volverMaterias}>
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

            {temaSeleccionado ? (
              <div className="lesson-container">
                <button className="back-link" onClick={() => {
                  setTemaSeleccionado(null)
                  setRespuestaSeleccionada(null)
                }}>
                  ← Volver a los temas
                </button>

                <div className="lesson-card">
                  <span className="eyebrow">CLASE DE APRENDIZAJE</span>
                  <h2>{temaSeleccionado}</h2>

                  {leccionActual ? (
                    <>
                      <div className="lesson-objective">
                        <Target size={24} />
                        <div>
                          <h3>Objetivo de aprendizaje</h3>
                          <p>{leccionActual.objetivo}</p>
                        </div>
                      </div>

                      <div className="lesson-text">
                        <h3><BookOpen size={21} /> Explicación del tema</h3>
                        <div className="lesson-explanation">
                          {leccionActual.explicacion}
                        </div>
                      </div>

                      {leccionActual.ejemplo && (
                        <div className="lesson-example">
                          <h3><Lightbulb size={21} /> Ejemplo práctico</h3>
                          <div>{leccionActual.ejemplo}</div>
                        </div>
                      )}

                      {leccionActual.video && (
                        <div className="lesson-video">
                          <h3><PlayCircle size={21} /> Video educativo</h3>
                          <p>Refuerza lo aprendido con este recurso audiovisual.</p>
                          <a
                            href={leccionActual.video}
                            target="_blank"
                            rel="noreferrer"
                            className="primary-button video-button"
                          >
                            Ver video educativo <PlayCircle size={18} />
                          </a>
                        </div>
                      )}

                      {actividad && (
                        <div className="lesson-activity">
                          <span className="eyebrow">COMPRUEBA LO APRENDIDO</span>
                          <h3><ClipboardList size={22} /> Actividad de aprendizaje</h3>
                          <p className="activity-question">{actividad.pregunta}</p>

                          <div className="activity-options">
                            {actividad.opciones.map((opcion, index) => (
                              <button
                                key={index}
                                className={`activity-option ${
                                  respondio && index === actividad.respuesta ? 'correct-option' : ''
                                } ${
                                  respuestaSeleccionada === index && !respuestaCorrecta ? 'incorrect-option' : ''
                                }`}
                                disabled={respondio}
                                onClick={() => setRespuestaSeleccionada(index)}
                              >
                                <span>{String.fromCharCode(65 + index)}</span>
                                {opcion}
                                {respondio && index === actividad.respuesta && (
                                  <CheckCircle size={19} />
                                )}
                              </button>
                            ))}
                          </div>

                          {respondio && (
                            <div className={respuestaCorrecta ? 'activity-feedback correct-feedback' : 'activity-feedback incorrect-feedback'}>
                              <strong>
                                {respuestaCorrecta ? '¡Excelente! Respuesta correcta.' : 'Sigue aprendiendo. Esa no es la respuesta correcta.'}
                              </strong>
                              <p>{actividad.explicacion}</p>
                              <button
                                className="retry-button"
                                onClick={() => setRespuestaSeleccionada(null)}
                              >
                                <RotateCcw size={16} /> Intentar nuevamente
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="coming-content">
                      <BookOpen size={42} />
                      <h3>Lección en preparación</h3>
                      <p>Estamos desarrollando la explicación, los ejemplos, el video educativo y las actividades de este tema.</p>
                      <p>Próximamente podrás estudiar esta lección directamente en ABC Campus Virtual.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : moduloActual ? (
              <div className="modules-container">
                <button className="back-link" onClick={volverModulos}>
                  ← Volver a los módulos
                </button>

                <div className="section-heading">
                  <span className="eyebrow">CONTENIDO DEL MÓDULO</span>
                  <h2>{moduloActual.nombre}</h2>
                  <p>Selecciona un tema para comenzar tu aprendizaje.</p>
                </div>

                <div className="topics-list">
                  {moduloActual.temas.map((tema, index) => (
                    <button
                      className="topic-item"
                      key={tema}
                      onClick={() => abrirTema(tema)}
                    >
                      <span className="topic-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="topic-name">{tema}</span>
                      <span className="topic-arrow"><ChevronRight size={20} /></span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="modules-container">
                <div className="section-heading">
                  <span className="eyebrow">RUTA DE APRENDIZAJE</span>
                  <h2>Explora los módulos</h2>
                  <p>Esta materia está organizada en 5 módulos de aprendizaje.</p>
                </div>

                <div className="modules-grid">
                  {modulos.map((modulo, index) => (
                    <article className="module-card" key={modulo.nombre}>
                      <div className="module-icon">
                        <BookOpenCheck size={28} />
                      </div>
                      <span className="card-number">MÓDULO {String(index + 1).padStart(2, '0')}</span>
                      <h3>{modulo.nombre}</h3>
                      <p>{modulo.temas.length} temas de aprendizaje</p>
                      <button
                        className="explore-button"
                        onClick={() => seleccionarModulo(index)}
                      >
                        Ver temas <ArrowRight size={16} />
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : seccion === 'Inicio' || seccion === 'Materias' ? (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="eyebrow">
                  <Sparkles size={16} /> APRENDE, AVANZA Y LOGRA
                </span>
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
                {informacionMaterias.map((materia, index) => (
                  <article className={`subject-card ${materia.color}`} key={materia.nombre}>
                    <div className="card-art">{materia.icono}</div>
                    <span className="card-number">
                      MATERIA {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{materia.nombre}</h3>
                    <p>{materia.descripcion}</p>
                    <button
                      className="explore-button"
                      onClick={() => abrirMateria(materia)}
                    >
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
            <button className="primary-button" onClick={() => irA('Materias')}>
              Explorar materias
            </button>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <GraduationCap size={30} /> ABC Campus Virtual
        </div>
        <p>Donde tus sueños se convierten en conocimiento</p>
        <strong>Aprende · Avanza · Logra</strong>
        <small>© {new Date().getFullYear()} ABC Campus Virtual</small>
      </footer>
    </div>
  )
}
