
export const lecciones = {
  // MÓDULO 1: DISEÑO ALGORÍTMICO Y RESOLUCIÓN COMPUTACIONAL

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
  },

  // MÓDULO 2: PROGRAMACIÓN ESTRUCTURADA Y LENGUAJES DE PROGRAMACIÓN

  "Fundamentos de programación estructurada": {
    objetivo: "Comprender los principios de la programación estructurada y organizar programas mediante instrucciones claras y ordenadas.",
    explicacion: `
La programación estructurada es un paradigma que permite desarrollar
programas mediante estructuras lógicas organizadas.

Su propósito es facilitar la comprensión, modificación y mantenimiento
del código.

PRINCIPIOS FUNDAMENTALES

1. Secuencia: las instrucciones se ejecutan en orden.
2. Selección: permite tomar decisiones mediante condiciones.
3. Iteración: permite repetir instrucciones.

VENTAJAS

- Código más organizado.
- Menor repetición innecesaria.
- Facilidad para encontrar errores.
- Mayor facilidad de mantenimiento.

EJEMPLO

Un programa que calcula el promedio de un estudiante puede organizarse
en tres partes: entrada de notas, cálculo del promedio y presentación
del resultado.

APLICACIÓN

Se utiliza en sistemas administrativos, programas educativos y
aplicaciones de gestión.
`,
    ejemplo: "Un programa estructurado separa la lectura de datos, los cálculos y la presentación de resultados.",
    video: "https://www.youtube.com/results?search_query=programacion+estructurada+explicacion",
    actividad: {
      pregunta: "¿Cuáles son las tres estructuras fundamentales de la programación estructurada?",
      opciones: [
        "Texto, imagen y sonido",
        "Secuencia, selección e iteración",
        "Entrada, teclado y pantalla",
        "Variables, archivos y carpetas"
      ],
      respuesta: 1,
      explicacion: "La secuencia, la selección y la iteración permiten organizar el flujo de un programa."
    }
  },

  "Variables, constantes y tipos de datos": {
    objetivo: "Identificar y utilizar variables, constantes y tipos de datos en programas informáticos.",
    explicacion: `
Las variables y constantes permiten almacenar información durante
la ejecución de un programa.

VARIABLES

Son espacios de memoria identificados mediante nombres cuyo valor
puede cambiar durante la ejecución.

Ejemplo:
edad = 16
edad = 17

CONSTANTES

Representan valores que no deben modificarse durante la ejecución
del programa.

Ejemplo:
PI = 3.1416

TIPOS DE DATOS

Entero: almacena números sin decimales.
Real: almacena números con decimales.
Cadena: almacena texto.
Booleano: representa verdadero o falso.

EJEMPLO

nombre = "Ana"
edad = 17
promedio = 9.25
aprobado = verdadero

IMPORTANCIA

Elegir correctamente los tipos de datos ayuda a realizar operaciones
adecuadas y evitar errores.
`,
    ejemplo: "La variable promedio puede almacenar 8.75, mientras que una variable nombre puede almacenar el texto 'Carlos'.",
    video: "https://www.youtube.com/results?search_query=variables+constantes+tipos+de+datos+programacion",
    actividad: {
      pregunta: "¿Qué tipo de dato representa verdadero o falso?",
      opciones: [
        "Cadena",
        "Entero",
        "Booleano",
        "Real"
      ],
      respuesta: 2,
      explicacion: "El tipo booleano representa dos estados lógicos: verdadero y falso."
    }
  },

  "Operadores y expresiones en programación": {
    objetivo: "Aplicar operadores aritméticos, relacionales y lógicos en la construcción de expresiones.",
    explicacion: `
Los operadores son símbolos que permiten realizar operaciones
sobre datos y variables.

OPERADORES ARITMÉTICOS

Suma (+)
Resta (-)
Multiplicación (*)
División (/)
Módulo (%)

OPERADORES RELACIONALES

Mayor que (>)
Menor que (<)
Igual que (==)
Diferente (!=)
Mayor o igual (>=)
Menor o igual (<=)

OPERADORES LÓGICOS

AND: verdadero cuando ambas condiciones son verdaderas.
OR: verdadero cuando al menos una condición es verdadera.
NOT: invierte el valor lógico.

EJEMPLO

edad = 17
edad >= 18

El resultado de la expresión es falso.

EXPRESIONES

Una expresión combina valores, variables y operadores para producir
un resultado.
`,
    ejemplo: "Si nota = 9, la expresión nota >= 7 devuelve verdadero.",
    video: "https://www.youtube.com/results?search_query=operadores+aritmeticos+logicos+relacionales+programacion",
    actividad: {
      pregunta: "¿Qué operador se utiliza para comprobar si dos condiciones son verdaderas?",
      opciones: [
        "OR",
        "AND",
        "NOT",
        "%"
      ],
      respuesta: 1,
      explicacion: "AND requiere que ambas condiciones sean verdaderas."
    }
  },

  "Condicionales y estructuras repetitivas": {
    objetivo: "Implementar decisiones y ciclos para controlar el flujo de ejecución de un programa.",
    explicacion: `
Las estructuras de control determinan cómo se ejecutan las
instrucciones de un programa.

CONDICIONALES

Permiten ejecutar diferentes instrucciones según una condición.

Ejemplo en pseudocódigo:

Si promedio >= 7 Entonces
  Escribir "Aprobado"
SiNo
  Escribir "No aprobado"
FinSi

ESTRUCTURAS REPETITIVAS

Permiten ejecutar instrucciones varias veces.

Mientras:
Repite instrucciones mientras una condición sea verdadera.

Para:
Repite instrucciones una cantidad determinada de veces.

Repetir:
Ejecuta instrucciones y después comprueba una condición.

EJEMPLO

Para contador desde 1 hasta 5:
  Escribir contador
FinPara

El programa muestra los números del 1 al 5.

APLICACIÓN

Se utilizan para validar formularios, recorrer listas y automatizar
procesos repetitivos.
`,
    ejemplo: "Un sistema puede utilizar una condición para verificar si un usuario cumple la edad requerida.",
    video: "https://www.youtube.com/results?search_query=condicionales+y+ciclos+programacion",
    actividad: {
      pregunta: "¿Qué estructura permite repetir instrucciones mientras una condición sea verdadera?",
      opciones: [
        "Mientras",
        "Secuencia",
        "Asignación",
        "Declaración"
      ],
      respuesta: 0,
      explicacion: "La estructura Mientras repite instrucciones mientras se cumpla la condición establecida."
    }
  },

  "Funciones, procedimientos y modularidad": {
    objetivo: "Diseñar programas organizados mediante funciones, procedimientos y módulos reutilizables.",
    explicacion: `
La modularidad consiste en dividir un programa en componentes
más pequeños que realizan tareas específicas.

FUNCIONES

Son bloques de código que pueden recibir datos y devolver un resultado.

Ejemplo:

Funcion sumar(a, b)
  Retornar a + b
FinFuncion

PROCEDIMIENTOS

Son bloques de instrucciones que realizan una tarea y no necesariamente
devuelven un valor.

REUTILIZACIÓN

Permite utilizar una función en diferentes partes del programa
sin escribir nuevamente todas sus instrucciones.

VENTAJAS

- Organización del código.
- Menor repetición.
- Facilidad de mantenimiento.
- Pruebas independientes.
- Mejor comprensión del programa.

APLICACIÓN

En un sistema educativo pueden existir funciones para calcular
promedios, registrar estudiantes y generar reportes.
`,
    ejemplo: "Una función calcularPromedio puede utilizarse en diferentes pantallas de una plataforma educativa.",
    video: "https://www.youtube.com/results?search_query=funciones+procedimientos+modularidad+programacion",
    actividad: {
      pregunta: "¿Cuál es una ventaja principal de utilizar funciones?",
      opciones: [
        "Aumentar la repetición del código",
        "Evitar organizar el programa",
        "Reutilizar instrucciones y organizar tareas",
        "Eliminar todas las variables"
      ],
      respuesta: 2,
      explicacion: "Las funciones permiten reutilizar código y organizar el programa en tareas específicas."
    }
  }
}
