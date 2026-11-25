
export const lecciones = {
  "Análisis y descomposición de problemas complejos": {
    objetivo: "Analizar problemas complejos, identificar sus componentes y diseñar soluciones mediante el pensamiento computacional.",
    explicacion: `
El análisis y la descomposición de problemas son etapas fundamentales
del desarrollo de software. Antes de escribir código, un programador
debe comprender qué problema necesita resolver.

Un problema complejo puede contener varias dificultades relacionadas.
Por eso, se divide en partes más pequeñas que sean fáciles de estudiar,
comprender y solucionar.

CONCEPTOS FUNDAMENTALES

1. Problema computacional:
Es una situación que puede resolverse mediante un procedimiento
definido y ejecutado por una computadora.

2. Descomposición:
Consiste en dividir un problema grande en tareas pequeñas e
independientes.

3. Abstracción:
Permite concentrarse en la información importante y dejar de lado
los detalles que no afectan la solución.

4. Identificación de datos:
Consiste en reconocer los datos de entrada, los procesos y los
resultados esperados.

EJEMPLO DESARROLLADO

Problema: desarrollar un sistema para calcular las calificaciones
de los estudiantes.

Descomposición:
- Registrar los nombres de los estudiantes.
- Ingresar las calificaciones.
- Calcular el promedio.
- Determinar si el estudiante aprobó.
- Mostrar los resultados.

Datos de entrada:
Calificaciones del estudiante.

Proceso:
Sumar las calificaciones y dividir el resultado para la cantidad
de calificaciones.

Salida:
Promedio final y estado académico.

APLICACIÓN PRÁCTICA

Los sistemas de matrículas, las plataformas educativas y los
programas de facturación utilizan la descomposición para organizar
sus procesos y facilitar el desarrollo de soluciones.
`,
    ejemplo: "Si un sistema debe registrar estudiantes, calcular notas y generar reportes, cada función puede desarrollarse como una parte independiente del programa.",
    video: "https://www.youtube.com/results?search_query=pensamiento+computacional+descomposicion+de+problemas",
    actividad: {
      pregunta: "¿Cuál es el propósito principal de la descomposición de problemas?",
      opciones: [
        "Aumentar la dificultad del programa",
        "Dividir un problema complejo en partes pequeñas",
        "Eliminar todos los datos",
        "Evitar el uso de algoritmos"
      ],
      respuesta: 1,
      explicacion: "Correcto. La descomposición permite dividir un problema complejo en tareas más pequeñas y manejables."
    }
  },

  "Modelación de soluciones mediante abstracción": {
    objetivo: "Comprender cómo representar problemas reales mediante modelos simplificados.",
    explicacion: `
La abstracción es una técnica del pensamiento computacional que
permite representar una situación real utilizando únicamente
sus características esenciales.

En programación, no siempre es necesario representar todos los
detalles de un objeto o proceso. Se seleccionan los elementos
que realmente intervienen en la solución.

CARACTERÍSTICAS

- Identifica información relevante.
- Reduce detalles innecesarios.
- Facilita la comprensión del problema.
- Permite crear modelos de sistemas.

EJEMPLO

Para diseñar un sistema de biblioteca se identifican elementos
como libros, usuarios, préstamos y fechas de devolución.

No es necesario representar el color de cada estante si ese
dato no interviene en el funcionamiento del sistema.

APLICACIÓN

La abstracción se utiliza en simuladores, sistemas administrativos,
aplicaciones móviles y programas de gestión.
`,
    ejemplo: "Un sistema de biblioteca puede representar un libro mediante su título, autor, código y disponibilidad.",
    video: "https://www.youtube.com/results?search_query=abstraccion+en+programacion+explicacion",
    actividad: {
      pregunta: "¿Qué permite realizar la abstracción?",
      opciones: [
        "Representar solamente los aspectos importantes",
        "Agregar información innecesaria",
        "Eliminar el funcionamiento del sistema",
        "Duplicar todos los datos"
      ],
      respuesta: 0,
      explicacion: "La abstracción selecciona los elementos relevantes para simplificar la representación de un problema."
    }
  },

  "Diseño de algoritmos y pseudocódigo estructurado": {
    objetivo: "Diseñar algoritmos mediante instrucciones ordenadas y representarlos utilizando pseudocódigo.",
    explicacion: `
Un algoritmo es un conjunto ordenado y finito de instrucciones
que permite resolver un problema.

Un algoritmo debe ser preciso, comprensible y producir un
resultado después de ejecutar sus instrucciones.

ELEMENTOS DE UN ALGORITMO

Entrada: información que recibe el procedimiento.
Proceso: operaciones realizadas con los datos.
Salida: resultado obtenido.

PSEUDOCÓDIGO

Es una forma de describir un algoritmo mediante instrucciones
parecidas al lenguaje natural y a los lenguajes de programación.

EJEMPLO: CALCULAR UN PROMEDIO

Inicio
  Leer nota1
  Leer nota2
  Leer nota3
  promedio = (nota1 + nota2 + nota3) / 3
  Escribir promedio
Fin

ESTRUCTURAS PRINCIPALES

Secuencial: ejecuta instrucciones en orden.
Condicional: permite tomar decisiones.
Repetitiva: permite repetir instrucciones.

APLICACIÓN

Los algoritmos se utilizan para automatizar cálculos, organizar
información y desarrollar programas informáticos.
`,
    ejemplo: "Si las notas son 8, 9 y 10, el algoritmo calcula (8 + 9 + 10) / 3 y obtiene 9.",
    video: "https://www.youtube.com/results?search_query=algoritmos+y+pseudocodigo+desde+cero",
    actividad: {
      pregunta: "¿Qué es un algoritmo?",
      opciones: [
        "Un dispositivo electrónico",
        "Un conjunto ordenado de instrucciones",
        "Un sistema operativo",
        "Una base de datos"
      ],
      respuesta: 1,
      explicacion: "Un algoritmo es una secuencia finita y ordenada de pasos para resolver un problema."
    }
  },

  "Diagramas de flujo y estructuras de control": {
    objetivo: "Representar procesos mediante diagramas de flujo e identificar sus estructuras de control.",
    explicacion: `
Un diagrama de flujo es una representación gráfica de un algoritmo.
Utiliza símbolos conectados mediante flechas para mostrar el orden
de las operaciones.

SÍMBOLOS PRINCIPALES

Óvalo: representa el inicio o el final.
Rectángulo: representa un proceso.
Rombo: representa una decisión.
Paralelogramo: representa la entrada o salida de datos.
Flechas: indican la dirección del procedimiento.

ESTRUCTURAS DE CONTROL

Secuencia: ejecuta instrucciones una después de otra.

Selección: permite elegir entre diferentes caminos según una
condición.

Repetición: ejecuta instrucciones varias veces mientras se
cumpla una condición.

EJEMPLO

Un sistema verifica si un estudiante aprobó:

1. Recibir el promedio.
2. Comprobar si el promedio es mayor o igual a 7.
3. Mostrar "Aprobado" si se cumple la condición.
4. En caso contrario, mostrar "En proceso de recuperación".

APLICACIÓN

Los diagramas ayudan a planificar programas antes de escribir
el código y facilitan la comunicación entre desarrolladores.
`,
    ejemplo: "Un rombo puede representar la decisión: ¿el promedio es mayor o igual a 7?",
    video: "https://www.youtube.com/results?search_query=diagramas+de+flujo+estructuras+de+control",
    actividad: {
      pregunta: "¿Qué símbolo representa una decisión en un diagrama de flujo?",
      opciones: [
        "Óvalo",
        "Rectángulo",
        "Rombo",
        "Flecha"
      ],
      respuesta: 2,
      explicacion: "El rombo representa una condición que permite seleccionar entre diferentes caminos."
    }
  },

  "Validación, eficiencia y trazabilidad algorítmica": {
    objetivo: "Evaluar algoritmos mediante pruebas, validación de resultados y análisis de eficiencia.",
    explicacion: `
La validación algorítmica permite comprobar que un procedimiento
funcione correctamente y produzca resultados esperados.

VALIDACIÓN

Consiste en verificar que las instrucciones respondan al problema
planteado.

PRUEBAS

Se utilizan diferentes datos para comprobar el funcionamiento
del algoritmo.

Por ejemplo:
- Datos normales.
- Valores límite.
- Datos incorrectos.
- Casos especiales.

EFICIENCIA

Analiza los recursos que utiliza un algoritmo, especialmente
el tiempo de ejecución y la memoria.

TRAZABILIDAD

Permite seguir el recorrido de los datos y las operaciones
durante la ejecución de un algoritmo.

EJEMPLO

Un programa calcula el promedio de tres notas. Para comprobarlo,
se prueban diferentes combinaciones y se revisa que los resultados
sean correctos.

APLICACIÓN

Estas técnicas ayudan a detectar errores, mejorar programas
y mantener sistemas informáticos confiables.
`,
    ejemplo: "Si un programa calcula el promedio de 6, 8 y 10, debe devolver 8. Esta prueba permite verificar su resultado.",
    video: "https://www.youtube.com/results?search_query=pruebas+validacion+algoritmos+programacion",
    actividad: {
      pregunta: "¿Para qué sirve la validación de un algoritmo?",
      opciones: [
        "Para comprobar que funciona correctamente",
        "Para cambiar el nombre del programa",
        "Para eliminar las instrucciones",
        "Para aumentar los errores"
      ],
      respuesta: 0,
      explicacion: "La validación permite comprobar que el algoritmo resuelva correctamente el problema."
    }
  }
}
