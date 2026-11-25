
export const lecciones = {
  // MODULO 1: DISENO ALGORITMICO Y RESOLUCION COMPUTACIONAL

  "Análisis y descomposición de problemas complejos": {
    objetivo: "Analizar problemas complejos, identificar sus componentes y diseñar soluciones mediante el pensamiento computacional.",
    explicacion: `
Antes de desarrollar un programa es necesario comprender el problema
que se desea resolver. El análisis permite identificar qué sucede,
qué se necesita conseguir y cuáles son las condiciones que deben
cumplirse.

La descomposición consiste en dividir un problema complejo en partes
más pequeñas y manejables. Cada parte puede estudiarse y resolverse
por separado.

En el pensamiento computacional también se utilizan:
- Identificación de patrones.
- Abstracción de información.
- Diseño de algoritmos.
- Evaluación de soluciones.

Estas técnicas permiten organizar el trabajo y evitar errores
durante el desarrollo de software.
`,
    ejemplo: `
Problema: crear un sistema para calcular el promedio de un estudiante.

Descomposición:
1. Registrar las calificaciones.
2. Sumar los valores.
3. Dividir entre la cantidad de calificaciones.
4. Mostrar el promedio.
5. Determinar el resultado académico según las reglas establecidas.
`,
    video: "https://www.youtube.com/results?search_query=pensamiento+computacional+descomposicion+de+problemas",
    actividad: {
      pregunta: "¿Cuál es la finalidad principal de descomponer un problema?",
      opciones: [
        "Dividirlo en partes más pequeñas para facilitar su solución",
        "Aumentar innecesariamente la cantidad de código",
        "Eliminar todos los datos del problema",
        "Evitar analizar las condiciones"
      ],
      respuesta: 0,
      explicacion: "La descomposición facilita la comprensión y resolución de problemas complejos."
    }
  },

  "Modelación de soluciones mediante abstracción": {
    objetivo: "Aplicar la abstracción para representar los elementos esenciales de un problema.",
    explicacion: `
La abstracción es una técnica del pensamiento computacional que
permite concentrarse en los aspectos importantes de un problema
y dejar de lado detalles que no influyen en su solución.

En el desarrollo de software, los modelos representan de forma
simplificada sistemas, procesos o situaciones reales.

Para construir un modelo se identifican:
- Elementos principales.
- Características relevantes.
- Relaciones entre los elementos.
- Reglas que describen su funcionamiento.

La abstracción permite reducir la complejidad y facilita
la planificación de una solución informática.
`,
    ejemplo: `
Para representar un sistema de biblioteca no es necesario
describir todos los detalles físicos del edificio.

Se pueden modelar los elementos principales:
Libro: título, autor y código.
Usuario: nombre e identificación.
Préstamo: fecha de entrega y devolución.

Con estos datos se puede diseñar la estructura inicial del sistema.
`,
    video: "https://www.youtube.com/results?search_query=abstraccion+en+pensamiento+computacional",
    actividad: {
      pregunta: "¿Qué busca la abstracción al modelar un problema?",
      opciones: [
        "Incluir absolutamente todos los detalles",
        "Identificar los elementos esenciales y omitir detalles irrelevantes",
        "Eliminar la información necesaria",
        "Reemplazar los algoritmos por imágenes"
      ],
      respuesta: 1,
      explicacion: "La abstracción se concentra en la información relevante para resolver el problema."
    }
  },

  "Diseño de algoritmos y pseudocódigo estructurado": {
    objetivo: "Diseñar algoritmos ordenados y representar sus instrucciones mediante pseudocódigo.",
    explicacion: `
Un algoritmo es un conjunto finito y ordenado de instrucciones
que permite resolver un problema o realizar una tarea.

Un algoritmo debe ser:
- Preciso: sus instrucciones deben ser claras.
- Ordenado: debe seguir una secuencia lógica.
- Finito: debe terminar después de una cantidad limitada de pasos.
- Efectivo: sus instrucciones deben poder ejecutarse.

El pseudocódigo representa un algoritmo utilizando expresiones
parecidas al lenguaje cotidiano y a los lenguajes de programación.

No depende de una sintaxis específica, por lo que permite planificar
la solución antes de escribir el código definitivo.
`,
    ejemplo: `
Algoritmo para calcular el área de un rectángulo:

Inicio
  Leer base
  Leer altura
  area = base * altura
  Escribir area
Fin

El algoritmo recibe dos valores, realiza la multiplicación
y presenta el resultado.
`,
    video: "https://www.youtube.com/results?search_query=algoritmos+y+pseudocodigo+estructurado",
    actividad: {
      pregunta: "¿Qué característica indica que un algoritmo debe terminar?",
      opciones: [
        "Abstracción",
        "Repetición infinita",
        "Finitud",
        "Decoración"
      ],
      respuesta: 2,
      explicacion: "La finitud establece que un algoritmo debe concluir después de un número limitado de pasos."
    }
  },

  "Diagramas de flujo y estructuras de control": {
    objetivo: "Representar algoritmos mediante diagramas de flujo y reconocer las estructuras de control.",
    explicacion: `
Un diagrama de flujo representa gráficamente los pasos de un algoritmo
mediante símbolos conectados por flechas.

Los símbolos más utilizados son:
- Óvalo: inicio o fin.
- Rectángulo: proceso o instrucción.
- Paralelogramo: entrada o salida de datos.
- Rombo: decisión o condición.
- Flechas: dirección del proceso.

Las estructuras de control organizan la ejecución:
1. Secuencial: instrucciones ejecutadas en orden.
2. Condicional: permite elegir entre alternativas.
3. Repetitiva: ejecuta instrucciones varias veces.

Estas estructuras son fundamentales para construir algoritmos
capaces de responder a diferentes situaciones.
`,
    ejemplo: `
Ejemplo de una condición:

Inicio
  Leer edad
  Si edad >= 18 Entonces
    Escribir "Mayor de edad"
  SiNo
    Escribir "Menor de edad"
  FinSi
Fin

El programa selecciona un resultado según el valor ingresado.
`,
    video: "https://www.youtube.com/results?search_query=diagramas+de+flujo+estructuras+de+control",
    actividad: {
      pregunta: "¿Qué símbolo representa una decisión en un diagrama de flujo?",
      opciones: [
        "Óvalo",
        "Rombo",
        "Rectángulo",
        "Flecha"
      ],
      respuesta: 1,
      explicacion: "El rombo representa una condición que permite elegir entre diferentes caminos."
    }
  },

  "Validación, eficiencia y trazabilidad algorítmica": {
    objetivo: "Evaluar algoritmos mediante pruebas, análisis de eficiencia y seguimiento de instrucciones.",
    explicacion: `
La validación permite comprobar que un algoritmo produce resultados
correctos para diferentes datos de entrada.

Las pruebas ayudan a encontrar errores y verificar el funcionamiento.
Se pueden utilizar datos normales, límites y situaciones especiales.

La eficiencia analiza los recursos que necesita una solución,
como el tiempo de ejecución y la memoria.

La trazabilidad permite seguir paso a paso la ejecución de un algoritmo,
registrando cómo cambian sus variables y resultados.

Estas prácticas mejoran la calidad y confiabilidad del software.
`,
    ejemplo: `
Si un algoritmo calcula el promedio de tres calificaciones,
se pueden realizar pruebas con:

Prueba 1: 8, 9, 10. Resultado esperado: 9.
Prueba 2: 5, 5, 5. Resultado esperado: 5.
Prueba 3: 0, 0, 0. Resultado esperado: 0.

Comparar los resultados permite verificar el algoritmo.
`,
    video: "https://www.youtube.com/results?search_query=validacion+pruebas+y+eficiencia+de+algoritmos",
    actividad: {
      pregunta: "¿Para qué sirve la trazabilidad de un algoritmo?",
      opciones: [
        "Para cambiar el lenguaje de programación",
        "Para seguir y registrar los pasos de ejecución",
        "Para eliminar las variables",
        "Para impedir que el programa termine"
      ],
      respuesta: 1,
      explicacion: "La trazabilidad permite observar cómo se ejecutan las instrucciones y cómo cambian los datos."
    }
  },

  // MODULO 2: PROGRAMACION ESTRUCTURADA Y LENGUAJES DE PROGRAMACION

  "Fundamentos de programación estructurada": {
    objetivo: "Comprender los principios de la programación estructurada y su aplicación en el desarrollo de programas.",
    explicacion: `
La programación estructurada es un enfoque que organiza un programa
mediante estructuras lógicas y bloques de instrucciones.

Su propósito es facilitar la comprensión, modificación y mantenimiento
del código.

Se basa principalmente en tres estructuras:
- Secuencia: ejecuta instrucciones en orden.
- Selección: toma decisiones mediante condiciones.
- Iteración: repite instrucciones mientras se cumpla una condición.

También promueve el uso de bloques organizados y evita estructuras
de control innecesariamente complejas.
`,
    ejemplo: `
Ejemplo:

numero = 10

Si numero > 0 Entonces
  Escribir "El número es positivo"
FinSi

La condición determina si se muestra el mensaje.
`,
    video: "https://www.youtube.com/results?search_query=fundamentos+programacion+estructurada",
    actividad: {
      pregunta: "¿Cuáles son las tres estructuras fundamentales de la programación estructurada?",
      opciones: [
        "Secuencia, selección e iteración",
        "Texto, imagen y sonido",
        "Entrada, pantalla y teclado",
        "Clase, objeto y herencia"
      ],
      respuesta: 0,
      explicacion: "La programación estructurada se apoya en secuencias, decisiones y repeticiones."
    }
  },

  "Variables, constantes y tipos de datos": {
    objetivo: "Diferenciar variables, constantes y tipos de datos utilizados en programación.",
    explicacion: `
Una variable es un espacio identificado por un nombre que almacena
un dato cuyo valor puede cambiar durante la ejecución.

Una constante representa un valor que no debe modificarse
durante el funcionamiento previsto del programa.

Los tipos de datos indican qué clase de información se almacena.

Tipos frecuentes:
- Entero: números sin parte decimal.
- Decimal: números con parte fraccionaria.
- Cadena: texto.
- Booleano: verdadero o falso.

Elegir correctamente los tipos de datos ayuda a evitar errores
y permite realizar operaciones adecuadas.
`,
    ejemplo: `
Ejemplo en Python:

nombre = "Lucía"
edad = 17
promedio = 9.25
aprobado = True

nombre almacena texto.
edad almacena un entero.
promedio almacena un número decimal.
aprobado almacena un valor booleano.
`,
    video: "https://www.youtube.com/results?search_query=variables+constantes+tipos+de+datos+programacion",
    actividad: {
      pregunta: "¿Qué tipo de dato representa el valor True?",
      opciones: [
        "Cadena",
        "Decimal",
        "Booleano",
        "Entero"
      ],
      respuesta: 2,
      explicacion: "True es un valor booleano que representa una condición verdadera."
    }
  },

  "Operadores y expresiones en programación": {
    objetivo: "Utilizar operadores aritméticos, relacionales y lógicos para construir expresiones.",
    explicacion: `
Los operadores permiten realizar cálculos, comparar valores
y combinar condiciones dentro de un programa.

Operadores aritméticos:
+ suma, - resta, * multiplicación, / división y % módulo.

Operadores relacionales:
== igual, != diferente, > mayor, < menor, >= mayor o igual
y <= menor o igual.

Operadores lógicos:
and, or y not.

Una expresión combina valores, variables y operadores
para producir un resultado.
`,
    ejemplo: `
Ejemplo en Python:

precio = 20
cantidad = 3
total = precio * cantidad

es_mayor = total > 50

El total será 60 y la expresión es_mayor será True.
`,
    video: "https://www.youtube.com/results?search_query=operadores+aritmeticos+relacionales+logicos+programacion",
    actividad: {
      pregunta: "¿Qué resultado produce la expresión 10 > 5?",
      opciones: [
        "False",
        "True",
        "15",
        "Error"
      ],
      respuesta: 1,
      explicacion: "La comparación es verdadera porque 10 es mayor que 5."
    }
  },

  "Condicionales y estructuras repetitivas": {
    objetivo: "Aplicar decisiones y ciclos para controlar el comportamiento de un programa.",
    explicacion: `
Las estructuras condicionales permiten ejecutar instrucciones
dependiendo de si una condición se cumple.

Entre las formas habituales se encuentran:
- if: ejecuta instrucciones cuando una condición es verdadera.
- if-else: permite elegir entre dos alternativas.
- if-elif-else: permite evaluar varias posibilidades.

Las estructuras repetitivas o ciclos ejecutan un bloque de instrucciones
más de una vez.

Los ciclos comunes son:
- for: repite instrucciones recorriendo una secuencia.
- while: repite mientras una condición sea verdadera.

Es importante establecer condiciones de terminación para evitar
repeticiones que no finalicen.
`,
    ejemplo: `
Ejemplo en Python:

for numero in range(1, 4):
    print(numero)

El ciclo muestra los números 1, 2 y 3.
`,
    video: "https://www.youtube.com/results?search_query=condicionales+y+bucles+python",
    actividad: {
      pregunta: "¿Qué estructura permite repetir instrucciones mientras una condición sea verdadera?",
      opciones: [
        "if",
        "while",
        "print",
        "input"
      ],
      respuesta: 1,
      explicacion: "while repite un bloque de instrucciones mientras su condición se mantenga verdadera."
    }
  },

  "Funciones, procedimientos y modularidad": {
    objetivo: "Crear funciones y organizar programas mediante módulos reutilizables.",
    explicacion: `
Una función es un bloque de código diseñado para realizar una tarea.
Puede recibir datos mediante parámetros y devolver un resultado.

Los procedimientos realizan acciones organizadas y, según el lenguaje,
pueden no devolver un valor explícito.

La modularidad consiste en dividir un programa en partes independientes
que colaboran para resolver un problema.

Sus ventajas incluyen:
- Reutilización de código.
- Mejor organización.
- Facilidad de mantenimiento.
- Pruebas más sencillas.
- Reducción de repeticiones innecesarias.
`,
    ejemplo: `
Ejemplo en Python:

def calcular_area(base, altura):
    return base * altura

resultado = calcular_area(5, 3)
print(resultado)

La función recibe dos parámetros y devuelve el área.
`,
    video: "https://www.youtube.com/results?search_query=funciones+procedimientos+modularidad+python",
    actividad: {
      pregunta: "¿Cuál es una ventaja de utilizar funciones?",
      opciones: [
        "Repetir todo el código manualmente",
        "Organizar y reutilizar instrucciones",
        "Eliminar todos los parámetros",
        "Impedir la ejecución del programa"
      ],
      respuesta: 1,
      explicacion: "Las funciones permiten reutilizar código y organizar mejor las tareas de un programa."
    }
  },

  // MODULO 3: PROGRAMACION ORIENTADA A OBJETOS

  "Fundamentos de la programación orientada a objetos": {
    objetivo: "Comprender los principios de la programación orientada a objetos y reconocer su utilidad en el desarrollo de software.",
    explicacion: `
La programación orientada a objetos (POO) es un paradigma que organiza
el código mediante entidades llamadas objetos. Cada objeto reúne datos
y comportamientos relacionados.

Sus conceptos principales son:
- Clase: plantilla que define características y comportamientos.
- Objeto: instancia creada a partir de una clase.
- Atributos: datos que describen al objeto.
- Métodos: acciones que puede realizar el objeto.

La POO se utiliza en aplicaciones empresariales, videojuegos,
sistemas educativos y plataformas web.

Este paradigma facilita la reutilización, organización y mantenimiento
del software.
`,
    ejemplo: `
En un sistema escolar se puede crear una clase Estudiante.

Sus atributos pueden ser nombre, edad y curso.
Sus métodos pueden ser mostrarDatos() y calcularPromedio().

Cada estudiante creado será un objeto con sus propios datos.
`,
    video: "https://www.youtube.com/results?search_query=fundamentos+programacion+orientada+a+objetos",
    actividad: {
      pregunta: "¿Cuál es el propósito principal de la programación orientada a objetos?",
      opciones: [
        "Organizar el programa mediante objetos que reúnen datos y comportamientos",
        "Eliminar todas las variables",
        "Evitar el uso de métodos",
        "Convertir automáticamente programas en páginas web"
      ],
      respuesta: 0,
      explicacion: "La POO organiza el software en objetos que contienen atributos y métodos."
    }
  },

  "Clases, objetos y atributos": {
    objetivo: "Diferenciar clases y objetos e identificar los atributos que describen sus características.",
    explicacion: `
Una clase funciona como una plantilla para crear objetos.
Define qué información y comportamientos tendrán sus instancias.

Un objeto es una instancia concreta de una clase. Cada objeto puede
tener valores propios para sus atributos.

Los atributos son variables que almacenan características
de un objeto, por ejemplo nombre, precio, color o estado.

Comprender esta diferencia permite representar entidades reales
dentro de un programa.
`,
    ejemplo: `
Ejemplo en Python:

class Estudiante:
    def __init__(self, nombre, curso):
        self.nombre = nombre
        self.curso = curso

alumno = Estudiante("Ana", "Tercero")

La clase es Estudiante.
El objeto es alumno.
Sus atributos son nombre y curso.
`,
    video: "https://www.youtube.com/results?search_query=clases+objetos+atributos+python",
    actividad: {
      pregunta: "En una clase Automóvil, ¿cuál de las siguientes opciones representa un atributo?",
      opciones: [
        "acelerar()",
        "frenar()",
        "color",
        "encenderMotor()"
      ],
      respuesta: 2,
      explicacion: "El color es una característica del automóvil, por eso es un atributo."
    }
  },

  "Métodos, constructores y encapsulamiento": {
    objetivo: "Identificar la función de los métodos y constructores y comprender la importancia del encapsulamiento.",
    explicacion: `
Los métodos son funciones definidas dentro de una clase que describen
las acciones que pueden realizar sus objetos.

El constructor es un método especial que se ejecuta al crear un objeto.
En Python se utiliza __init__ para inicializar sus atributos.

El encapsulamiento consiste en proteger y controlar el acceso
a los datos de un objeto. Ayuda a evitar modificaciones incorrectas
y permite establecer reglas para trabajar con la información.

Estos elementos contribuyen a desarrollar programas organizados
y fáciles de mantener.
`,
    ejemplo: `
Ejemplo en Python:

class Cuenta:
    def __init__(self, titular):
        self.titular = titular
        self.saldo = 0

    def consultar_saldo(self):
        return self.saldo

El constructor inicializa los datos y consultar_saldo()
es un método que permite consultar el saldo.
`,
    video: "https://www.youtube.com/results?search_query=metodos+constructores+encapsulamiento+programacion",
    actividad: {
      pregunta: "¿Qué función cumple un constructor?",
      opciones: [
        "Eliminar todos los objetos",
        "Inicializar un objeto cuando se crea",
        "Cerrar automáticamente el programa",
        "Convertir atributos en archivos"
      ],
      respuesta: 1,
      explicacion: "El constructor prepara el objeto e inicializa sus atributos al momento de crearlo."
    }
  },

  "Herencia y polimorfismo": {
    objetivo: "Comprender cómo la herencia permite reutilizar características y cómo el polimorfismo facilita diferentes comportamientos.",
    explicacion: `
La herencia permite crear una clase nueva a partir de otra existente.
La clase hija puede reutilizar atributos y métodos de la clase padre
e incorporar características propias.

El polimorfismo permite que objetos de diferentes clases respondan
a una misma operación de distintas maneras.

Por ejemplo, diferentes figuras geométricas pueden tener un método
calcular_area(), pero cada figura realiza el cálculo de acuerdo
con su propia forma.

Estos principios favorecen la reutilización y flexibilidad del código.
`,
    ejemplo: `
Ejemplo conceptual:

Clase Animal:
    método hacer_sonido()

Clase Perro:
    hereda de Animal
    hacer_sonido() devuelve "Guau"

Clase Gato:
    hereda de Animal
    hacer_sonido() devuelve "Miau"

Ambas clases comparten una estructura, pero implementan
el comportamiento de manera diferente.
`,
    video: "https://www.youtube.com/results?search_query=herencia+y+polimorfismo+programacion+orientada+a+objetos",
    actividad: {
      pregunta: "¿Qué permite principalmente la herencia?",
      opciones: [
        "Reutilizar características y métodos de otra clase",
        "Eliminar la estructura de las clases",
        "Impedir la creación de objetos",
        "Transformar métodos en imágenes"
      ],
      respuesta: 0,
      explicacion: "La herencia permite aprovechar características de una clase existente y extenderlas."
    }
  },

  "Relaciones entre clases y diseño de aplicaciones": {
    objetivo: "Reconocer las relaciones entre clases y aplicarlas en el diseño de soluciones de software.",
    explicacion: `
En una aplicación, las clases pueden relacionarse para representar
cómo interactúan las distintas partes de un sistema.

Entre las relaciones más comunes se encuentran:

- Asociación: una clase se relaciona con otra.
- Agregación: un objeto contiene o agrupa otros objetos que pueden
  existir independientemente.
- Composición: un objeto está formado por otros elementos cuya
  existencia depende de él.

Por ejemplo, en una plataforma educativa pueden existir las clases
Estudiante, Materia, Docente y Evaluación.

Diseñar correctamente estas relaciones ayuda a organizar
la arquitectura de una aplicación y facilita su mantenimiento.
`,
    ejemplo: `
Una clase Estudiante puede relacionarse con una clase Materia
porque un estudiante puede matricularse en varias materias.

Una clase Materia también puede relacionarse con una clase Docente
que imparte esa asignatura.
`,
    video: "https://www.youtube.com/results?search_query=relaciones+entre+clases+asociacion+agregacion+composicion",
    actividad: {
      pregunta: "¿Qué representa una asociación entre clases?",
      opciones: [
        "Una relación entre clases que interactúan",
        "La eliminación de una clase",
        "Un error de sintaxis",
        "La conversión de un programa en una imagen"
      ],
      respuesta: 0,
      explicacion: "La asociación representa una relación o interacción entre clases dentro de un sistema."
    }
  }
}
