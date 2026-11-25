
const crearLeccion = (
  objetivo,
  explicacion,
  ejemplo,
  video,
  pregunta,
  opciones,
  respuesta,
  explicacionActividad
) => ({
  objetivo,
  explicacion,
  ejemplo,
  video,
  actividad: {
    pregunta,
    opciones,
    respuesta,
    explicacion: explicacionActividad
  }
})

export const lecciones = {

  // MODULO 1: FUNDAMENTOS DE PROGRAMACION Y PENSAMIENTO COMPUTACIONAL

  'Introducción a la programación y su importancia': crearLeccion(
    'Comprender qué es la programación, cómo funciona y cuál es su importancia en la sociedad actual.',
    `La programación es el proceso de diseñar instrucciones que una computadora puede interpretar y ejecutar para realizar tareas específicas.

Un programa está formado por instrucciones organizadas de manera lógica. Estas instrucciones permiten resolver problemas, procesar información, automatizar actividades y crear aplicaciones.

La programación está presente en páginas web, videojuegos, sistemas bancarios, aplicaciones móviles, plataformas educativas y dispositivos inteligentes.

Para desarrollar un programa se necesita identificar un problema, analizar sus necesidades, diseñar una solución, escribir el código y comprobar que funcione correctamente.

Entre los lenguajes de programación más conocidos se encuentran Python, JavaScript, Java y C++. Cada uno posee características y aplicaciones diferentes.`,
    `Una institución educativa necesita registrar las calificaciones de sus estudiantes. Un programa puede recibir las notas, calcular el promedio y mostrar si el estudiante aprobó.

De esta manera, una tarea que podría realizarse manualmente se automatiza mediante instrucciones.`,
    'https://www.youtube.com/results?search_query=introduccion+a+la+programacion+para+principiantes',
    '¿Cuál es el propósito principal de la programación?',
    [
      'Diseñar instrucciones para resolver problemas mediante computadoras',
      'Reemplazar todos los componentes físicos de un computador',
      'Crear únicamente documentos de texto',
      'Evitar el uso de algoritmos'
    ],
    0,
    'La programación permite crear instrucciones que una computadora ejecuta para resolver problemas y realizar tareas.'
  ),

  'Pensamiento lógico y computacional': crearLeccion(
    'Desarrollar habilidades de razonamiento lógico para analizar situaciones y diseñar soluciones computacionales.',
    `El pensamiento lógico consiste en analizar información, establecer relaciones y obtener conclusiones mediante razonamientos ordenados.

El pensamiento computacional aplica estas habilidades para resolver problemas de forma estructurada. No significa solamente saber programar, sino aprender a plantear soluciones que puedan ejecutarse mediante pasos claros.

Sus principales componentes son:

1. Descomposición: dividir un problema complejo en partes pequeñas.
2. Reconocimiento de patrones: identificar características que se repiten.
3. Abstracción: concentrarse en la información importante.
4. Diseño de algoritmos: organizar instrucciones para resolver el problema.

Estas habilidades permiten enfrentar situaciones complejas y desarrollar soluciones eficientes.`,
    `Para calcular el promedio de tres calificaciones, primero se identifican los datos, después se suman las notas y finalmente se divide el resultado para tres.

El problema se resuelve mediante una secuencia lógica de operaciones.`,
    'https://www.youtube.com/results?search_query=pensamiento+computacional+y+logico',
    '¿Cuál es una característica del pensamiento computacional?',
    [
      'Resolver problemas mediante descomposición, patrones y algoritmos',
      'Memorizar códigos sin comprenderlos',
      'Ejecutar instrucciones sin analizarlas',
      'Eliminar todos los pasos de un problema'
    ],
    0,
    'El pensamiento computacional utiliza estrategias organizadas para analizar y resolver problemas.'
  ),

  'Análisis y descomposición de problemas': crearLeccion(
    'Analizar problemas complejos e identificar sus componentes para construir soluciones organizadas.',
    `Antes de desarrollar un programa es necesario comprender exactamente qué situación se desea resolver.

El análisis de problemas permite identificar el objetivo, los datos disponibles, las restricciones y los resultados esperados.

Una técnica importante es la descomposición, que consiste en dividir un problema grande en tareas más pequeñas y manejables.

Para analizar un problema se pueden seguir estos pasos:

1. Definir el problema.
2. Identificar los datos de entrada.
3. Determinar los procesos necesarios.
4. Establecer los resultados de salida.
5. Dividir el trabajo en tareas.
6. Verificar que cada parte contribuya a la solución.

Esta metodología reduce errores y facilita el desarrollo del software.`,
    `Problema: calcular el valor total de una compra.

Descomposición:
- Obtener el precio de cada producto.
- Registrar las cantidades.
- Multiplicar precio por cantidad.
- Sumar los subtotales.
- Mostrar el total.

Cada tarea representa una parte del problema general.`,
    'https://www.youtube.com/results?search_query=analisis+y+descomposicion+de+problemas+informatica',
    '¿Qué se consigue al descomponer un problema?',
    [
      'Dividirlo en tareas más pequeñas y fáciles de resolver',
      'Aumentar innecesariamente su complejidad',
      'Eliminar la necesidad de analizarlo',
      'Convertirlo directamente en código sin planificación'
    ],
    0,
    'La descomposición permite trabajar cada parte del problema de manera organizada.'
  ),

  'Algoritmos y resolución de problemas': crearLeccion(
    'Diseñar algoritmos ordenados y precisos para resolver problemas mediante procedimientos definidos.',
    `Un algoritmo es un conjunto finito y ordenado de pasos que permite alcanzar un objetivo o resolver un problema.

Los algoritmos se utilizan en programación, matemáticas, procesos administrativos y actividades cotidianas.

Un algoritmo debe cumplir características importantes:

- Precisión: sus instrucciones deben ser claras.
- Orden: los pasos deben seguir una secuencia lógica.
- Finitud: debe terminar después de una cantidad limitada de pasos.
- Entrada: puede recibir datos necesarios.
- Salida: debe producir un resultado.

Los algoritmos pueden representarse mediante lenguaje natural, pseudocódigo o diagramas de flujo.

Diseñar correctamente un algoritmo facilita su posterior traducción a un lenguaje de programación.`,
    `Algoritmo para calcular el área de un rectángulo:

1. Inicio.
2. Solicitar la base.
3. Solicitar la altura.
4. Multiplicar base por altura.
5. Mostrar el área.
6. Fin.

Si la base es 8 y la altura es 4, el resultado es 32 unidades cuadradas.`,
    'https://www.youtube.com/results?search_query=algoritmos+informatica+ejemplos+resueltos',
    '¿Qué característica indica que un algoritmo debe terminar?',
    [
      'Finitud',
      'Repetición infinita',
      'Ambigüedad',
      'Desorganización'
    ],
    0,
    'La finitud establece que un algoritmo debe finalizar después de una cantidad limitada de instrucciones.'
  ),

  'Diagramas de flujo y pseudocódigo': crearLeccion(
    'Representar algoritmos mediante diagramas de flujo y pseudocódigo para facilitar su comprensión.',
    `Los diagramas de flujo y el pseudocódigo son herramientas utilizadas para representar algoritmos antes de escribir el programa definitivo.

Un diagrama de flujo utiliza símbolos conectados mediante flechas para mostrar el recorrido de un proceso.

Algunos símbolos importantes son:

- Óvalo: representa el inicio o el fin.
- Rectángulo: representa una operación o proceso.
- Paralelogramo: representa entrada o salida de datos.
- Rombo: representa una decisión.
- Flechas: indican la dirección del flujo.

El pseudocódigo representa instrucciones mediante expresiones similares al lenguaje humano, sin depender de la sintaxis de un lenguaje específico.

Ambas herramientas ayudan a detectar errores y organizar las instrucciones.`,
    `Pseudocódigo para determinar si una persona es mayor de edad:

INICIO
  LEER edad
  SI edad >= 18 ENTONCES
    ESCRIBIR "Mayor de edad"
  SINO
    ESCRIBIR "Menor de edad"
  FIN SI
FIN

El diagrama de flujo representaría la entrada de edad, la decisión y los dos posibles resultados.`,
    'https://www.youtube.com/results?search_query=diagramas+de+flujo+y+pseudocodigo+ejercicios',
    '¿Qué símbolo representa una decisión en un diagrama de flujo?',
    [
      'Rombo',
      'Rectángulo',
      'Óvalo',
      'Flecha'
    ],
    0,
    'El rombo representa una condición que permite elegir entre diferentes caminos.'
  ),

  // MODULO 2: VARIABLES, DATOS Y OPERADORES

  'Concepto de datos y tipos de datos': crearLeccion(
    'Identificar los datos utilizados en programación y diferenciar sus principales tipos.',
    `Los datos son valores que un programa recibe, almacena, procesa y utiliza para producir resultados.

Los tipos de datos permiten clasificar la información según su naturaleza.

Los tipos más comunes son:

- Entero: números sin parte decimal, como 15 o -8.
- Decimal: números con parte fraccionaria, como 12.5.
- Cadena de texto: secuencias de caracteres, como "Ecuador".
- Booleano: valores verdadero o falso.

La selección del tipo de dato adecuado evita errores y permite realizar operaciones correctamente.

Por ejemplo, no se realizan las mismas operaciones con un número que con una cadena de texto.`,
    `En un sistema académico:

nombre = "María" corresponde a una cadena de texto.

edad = 17 corresponde a un entero.

promedio = 8.75 corresponde a un decimal.

aprobado = true corresponde a un booleano.`,
    'https://www.youtube.com/results?search_query=tipos+de+datos+en+programacion',
    '¿Qué tipo de dato representa el valor true o false?',
    [
      'Booleano',
      'Cadena de texto',
      'Decimal',
      'Entero'
    ],
    0,
    'El tipo booleano representa valores lógicos verdadero o falso.'
  ),

  'Variables y constantes': crearLeccion(
    'Comprender cómo almacenar información mediante variables y constantes.',
    `Una variable es un espacio de almacenamiento identificado mediante un nombre, cuyo valor puede cambiar durante la ejecución de un programa.

Una constante es un valor que se establece para mantenerse sin modificaciones durante el funcionamiento del programa.

Las variables permiten almacenar información como nombres, edades, cantidades y resultados de operaciones.

Al declarar una variable es importante utilizar nombres descriptivos y respetar las reglas del lenguaje de programación.

Las constantes son útiles para valores que deben permanecer iguales, como una tasa fija o un valor de referencia.

La forma de declarar variables y constantes depende del lenguaje utilizado.`,
    `En JavaScript:

let edad = 17

edad = 18

La variable edad puede cambiar.

const PI = 3.1416

El valor de PI se mantiene constante.`,
    'https://www.youtube.com/results?search_query=variables+y+constantes+programacion',
    '¿Cuál es la diferencia principal entre una variable y una constante?',
    [
      'La variable puede cambiar de valor y la constante se mantiene fija',
      'La constante siempre almacena texto',
      'La variable no puede almacenar números',
      'Ambas deben cambiar obligatoriamente'
    ],
    0,
    'Las variables permiten modificar su contenido; las constantes representan valores que no deben reasignarse.'
  ),

  'Operadores aritméticos': crearLeccion(
    'Aplicar operadores aritméticos para realizar cálculos dentro de programas.',
    `Los operadores aritméticos permiten efectuar operaciones matemáticas con datos numéricos.

Los operadores más utilizados son:

- Suma (+): agrega valores.
- Resta (-): calcula diferencias.
- Multiplicación (*): multiplica cantidades.
- División (/): divide valores.
- Módulo (%): obtiene el residuo de una división.
- Exponenciación (**): calcula potencias.

El orden de las operaciones influye en el resultado. Generalmente se resuelven primero los paréntesis, después las potencias, multiplicaciones y divisiones, y finalmente sumas y restas.

Estos operadores se utilizan en calculadoras, sistemas financieros y programas científicos.`,
    `En JavaScript:

let precio = 10
let cantidad = 3
let total = precio * cantidad

El resultado de total será 30.

También se puede utilizar 10 % 3 para obtener el residuo 1.`,
    'https://www.youtube.com/results?search_query=operadores+aritmeticos+programacion+ejemplos',
    '¿Qué resultado produce la expresión 17 % 5?',
    [
      '2',
      '3',
      '5',
      '12'
    ],
    0,
    'El operador módulo devuelve el residuo. Al dividir 17 para 5, el residuo es 2.'
  ),

  'Operadores relacionales y lógicos': crearLeccion(
    'Utilizar operadores relacionales y lógicos para construir condiciones en un programa.',
    `Los operadores relacionales comparan dos valores y producen un resultado verdadero o falso.

Entre ellos se encuentran:

- Mayor que (>)
- Menor que (<)
- Mayor o igual que (>=)
- Menor o igual que (<=)
- Igualdad (== o === según el lenguaje)
- Diferencia (!= o !== según el lenguaje)

Los operadores lógicos permiten combinar o modificar condiciones:

- AND (&&): todas las condiciones deben ser verdaderas.
- OR (||): al menos una condición debe ser verdadera.
- NOT (!): invierte el resultado lógico.

Son fundamentales para tomar decisiones dentro de los programas.`,
    `En JavaScript:

let edad = 17
let tienePermiso = true

let puedeParticipar = edad >= 15 && tienePermiso

El resultado será true porque ambas condiciones se cumplen.`,
    'https://www.youtube.com/results?search_query=operadores+relacionales+y+logicos+programacion',
    '¿Qué operador lógico exige que todas las condiciones sean verdaderas?',
    [
      'AND (&&)',
      'OR (||)',
      'NOT (!)',
      'Módulo (%)'
    ],
    0,
    'AND devuelve verdadero únicamente cuando todas las condiciones evaluadas son verdaderas.'
  ),

  'Expresiones y entrada y salida de datos': crearLeccion(
    'Construir expresiones y gestionar la entrada y salida de información en programas.',
    `Una expresión es una combinación de valores, variables y operadores que produce un resultado.

Las expresiones pueden ser aritméticas, relacionales o lógicas.

La entrada de datos permite que el usuario proporcione información al programa. La salida muestra resultados o mensajes.

En diferentes lenguajes se utilizan instrucciones específicas para estas operaciones.

En JavaScript, por ejemplo, se puede utilizar prompt para solicitar información y console.log para mostrar resultados en la consola.

Es importante validar los datos recibidos para evitar cálculos incorrectos.`,
    `Ejemplo en JavaScript:

let nombre = prompt("Escribe tu nombre")
console.log("Bienvenido " + nombre)

El programa solicita un nombre y después muestra un mensaje de bienvenida.`,
    'https://www.youtube.com/results?search_query=entrada+y+salida+de+datos+programacion',
    '¿Qué permite la entrada de datos?',
    [
      'Recibir información proporcionada al programa',
      'Eliminar automáticamente las variables',
      'Cerrar el programa',
      'Impedir que el usuario interactúe'
    ],
    0,
    'La entrada permite recibir información que será utilizada durante la ejecución del programa.'
  ),

  // MODULO 3: ESTRUCTURAS DE CONTROL

  'Estructuras secuenciales': crearLeccion(
    'Comprender y aplicar estructuras secuenciales para ejecutar instrucciones en orden.',
    `Las estructuras secuenciales son aquellas en las que las instrucciones se ejecutan una después de otra, siguiendo el orden establecido.

Constituyen la forma más sencilla de organizar un algoritmo.

En este tipo de estructura no existen decisiones ni repeticiones. Cada instrucción se ejecuta después de que termina la anterior.

Son apropiadas para procesos en los que se conoce de antemano el conjunto de operaciones necesarias.

Una secuencia incorrecta puede generar resultados equivocados, por lo que el orden de las instrucciones es importante.`,
    `Algoritmo para calcular el área de un triángulo:

1. Leer la base.
2. Leer la altura.
3. Calcular área = (base * altura) / 2.
4. Mostrar el área.

Cada paso se ejecuta en el orden indicado.`,
    'https://www.youtube.com/results?search_query=estructura+secuencial+programacion',
    '¿Cómo se ejecutan las instrucciones de una estructura secuencial?',
    [
      'Una después de otra, en orden',
      'Todas al mismo tiempo obligatoriamente',
      'Únicamente cuando una condición es falsa',
      'En un orden aleatorio'
    ],
    0,
    'La estructura secuencial ejecuta las instrucciones siguiendo el orden en que fueron escritas.'
  ),

  'Estructuras condicionales simples y dobles': crearLeccion(
    'Aplicar estructuras condicionales para ejecutar instrucciones según el resultado de una condición.',
    `Las estructuras condicionales permiten que un programa tome decisiones dependiendo de una expresión lógica.

Una condición simple utiliza SI para ejecutar una instrucción cuando se cumple una condición.

Una condición doble utiliza SI y SINO para establecer dos caminos posibles.

Estas estructuras permiten adaptar el comportamiento del programa a diferentes situaciones.

Las condiciones deben formularse correctamente y considerar los posibles valores de entrada.`,
    `Ejemplo:

let nota = 8

if (nota >= 7) {
  console.log("Aprobado")
} else {
  console.log("Reprobado")
}

El programa evalúa la nota y muestra el mensaje correspondiente.`,
    'https://www.youtube.com/results?search_query=condicionales+if+else+programacion',
    '¿Para qué se utiliza la instrucción else?',
    [
      'Para ejecutar una alternativa cuando la condición no se cumple',
      'Para declarar una constante',
      'Para repetir instrucciones infinitamente',
      'Para finalizar siempre el programa'
    ],
    0,
    'Else permite ejecutar un bloque alternativo cuando la condición del if resulta falsa.'
  ),

  'Condiciones múltiples': crearLeccion(
    'Diseñar decisiones con varias alternativas utilizando condiciones múltiples.',
    `Las condiciones múltiples permiten evaluar varias posibilidades dentro de un mismo proceso.

Se pueden construir mediante if, else if y else, o mediante estructuras switch, dependiendo del lenguaje.

Estas herramientas permiten que un programa responda de manera diferente según los datos recibidos.

Es importante organizar las condiciones desde los casos más específicos hasta los generales para evitar resultados incorrectos.

También se debe considerar qué sucede cuando ningún caso coincide.`,
    `Ejemplo:

let nota = 8

if (nota >= 9) {
  console.log("Excelente")
} else if (nota >= 7) {
  console.log("Aprobado")
} else {
  console.log("Debe mejorar")
}

El resultado será "Aprobado".`,
    'https://www.youtube.com/results?search_query=condiciones+multiples+if+else+switch',
    '¿Qué estructura permite evaluar varias alternativas mediante casos?',
    [
      'switch',
      'console.log',
      'let',
      'prompt'
    ],
    0,
    'Switch permite comparar una expresión con distintos casos posibles.'
  ),

  'Estructuras repetitivas': crearLeccion(
    'Utilizar ciclos para repetir instrucciones de manera controlada.',
    `Las estructuras repetitivas, también conocidas como ciclos o bucles, permiten ejecutar un bloque de instrucciones varias veces.

Se utilizan cuando una tarea debe repetirse y hacerlo manualmente sería ineficiente.

Entre las estructuras más comunes se encuentran:

- for: se utiliza frecuentemente cuando se conoce la cantidad de repeticiones.
- while: repite instrucciones mientras una condición sea verdadera.
- do while: ejecuta primero el bloque y después evalúa la condición.

Es importante establecer una condición de finalización para evitar ciclos que no terminen.

Los ciclos se utilizan en recorridos de listas, cálculos, validaciones y procesamiento de información.`,
    `Ejemplo con for en JavaScript:

for (let i = 1; i <= 5; i++) {
  console.log(i)
}

El programa muestra los números del 1 al 5.`,
    'https://www.youtube.com/results?search_query=ciclos+for+while+do+while+programacion',
    '¿Qué estructura repetitiva se utiliza frecuentemente cuando se conoce la cantidad de repeticiones?',
    [
      'for',
      'if',
      'switch',
      'const'
    ],
    0,
    'El ciclo for permite controlar las repeticiones mediante una inicialización, una condición y una actualización.'
  ),

  'Contadores, acumuladores y validaciones': crearLeccion(
    'Implementar contadores, acumuladores y validaciones para controlar procesos de programación.',
    `Los contadores y acumuladores son recursos utilizados para procesar información dentro de los ciclos.

Un contador aumenta o disminuye generalmente en una cantidad fija. Se utiliza para registrar cuántas veces ocurre un evento.

Un acumulador guarda resultados parciales, como la suma de varios valores.

Las validaciones comprueban que los datos cumplan determinadas condiciones antes de ser procesados.

Estos recursos ayudan a construir programas más confiables y organizados.

Es recomendable comprobar valores vacíos, cantidades negativas cuando no están permitidas y datos que no correspondan al tipo esperado.`,
    `Ejemplo:

let suma = 0

for (let i = 1; i <= 4; i++) {
  suma = suma + i
}

console.log(suma)

El acumulador suma los valores 1, 2, 3 y 4. El resultado es 10.`,
    'https://www.youtube.com/results?search_query=contadores+acumuladores+y+validaciones+programacion',
    '¿Cuál es la función principal de un acumulador?',
    [
      'Guardar resultados parciales de operaciones',
      'Eliminar todas las condiciones',
      'Detener automáticamente cualquier ciclo',
      'Cambiar el lenguaje de programación'
    ],
    0,
    'Un acumulador conserva un resultado parcial que se actualiza durante el procesamiento.'
  ),

  // MODULO 4: PROGRAMACION ESTRUCTURADA Y MODULAR

  'Funciones y procedimientos': crearLeccion(
    'Comprender y crear funciones y procedimientos para organizar programas en bloques reutilizables.',
    `La programación estructurada organiza un programa mediante estructuras secuenciales, condicionales y repetitivas.

Dentro de este enfoque se utilizan funciones y procedimientos para dividir un programa en partes más pequeñas.

Una función es un bloque de código que realiza una tarea y puede devolver un resultado.

Un procedimiento realiza una tarea específica y, según el lenguaje o la convención utilizada, puede no devolver un valor.

La reutilización de código evita repetir instrucciones y facilita el mantenimiento del programa.

Las funciones deben tener nombres descriptivos y responsabilidades claras.`,
    `Ejemplo en JavaScript:

function calcularArea(base, altura) {
  return (base * altura) / 2
}

let resultado = calcularArea(10, 6)

console.log(resultado)

La función devuelve 30, que representa el área del triángulo.`,
    'https://www.youtube.com/results?search_query=funciones+y+procedimientos+programacion',
    '¿Qué caracteriza principalmente a una función?',
    [
      'Puede realizar una tarea y devolver un resultado',
      'Solo puede mostrar imágenes',
      'No puede recibir datos',
      'Siempre debe ejecutarse infinitamente'
    ],
    0,
    'Una función agrupa instrucciones y puede devolver un valor mediante return.'
  ),

  'Parámetros y argumentos': crearLeccion(
    'Diferenciar parámetros y argumentos y utilizarlos para enviar información a las funciones.',
    `Los parámetros son variables definidas en la declaración de una función para recibir información.

Los argumentos son los valores concretos que se envían cuando se llama a esa función.

Gracias a ellos, una misma función puede trabajar con diferentes datos sin necesidad de escribir nuevamente todo el código.

Una función puede recibir uno o varios parámetros. También puede utilizar valores predeterminados, dependiendo del lenguaje.

Comprender esta diferencia ayuda a diseñar programas flexibles y reutilizables.`,
    `Ejemplo:

function saludar(nombre) {
  return "Hola, " + nombre
}

saludar("Ana")

En este ejemplo:
- nombre es el parámetro.
- "Ana" es el argumento.`,
    'https://www.youtube.com/results?search_query=parametros+y+argumentos+en+funciones',
    'En la llamada calcular(5), ¿qué representa el número 5?',
    [
      'Un argumento',
      'El nombre de la función',
      'Una estructura condicional',
      'Una palabra reservada'
    ],
    0,
    'El valor 5 es un argumento porque se proporciona al llamar a la función.'
  ),

  'Alcance de variables': crearLeccion(
    'Identificar el alcance de las variables y comprender dónde pueden utilizarse dentro de un programa.',
    `El alcance de una variable, conocido como scope, determina las partes de un programa desde las cuales puede accederse a ella.

Existen diferentes tipos de alcance.

El alcance global permite utilizar una variable desde diferentes partes del programa, según las reglas del lenguaje.

El alcance local limita el acceso a una variable dentro de una función o bloque determinado.

En JavaScript, let y const respetan el alcance de bloque, mientras que var tiene reglas diferentes.

Utilizar correctamente el alcance evita conflictos entre variables y mejora la organización del código.`,
    `Ejemplo:

function mostrarMensaje() {
  let mensaje = "Bienvenido"
  console.log(mensaje)
}

mostrarMensaje()

La variable mensaje está declarada dentro de la función y su alcance es local a esa función.`,
    'https://www.youtube.com/results?search_query=scope+alcance+de+variables+javascript',
    '¿Dónde puede utilizarse una variable local declarada dentro de una función?',
    [
      'Dentro del ámbito donde fue declarada',
      'En cualquier archivo de Internet',
      'Únicamente en otro computador',
      'En todos los programas automáticamente'
    ],
    0,
    'Una variable local solo está disponible dentro del ámbito que la contiene.'
  ),

  'Modularización de programas': crearLeccion(
    'Organizar programas en módulos independientes para mejorar su mantenimiento y reutilización.',
    `La modularización consiste en dividir un programa en componentes o módulos que cumplen funciones específicas.

Cada módulo se encarga de una parte del sistema y puede comunicarse con otros mediante interfaces definidas.

Esta estrategia permite trabajar en proyectos grandes de forma más organizada.

Entre sus ventajas se encuentran:

- Facilita la comprensión del código.
- Reduce la repetición de instrucciones.
- Permite reutilizar componentes.
- Facilita las pruebas.
- Simplifica el mantenimiento.
- Favorece el trabajo colaborativo.

Una buena modularización busca que cada componente tenga una responsabilidad clara.`,
    `En un sistema académico se pueden crear módulos independientes:

- estudiantes.js: administra estudiantes.
- calificaciones.js: procesa notas.
- reportes.js: genera informes.

La aplicación principal utiliza estos módulos para integrar las funciones del sistema.`,
    'https://www.youtube.com/results?search_query=modularizacion+de+programas+programacion',
    '¿Cuál es una ventaja de modularizar un programa?',
    [
      'Facilitar el mantenimiento y la reutilización del código',
      'Aumentar la repetición de instrucciones',
      'Eliminar la organización del proyecto',
      'Impedir el trabajo colaborativo'
    ],
    0,
    'La modularización divide el sistema en componentes organizados y facilita su mantenimiento.'
  ),

  'Pruebas y depuración de algoritmos': crearLeccion(
    'Aplicar pruebas y técnicas de depuración para detectar y corregir errores en programas.',
    `Las pruebas de software permiten comprobar si un programa funciona de acuerdo con los requisitos establecidos.

La depuración, conocida como debugging, es el proceso de localizar, analizar y corregir errores.

Los errores pueden ser de sintaxis, cuando se incumplen las reglas del lenguaje; de ejecución, cuando ocurre un problema durante el funcionamiento; o lógicos, cuando el programa funciona pero produce resultados incorrectos.

Entre las técnicas utilizadas se encuentran:

- Probar diferentes valores de entrada.
- Revisar los resultados esperados.
- Utilizar mensajes de seguimiento.
- Examinar variables durante la ejecución.
- Usar herramientas de depuración.

Las pruebas deben considerar casos normales, límites y situaciones inesperadas.`,
    `Una función debe calcular el promedio de tres notas.

Si recibe 8, 9 y 10, el resultado esperado es 9.

Si devuelve 27, el programa está sumando correctamente, pero falta dividir entre tres.

La prueba permite identificar el error lógico.`,
    'https://www.youtube.com/results?search_query=pruebas+y+depuracion+de+software',
    '¿Qué es la depuración de un programa?',
    [
      'El proceso de localizar y corregir errores',
      'La creación automática de imágenes',
      'La eliminación de todos los datos',
      'La publicación de una página web'
    ],
    0,
    'La depuración permite identificar las causas de los errores y corregir el código.'
  ),

  // MODULO 5: DESARROLLO DE PROYECTOS DE SOFTWARE

  'Análisis de requisitos': crearLeccion(
    'Identificar y documentar los requisitos necesarios para desarrollar un proyecto de software.',
    `El análisis de requisitos es una etapa del desarrollo de software en la que se determinan las necesidades y expectativas de las personas que utilizarán el sistema.

Los requisitos describen lo que el sistema debe hacer y las condiciones que debe cumplir.

Se clasifican principalmente en:

- Requisitos funcionales: describen las operaciones y servicios que debe ofrecer el sistema.
- Requisitos no funcionales: establecen características de calidad como seguridad, rendimiento, disponibilidad y facilidad de uso.

Para obtener requisitos se pueden realizar entrevistas, encuestas, observaciones y análisis de documentos.

Una correcta identificación de requisitos evita desarrollar funciones innecesarias y permite construir una solución adecuada.`,
    `Proyecto: sistema de biblioteca escolar.

Requisitos funcionales:
- Registrar libros.
- Registrar estudiantes.
- Consultar préstamos.
- Registrar devoluciones.

Requisitos no funcionales:
- Proteger los datos.
- Mostrar resultados rápidamente.
- Tener una interfaz fácil de utilizar.`,
    'https://www.youtube.com/results?search_query=analisis+de+requisitos+ingenieria+de+software',
    '¿Cuál es un ejemplo de requisito funcional?',
    [
      'Permitir registrar nuevos estudiantes',
      'Tener una interfaz visual agradable',
      'Responder rápidamente',
      'Mantener una alta disponibilidad'
    ],
    0,
    'Registrar estudiantes es una función específica que el sistema debe realizar.'
  ),

  'Diseño de soluciones computacionales': crearLeccion(
    'Planificar la estructura, los componentes y el funcionamiento de una solución computacional.',
    `El diseño de soluciones computacionales transforma los requisitos identificados en una propuesta técnica que orienta la construcción del software.

En esta etapa se determina cómo estará organizado el sistema, qué componentes tendrá y cómo se relacionarán.

El diseño puede incluir:

- Arquitectura del sistema.
- Diseño de bases de datos.
- Diagramas de procesos.
- Diseño de interfaces.
- Organización de módulos.
- Definición de tecnologías.

Un diseño adecuado considera la seguridad, la facilidad de uso, el mantenimiento y la posibilidad de ampliar el sistema.

Esta planificación sirve como guía para los programadores durante la implementación.`,
    `Para un sistema de biblioteca se puede diseñar:

1. Una pantalla para registrar libros.
2. Una base de datos para almacenar información.
3. Un módulo de préstamos.
4. Un módulo de devoluciones.
5. Un panel de reportes.

Cada componente tendrá una función dentro del sistema.`,
    'https://www.youtube.com/results?search_query=diseño+de+soluciones+computacionales+software',
    '¿Qué se define principalmente durante el diseño del software?',
    [
      'La estructura y los componentes de la solución',
      'Únicamente el nombre del programador',
      'La eliminación de los requisitos',
      'La publicidad del producto'
    ],
    0,
    'El diseño establece cómo se organizará y funcionará la solución antes de implementarla.'
  ),

  'Introducción a un lenguaje de programación': crearLeccion(
    'Reconocer las características de un lenguaje de programación y comprender sus elementos básicos.',
    `Un lenguaje de programación es un sistema formal que permite escribir instrucciones para que una computadora realice determinadas operaciones.

Cada lenguaje tiene reglas sintácticas y semánticas que determinan cómo deben escribirse y qué significado tienen las instrucciones.

Existen distintos paradigmas y lenguajes, entre ellos:

- Python: conocido por su sintaxis clara y uso educativo, científico y tecnológico.
- JavaScript: ampliamente utilizado en el desarrollo web.
- Java: utilizado en aplicaciones empresariales y otros sistemas.
- C++: empleado en software de alto rendimiento y programación de sistemas.

Para comenzar a trabajar con un lenguaje es necesario conocer sus variables, operadores, estructuras de control, funciones y herramientas de ejecución.

La elección depende de los objetivos y requisitos del proyecto.`,
    `Ejemplo inicial en JavaScript:

let nombre = "Estudiante"

console.log("Hola " + nombre)

La instrucción console.log muestra un mensaje en la consola.`,
    'https://www.youtube.com/results?search_query=introduccion+a+lenguajes+de+programacion+javascript+python',
    '¿Para qué sirve un lenguaje de programación?',
    [
      'Para expresar instrucciones que una computadora puede ejecutar',
      'Para reemplazar el sistema operativo en todos los equipos',
      'Para fabricar componentes físicos automáticamente',
      'Para evitar el procesamiento de datos'
    ],
    0,
    'Los lenguajes de programación permiten comunicar instrucciones a una computadora mediante reglas definidas.'
  ),

  'Construcción y pruebas de un programa': crearLeccion(
    'Desarrollar un programa a partir de un diseño y comprobar su funcionamiento mediante pruebas.',
    `La construcción de un programa, también conocida como implementación, consiste en convertir el diseño de una solución en código ejecutable.

Durante esta etapa se escriben las instrucciones, se organizan los archivos, se integran los módulos y se conectan los componentes necesarios.

Después se realizan pruebas para comprobar que el programa cumpla los requisitos.

Entre las pruebas más comunes se encuentran:

- Pruebas unitarias: verifican componentes individuales.
- Pruebas de integración: comprueban la interacción entre componentes.
- Pruebas funcionales: verifican que las funciones respondan correctamente.
- Pruebas de aceptación: evalúan si la solución satisface las necesidades del usuario.

La construcción y las pruebas suelen desarrollarse de manera iterativa, corrigiendo los problemas encontrados.`,
    `En un sistema de calificaciones se puede probar el módulo que calcula promedios.

Primero se verifica que una función calcule correctamente una operación sencilla.

Después se integra con el formulario de registro de notas y finalmente se comprueba el funcionamiento de todo el sistema.`,
    'https://www.youtube.com/results?search_query=construccion+y+pruebas+de+software',
    '¿Qué comprueba una prueba de integración?',
    [
      'Que los diferentes componentes funcionen correctamente al interactuar',
      'Que únicamente exista un archivo',
      'Que el programa tenga un nombre corto',
      'Que no sea necesario realizar pruebas'
    ],
    0,
    'Las pruebas de integración verifican la comunicación y el funcionamiento conjunto de los componentes.'
  ),

  'Documentación y presentación del proyecto': crearLeccion(
    'Elaborar documentación técnica y presentar un proyecto de software de manera clara y organizada.',
    `La documentación de software reúne información que explica cómo funciona un sistema, cómo se utiliza y cómo puede mantenerse.

Es importante porque facilita la comprensión del proyecto y permite que otras personas puedan utilizarlo o continuar su desarrollo.

La documentación puede incluir:

- Descripción general del proyecto.
- Objetivos y requisitos.
- Tecnologías utilizadas.
- Instrucciones de instalación.
- Manual de usuario.
- Explicación de módulos.
- Resultados de pruebas.
- Limitaciones y mejoras futuras.

La presentación del proyecto consiste en comunicar el problema identificado, la solución desarrollada, sus funcionalidades y los resultados obtenidos.

Una exposición efectiva utiliza información organizada, demostraciones y ejemplos.`,
    `Proyecto: aplicación para administrar una biblioteca.

La documentación puede contener:
- Nombre y objetivo de la aplicación.
- Descripción de sus funcionalidades.
- Requisitos para ejecutarla.
- Manual para registrar libros.
- Resultados de las pruebas.
- Conclusiones y recomendaciones.

Durante la presentación se demuestra cómo registrar y consultar un libro.`,
    'https://www.youtube.com/results?search_query=documentacion+tecnica+de+proyectos+de+software',
    '¿Cuál es el propósito principal de la documentación de software?',
    [
      'Explicar el funcionamiento, uso y mantenimiento del sistema',
      'Ocultar el funcionamiento del programa',
      'Reemplazar todas las pruebas',
      'Eliminar la necesidad de organizar el proyecto'
    ],
    0,
    'La documentación permite comprender, utilizar y mantener el software de manera organizada.'
  )

}
