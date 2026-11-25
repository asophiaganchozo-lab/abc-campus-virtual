
export const materias = [
  {
    nombre: 'Programación y Desarrollo de Software',
    modulos: [
      {
        nombre: 'Fundamentos de programación y pensamiento computacional',
        temas: [
          'Introducción a la programación y su importancia',
          'Pensamiento lógico y computacional',
          'Análisis y descomposición de problemas',
          'Algoritmos y resolución de problemas',
          'Diagramas de flujo y pseudocódigo'
        ]
      },
      {
        nombre: 'Variables, datos y operadores',
        temas: [
          'Concepto de datos y tipos de datos',
          'Variables y constantes',
          'Operadores aritméticos',
          'Operadores relacionales y lógicos',
          'Expresiones y entrada y salida de datos'
        ]
      },
      {
        nombre: 'Estructuras de control',
        temas: [
          'Estructuras secuenciales',
          'Estructuras condicionales simples y dobles',
          'Condiciones múltiples',
          'Estructuras repetitivas',
          'Contadores, acumuladores y validaciones'
        ]
      },
      {
        nombre: 'Programación estructurada y modular',
        temas: [
          'Funciones y procedimientos',
          'Parámetros y argumentos',
          'Alcance de variables',
          'Modularización de programas',
          'Pruebas y depuración de algoritmos'
        ]
      },
      {
        nombre: 'Desarrollo de proyectos de software',
        temas: [
          'Análisis de requisitos',
          'Diseño de soluciones computacionales',
          'Introducción a un lenguaje de programación',
          'Construcción y pruebas de un programa',
          'Documentación y presentación del proyecto'
        ]
      }
    ]
  },
  {
    nombre: 'Diseño y Desarrollo Web',
    modulos: [
      { nombre: 'Fundamentos de la web', temas: ['Historia y evolución de Internet', 'Funcionamiento de la web', 'Arquitectura cliente-servidor', 'Navegadores y servidores web', 'Herramientas de desarrollo web'] },
      { nombre: 'Estructura con HTML', temas: ['Estructura de un documento HTML', 'Etiquetas y atributos', 'Textos, enlaces e imágenes', 'Tablas y listas', 'Formularios y elementos semánticos'] },
      { nombre: 'Diseño con CSS', temas: ['Fundamentos de CSS', 'Selectores y propiedades', 'Modelo de caja', 'Flexbox y Grid', 'Diseño adaptable y responsivo'] },
      { nombre: 'Interactividad con JavaScript', temas: ['Fundamentos de JavaScript', 'Variables y tipos de datos', 'Condicionales y ciclos', 'Funciones y eventos', 'Manipulación del DOM'] },
      { nombre: 'Proyecto de desarrollo web', temas: ['Planificación de un sitio web', 'Diseño de interfaces', 'Integración de HTML, CSS y JavaScript', 'Pruebas y accesibilidad', 'Publicación y mantenimiento de un sitio web'] }
    ]
  },
  {
    nombre: 'Bases de Datos',
    modulos: [
      { nombre: 'Fundamentos de bases de datos', temas: ['Concepto e importancia de las bases de datos', 'Tipos de bases de datos', 'Sistemas gestores de bases de datos', 'Arquitectura de bases de datos', 'Aplicaciones en organizaciones'] },
      { nombre: 'Modelado de datos', temas: ['Entidades y atributos', 'Relaciones entre entidades', 'Diagramas entidad-relación', 'Cardinalidad y restricciones', 'Diseño de modelos relacionales'] },
      { nombre: 'Modelo relacional', temas: ['Tablas, filas y columnas', 'Claves primarias y foráneas', 'Integridad de datos', 'Normalización básica', 'Diseño de esquemas relacionales'] },
      { nombre: 'Lenguaje SQL', temas: ['Introducción al lenguaje SQL', 'Creación de bases y tablas', 'Inserción y modificación de registros', 'Consultas y filtros', 'Relaciones y consultas combinadas'] },
      { nombre: 'Administración y proyecto', temas: ['Usuarios y permisos', 'Copias de seguridad', 'Seguridad de la información', 'Mantenimiento de bases de datos', 'Proyecto integrador de base de datos'] }
    ]
  },
  {
    nombre: 'Sistemas Operativos',
    modulos: [
      { nombre: 'Fundamentos de sistemas operativos', temas: ['Concepto y funciones', 'Evolución de los sistemas operativos', 'Tipos de sistemas operativos', 'Arquitectura del sistema', 'Interacción entre hardware y software'] },
      { nombre: 'Administración de procesos', temas: ['Concepto de proceso', 'Estados de los procesos', 'Planificación de procesos', 'Multitarea y multiprocesamiento', 'Administración de recursos'] },
      { nombre: 'Gestión de archivos y memoria', temas: ['Sistemas de archivos', 'Organización de directorios', 'Administración de memoria', 'Memoria virtual', 'Permisos y almacenamiento'] },
      { nombre: 'Instalación y configuración', temas: ['Requisitos de instalación', 'Particiones y sistemas de archivos', 'Instalación de sistemas operativos', 'Configuración de usuarios', 'Controladores y actualizaciones'] },
      { nombre: 'Mantenimiento y seguridad', temas: ['Herramientas de diagnóstico', 'Administración de servicios', 'Protección del sistema', 'Solución de problemas', 'Mantenimiento preventivo y correctivo'] }
    ]
  },
  {
    nombre: 'Redes y Conectividad',
    modulos: [
      { nombre: 'Fundamentos de redes', temas: ['Concepto e importancia de las redes', 'Tipos de redes LAN, MAN y WAN', 'Topologías de red', 'Medios de transmisión', 'Dispositivos de interconexión'] },
      { nombre: 'Modelos y protocolos', temas: ['Modelo OSI', 'Modelo TCP/IP', 'Protocolos de comunicación', 'Direcciones IPv4 e IPv6', 'Puertos y servicios de red'] },
      { nombre: 'Direccionamiento y servicios', temas: ['Direcciones IP y máscaras', 'Subredes básicas', 'Puerta de enlace', 'Servicios DHCP y DNS', 'Configuración de red'] },
      { nombre: 'Conectividad inalámbrica', temas: ['Fundamentos de Wi-Fi', 'Estándares inalámbricos', 'Puntos de acceso y routers', 'Configuración de redes inalámbricas', 'Diagnóstico de conectividad'] },
      { nombre: 'Administración y seguridad', temas: ['Monitoreo de redes', 'Seguridad de comunicaciones', 'Buenas prácticas de administración', 'Detección de fallas', 'Proyecto de diseño de red'] }
    ]
  },
  {
    nombre: 'Soporte Técnico y Mantenimiento',
    modulos: [
      { nombre: 'Arquitectura del computador', temas: ['Componentes internos', 'Placa base y procesador', 'Memoria RAM y almacenamiento', 'Periféricos de entrada y salida', 'Compatibilidad de componentes'] },
      { nombre: 'Diagnóstico de equipos', temas: ['Identificación de fallas', 'Herramientas de diagnóstico', 'Pruebas de hardware', 'Análisis de errores de software', 'Registro de incidencias'] },
      { nombre: 'Mantenimiento preventivo', temas: ['Importancia del mantenimiento', 'Limpieza y cuidado de equipos', 'Revisión de conexiones', 'Actualización de software', 'Planes de mantenimiento'] },
      { nombre: 'Mantenimiento correctivo', temas: ['Procedimientos de reparación', 'Sustitución de componentes', 'Resolución de fallas del sistema', 'Recuperación de funcionamiento', 'Verificación de reparaciones'] },
      { nombre: 'Atención y soporte', temas: ['Atención al usuario', 'Documentación técnica', 'Soporte presencial y remoto', 'Seguridad en el trabajo', 'Proyecto de mantenimiento'] }
    ]
  },
  {
    nombre: 'Aplicaciones Ofimáticas',
    modulos: [
      { nombre: 'Productividad digital', temas: ['Concepto de ofimática', 'Herramientas de productividad', 'Gestión de archivos', 'Formatos digitales', 'Trabajo colaborativo'] },
      { nombre: 'Procesamiento de textos', temas: ['Entorno del procesador de textos', 'Formato de documentos', 'Tablas e imágenes', 'Estilos e índices', 'Documentos académicos'] },
      { nombre: 'Hojas de cálculo', temas: ['Entorno de hojas de cálculo', 'Celdas y referencias', 'Fórmulas y funciones', 'Gráficos y visualización', 'Análisis de datos'] },
      { nombre: 'Presentaciones digitales', temas: ['Diseño de diapositivas', 'Organización de contenidos', 'Recursos multimedia', 'Animaciones y transiciones', 'Exposición efectiva'] },
      { nombre: 'Herramientas colaborativas', temas: ['Almacenamiento en la nube', 'Edición compartida', 'Calendarios y organización', 'Comunicación digital', 'Proyecto ofimático integrado'] }
    ]
  },
  {
    nombre: 'Seguridad Informática',
    modulos: [
      { nombre: 'Principios de seguridad', temas: ['Concepto de seguridad informática', 'Confidencialidad, integridad y disponibilidad', 'Activos y riesgos digitales', 'Amenazas y vulnerabilidades', 'Cultura de seguridad'] },
      { nombre: 'Protección de dispositivos', temas: ['Actualizaciones y parches', 'Antivirus y herramientas de protección', 'Configuración segura', 'Copias de respaldo', 'Protección de dispositivos móviles'] },
      { nombre: 'Seguridad en redes', temas: ['Riesgos de las redes', 'Protección de conexiones', 'Seguridad inalámbrica', 'Cortafuegos y filtrado', 'Buenas prácticas de conectividad'] },
      { nombre: 'Identidad y privacidad digital', temas: ['Identidad digital', 'Protección de datos personales', 'Autenticación y contraseñas seguras', 'Privacidad en plataformas', 'Uso responsable de redes sociales'] },
      { nombre: 'Gestión de incidentes', temas: ['Identificación de incidentes', 'Prevención y respuesta', 'Análisis de riesgos', 'Políticas de seguridad', 'Plan de protección digital'] }
    ]
  },
  {
    nombre: 'Inteligencia Artificial Aplicada',
    modulos: [
      { nombre: 'Fundamentos de inteligencia artificial', temas: ['Concepto e historia de la IA', 'Tipos de inteligencia artificial', 'Aplicaciones actuales', 'Datos y algoritmos', 'Limitaciones de la IA'] },
      { nombre: 'Aprendizaje automático', temas: ['Concepto de aprendizaje automático', 'Aprendizaje supervisado', 'Aprendizaje no supervisado', 'Datos de entrenamiento', 'Evaluación de modelos'] },
      { nombre: 'IA generativa', temas: ['Concepto de IA generativa', 'Modelos de lenguaje', 'Generación de imágenes', 'Diseño de instrucciones o prompts', 'Verificación de resultados'] },
      { nombre: 'Aplicaciones de IA', temas: ['IA en educación', 'IA en salud y ciencia', 'IA en empresas', 'Automatización de tareas', 'Proyectos de aplicación'] },
      { nombre: 'Ética y proyecto de IA', temas: ['Sesgos algorítmicos', 'Privacidad y protección de datos', 'Transparencia y responsabilidad', 'Uso ético de la IA', 'Diseño de un proyecto educativo'] }
    ]
  },
  {
    nombre: 'Ética, Legislación y Ciudadanía Digital',
    modulos: [
      { nombre: 'Ciudadanía digital', temas: ['Concepto de ciudadanía digital', 'Derechos y responsabilidades', 'Participación en entornos digitales', 'Convivencia y respeto en línea', 'Bienestar digital'] },
      { nombre: 'Ética tecnológica', temas: ['Principios de ética digital', 'Uso responsable de la tecnología', 'Propiedad intelectual', 'Plagio y reconocimiento de fuentes', 'Impacto social de la tecnología'] },
      { nombre: 'Privacidad y datos personales', temas: ['Concepto de privacidad', 'Datos personales y sensibles', 'Consentimiento informado', 'Protección de información', 'Huella digital'] },
      { nombre: 'Legislación y derechos digitales', temas: ['Derechos en entornos digitales', 'Normativa ecuatoriana relacionada', 'Propiedad intelectual y licencias', 'Responsabilidad en plataformas', 'Seguridad y convivencia digital'] },
      { nombre: 'Participación responsable', temas: ['Comunicación digital respetuosa', 'Prevención de la desinformación', 'Verificación de fuentes', 'Participación ciudadana', 'Proyecto de ciudadanía digital'] }
    ]
  },
  {
    nombre: 'Matemáticas',
    modulos: [
      { nombre: 'Álgebra y funciones', temas: ['Expresiones algebraicas', 'Ecuaciones e inecuaciones', 'Sistemas de ecuaciones', 'Funciones y sus representaciones', 'Funciones polinómicas y racionales'] },
      { nombre: 'Funciones exponenciales y logarítmicas', temas: ['Potenciación y propiedades', 'Función exponencial', 'Logaritmos y propiedades', 'Función logarítmica', 'Aplicaciones y modelación'] },
      { nombre: 'Geometría y trigonometría', temas: ['Geometría analítica', 'Distancia entre puntos', 'Razones trigonométricas', 'Identidades trigonométricas básicas', 'Aplicaciones de trigonometría'] },
      { nombre: 'Estadística y probabilidad', temas: ['Organización y representación de datos', 'Medidas de tendencia central', 'Medidas de dispersión', 'Probabilidad de eventos', 'Interpretación estadística'] },
      { nombre: 'Razonamiento y modelación matemática', temas: ['Resolución de problemas', 'Modelos matemáticos', 'Sucesiones y progresiones', 'Aplicaciones financieras', 'Proyecto de modelación'] }
    ]
  },
  {
    nombre: 'Física',
    modulos: [
      { nombre: 'Magnitudes y mediciones', temas: ['Magnitudes físicas', 'Sistema Internacional de Unidades', 'Conversión de unidades', 'Notación científica', 'Análisis dimensional'] },
      { nombre: 'Cinemática', temas: ['Posición y desplazamiento', 'Velocidad y rapidez', 'Aceleración', 'Movimiento rectilíneo uniforme', 'Movimiento uniformemente acelerado'] },
      { nombre: 'Dinámica y leyes de Newton', temas: ['Concepto de fuerza', 'Primera ley de Newton', 'Segunda ley de Newton', 'Tercera ley de Newton', 'Fuerzas de rozamiento y equilibrio'] },
      { nombre: 'Trabajo, energía y ondas', temas: ['Trabajo mecánico', 'Energía cinética y potencial', 'Conservación de la energía', 'Movimiento ondulatorio', 'Sonido y fenómenos ondulatorios'] },
      { nombre: 'Electricidad y física aplicada', temas: ['Carga eléctrica', 'Corriente y voltaje', 'Ley de Ohm', 'Circuitos eléctricos básicos', 'Aplicaciones de la física en tecnología'] }
    ]
  },
  {
    nombre: 'Lengua y Literatura',
    modulos: [
      { nombre: 'Comunicación y lenguaje', temas: ['Elementos de la comunicación', 'Funciones del lenguaje', 'Variedades lingüísticas', 'Comunicación oral y escrita', 'Argumentación y pensamiento crítico'] },
      { nombre: 'Comprensión lectora', temas: ['Niveles de comprensión', 'Ideas principales y secundarias', 'Inferencias y conclusiones', 'Análisis crítico de textos', 'Evaluación de fuentes'] },
      { nombre: 'Producción escrita', temas: ['Planificación de textos', 'Coherencia y cohesión', 'Párrafos y conectores', 'Textos expositivos', 'Textos argumentativos'] },
      { nombre: 'Literatura y movimientos', temas: ['Géneros literarios', 'Literatura ecuatoriana', 'Literatura latinoamericana', 'Movimientos literarios', 'Análisis de obras y recursos'] },
      { nombre: 'Investigación y comunicación académica', temas: ['Búsqueda de información', 'Citas y referencias', 'Ensayo académico', 'Exposición oral', 'Proyecto de investigación'] }
    ]
  },
  {
    nombre: 'Inglés',
    modulos: [
      { nombre: 'Communication and identity', temas: ['Introducing yourself and others', 'Personal information and descriptions', 'Present simple and routines', 'Present continuous', 'Everyday communication'] },
      { nombre: 'Experiences and past events', temas: ['Past simple', 'Past continuous', 'Regular and irregular verbs', 'Life experiences', 'Narrating past events'] },
      { nombre: 'Future plans and possibilities', temas: ['Will and going to', 'Present continuous for future', 'First conditional', 'Predictions and intentions', 'Making plans and arrangements'] },
      { nombre: 'Opinions and social issues', temas: ['Expressing opinions', 'Comparatives and superlatives', 'Modal verbs', 'Agreeing and disagreeing', 'Discussing social topics'] },
      { nombre: 'Academic and practical English', temas: ['Reading strategies', 'Writing paragraphs and emails', 'Listening comprehension', 'Speaking and presentations', 'Integrated language project'] }
    ]
  },
  {
    nombre: 'Emprendimiento y Gestión',
    modulos: [
      { nombre: 'Mentalidad emprendedora', temas: ['Concepto de emprendimiento', 'Características de una persona emprendedora', 'Creatividad e innovación', 'Identificación de problemas', 'Oportunidades de negocio'] },
      { nombre: 'Modelo de negocio', temas: ['Propuesta de valor', 'Segmentación de clientes', 'Análisis de mercado', 'Modelo Canvas', 'Competencia y diferenciación'] },
      { nombre: 'Gestión administrativa', temas: ['Planificación y organización', 'Recursos de un emprendimiento', 'Procesos administrativos', 'Trabajo en equipo', 'Liderazgo y toma de decisiones'] },
      { nombre: 'Contabilidad y finanzas', temas: ['Ingresos y gastos', 'Costos fijos y variables', 'Presupuestos', 'Precio de venta y rentabilidad', 'Flujo de caja'] },
      { nombre: 'Marketing y proyecto emprendedor', temas: ['Fundamentos de marketing', 'Marca e identidad', 'Estrategias de promoción', 'Canales digitales de venta', 'Presentación de un plan de negocio'] }
    ]
  }
]
