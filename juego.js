let temas = [
    "Conceptos fundamentales",
    "Teoremas importantes",
    "Derivadas de funciones elementales",
    "Relación entre continuidad y derivabilidad",
    "Crecimiento y decrecimiento de funciones",
    "Aplicaciones de la derivada",
    "Funciones trigonométricas",
    "Funciones inversas",
    "Límites y continuidad",
    "Polinomios y raíces"
];

// Aquí está el conjunto completo de 50 preguntas
let todasLasPreguntas = [
    // 1
    {
        tema: "Relación entre continuidad y derivabilidad",
        tipo: "opcionMultiple",
        pregunta: "¿Es la función \\( f(x) = |x| \\) derivable en \\( x = 0 \\)?",
        opciones: [
            "Sí, porque es continua en \\( x = 0 \\).",
            "No, porque el límite de la derivada por la izquierda y por la derecha no coinciden en \\( x = 0 \\).",
            "Sí, porque la derivada en \\( x = 0 \\) es 0.",
            "No, porque la función no es continua en \\( x = 0 \\)."
        ],
        respuestaCorrecta: 1,
        explicacion: "La función \\( f(x) = |x| \\) no es derivable en \\( x = 0 \\) porque las derivadas laterales no coinciden."
    },
    // 2
    {
        tema: "Relación entre continuidad y derivabilidad",
        tipo: "opcionMultiple",
        pregunta: "Si una función \\( f \\) es derivable en un punto \\( a \\), entonces:",
        opciones: [
            "\\( f \\) es discontinua en \\( a \\).",
            "\\( f \\) es continua en \\( a \\).",
            "La derivada \\( f'(a) \\) es infinita.",
            "\\( f \\) tiene un punto crítico en \\( a \\)."
        ],
        respuestaCorrecta: 1,
        explicacion: "La derivabilidad implica continuidad; si \\( f \\) es derivable en \\( a \\), entonces es continua en ese punto."
    },
    // 3
    {
        tema: "Conceptos fundamentales",
        tipo: "opcionMultiple",
        pregunta: "La derivada de una función \\( f \\) en un punto \\( a \\) se define como:",
        opciones: [
            "\\( \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h} \\)",
            "\\( \\dfrac{f(b) - f(a)}{b - a} \\) para cualquier \\( b \\neq a \\).",
            "\\( f(a+h) - f(a) \\) cuando \\( h \\) es pequeño.",
            "La pendiente de la recta secante entre \\( a \\) y \\( b \\)."
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada en \\( a \\) es el límite del cociente incremental cuando \\( h \\to 0 \\)."
    },
    // 4
    {
        tema: "Conceptos fundamentales",
        tipo: "opcionMultiple",
        pregunta: "Una función \\( f \\) es derivable en un punto \\( a \\) si:",
        opciones: [
            "Existe \\( f'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h} \\).",
            "Existe \\( f(a) \\).",
            "\\( f \\) es continua en \\( a \\).",
            "\\( f \\) es derivable en todos los puntos cercanos a \\( a \\)."
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivabilidad en \\( a \\) requiere que el límite del cociente incremental exista en ese punto."
    },
    // 5
    {
        tema: "Conceptos fundamentales",
        tipo: "opcionMultiple",
        pregunta: "Si \\( f \\) es derivable en \\( a \\) y \\( g \\) es derivable en \\( f(a) \\), entonces la derivada de la función compuesta \\( (g \\circ f)(x) \\) en \\( x = a \\) es:",
        opciones: [
            "\\( g'(a) f'(a) \\)",
            "\\( f'(a) g'(f(a)) \\)",
            "\\( f'(a) g'(a) \\)",
            "\\( g'(f(a)) \\)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La regla de la cadena establece que \\( (g \\circ f)'(a) = f'(a) g'(f(a)) \\)."
    },
    // 6
    {
        tema: "Derivadas de funciones elementales",
        tipo: "opcionMultiple",
        pregunta: "La derivada de la función \\( f(x) = x^n \\) con \\( n \\in \\mathbb{N} \\) es:",
        opciones: [
            "\\( f'(x) = n x^{n-1} \\)",
            "\\( f'(x) = x^n \\)",
            "\\( f'(x) = n x^{n} \\)",
            "\\( f'(x) = x^{n-1} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La regla de potencia establece que \\( \\dfrac{d}{dx} x^n = n x^{n-1} \\)."
    },
    // 7
    {
        tema: "Relación entre continuidad y derivabilidad",
        tipo: "opcionMultiple",
        pregunta: "¿Toda función continua es derivable?",
        opciones: [
            "Sí, siempre.",
            "No, una función puede ser continua y no derivable en algún punto.",
            "Solo si la función es lineal.",
            "Solo si la función es constante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Existen funciones continuas que no son derivables en ciertos puntos, como \\( f(x) = |x| \\) en \\( x = 0 \\)."
    },
    // 8
    {
        tema: "Derivadas de funciones elementales",
        tipo: "opcionMultiple",
        pregunta: "¿Cuál es la derivada de \\( f(x) = |x| \\) para \\( x > 0 \\)?",
        opciones: [
            "\\( f'(x) = -1 \\)",
            "\\( f'(x) = 1 \\)",
            "\\( f'(x) = 0 \\)",
            "No existe la derivada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para \\( x > 0 \\), \\( |x| = x \\), entonces \\( f'(x) = 1 \\)."
    },
    // 9
    {
        tema: "Teoremas importantes",
        tipo: "opcionMultiple",
        pregunta: "El Teorema de Rolle afirma que si \\( f \\) es continua en \\([a,b]\\), derivable en \\((a,b)\\) y \\( f(a) = f(b) \\), entonces:",
        opciones: [
            "\\( f \\) es constante en \\([a,b]\\).",
            "Existe \\( c \\in (a,b) \\) tal que \\( f'(c) = 0 \\).",
            "\\( f \\) tiene un máximo en \\( a \\).",
            "\\( f \\) tiene un mínimo en \\( b \\)."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Teorema de Rolle garantiza la existencia de un punto donde la derivada es cero."
    },
    // 10
    {
        tema: "Teoremas importantes",
        tipo: "opcionMultiple",
        pregunta: "El Teorema del Valor Medio establece que si \\( f \\) es continua en \\([a,b]\\) y derivable en \\((a,b)\\), entonces existe \\( c \in (a,b) \\) tal que:",
        opciones: [
            "\\( f'(c) = \\dfrac{f(b) - f(a)}{b - a} \\)",
            "\\( f(c) = \\dfrac{f(b) + f(a)}{2} \\)",
            "\\( f'(c) = 0 \\)",
            "\\( f(c) = f(a) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Teorema del Valor Medio relaciona la derivada con la tasa de cambio promedio."
    },
    // 11
    {
        tema: "Teoremas importantes",
        tipo: "opcionMultiple",
        pregunta: "Si \\( f \\) es derivable en un intervalo y \\( f'(x) = 0 \\) para todo \\( x \\) en el intervalo, entonces:",
        opciones: [
            "\\( f \\) es constante en el intervalo.",
            "\\( f \\) es creciente en el intervalo.",
            "\\( f \\) es decreciente en el intervalo.",
            "No se puede concluir nada."
        ],
        respuestaCorrecta: 0,
        explicacion: "Si la derivada es cero en todo el intervalo, la función es constante allí."
    },
    // 12
    {
        tema: "Crecimiento y decrecimiento de funciones",
        tipo: "opcionMultiple",
        pregunta: "Si \\( f \\) es derivable en un intervalo y \\( f'(x) > 0 \\) para todo \\( x \\) en el intervalo, entonces:",
        opciones: [
            "\\( f \\) es decreciente.",
            "\\( f \\) es constante.",
            "\\( f \\) es estrictamente creciente.",
            "\\( f \\) tiene un máximo en el intervalo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Una derivada positiva implica que la función es estrictamente creciente en el intervalo."
    },
    // 13
    {
        tema: "Derivadas de funciones elementales",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\sen(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\cos(x) \\)",
            "\\( f'(x) = -\\cos(x) \\)",
            "\\( f'(x) = \\sen(x) \\)",
            "\\( f'(x) = -\\sen(x) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada del seno es el coseno: \\( \\dfrac{d}{dx} \\sen(x) = \\cos(x) \\)."
    },
    // 14
    {
        tema: "Derivadas de funciones elementales",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\cos(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\sen(x) \\)",
            "\\( f'(x) = -\\sen(x) \\)",
            "\\( f'(x) = \\cos(x) \\)",
            "\\( f'(x) = -\\cos(x) \\)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La derivada del coseno es menos seno: \\( \\dfrac{d}{dx} \\cos(x) = -\\sen(x) \\)."
    },
    // 15
    {
        tema: "Derivadas de funciones elementales",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\arcsen(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\dfrac{1}{\\sqrt{1 - x^2}} \\)",
            "\\( f'(x) = \\dfrac{1}{1 + x^2} \\)",
            "\\( f'(x) = -\\dfrac{1}{\\sqrt{1 - x^2}} \\)",
            "\\( f'(x) = \\sqrt{1 - x^2} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\arcsen(x) \\) es \\( \\dfrac{1}{\\sqrt{1 - x^2}} \\)."
    },
    // 16
    {
        tema: "Conceptos fundamentales",
        tipo: "opcionMultiple",
        pregunta: "La función \\( f(t) = t \\) definida en \\( [0,1) \\) es acotada pero:",
        opciones: [
            "No alcanza su máximo en el intervalo.",
            "Alcanza su máximo en \\( t = 1 \\).",
            "Alcanza su máximo en \\( t = 0 \\).",
            "Alcanza su máximo en \\( t = \\dfrac{1}{2} \\)."
        ],
        respuestaCorrecta: 0,
        explicacion: "Como el intervalo es \\( [0,1) \\), el valor 1 no está incluido y, por lo tanto, no alcanza su máximo."
    },
    // 17
    {
        tema: "Conceptos fundamentales",
        tipo: "opcionMultiple",
        pregunta: "Si existe \\( \\lim_{b \\to a} \\dfrac{f(b) - f(a)}{b - a} \\), entonces:",
        opciones: [
            "\\( f \\) es continua en \\( a \\).",
            "\\( f \\) es derivable en \\( a \\) y la derivada es este límite.",
            "\\( f \\) es discontinua en \\( a \\).",
            "La función no es derivable en \\( a \\)."
        ],
        respuestaCorrecta: 1,
        explicacion: "La existencia de este límite implica que \\( f \\) es derivable en \\( a \\)."
    },
    // 18
    {
        tema: "Teoremas importantes",
        tipo: "opcionMultiple",
        pregunta: "Si \\( f \\) es derivable en un intervalo y \\( f'(x) = 0 \\) en todo el intervalo, entonces:",
        opciones: [
            "\\( f \\) es lineal.",
            "\\( f \\) es constante.",
            "\\( f \\) es cuadrática.",
            "No se puede concluir nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Una derivada cero en todo el intervalo implica que \\( f \\) es constante allí."
    },
    // 19
    {
        tema: "Crecimiento y decrecimiento de funciones",
        tipo: "opcionMultiple",
        pregunta: "Una función \\( f \\) es estrictamente creciente en un intervalo \\( A \\) si:",
        opciones: [
            "\\( f(x) \\geq f(y) \\) para todo \\( x < y \\) en \\( A \\).",
            "\\( f(x) \\leq f(y) \\) para todo \\( x < y \\) en \\( A \\).",
            "\\( f(x) > f(y) \\) para todo \\( x < y \\) en \\( A \\).",
            "\\( f(x) < f(y) \\) para todo \\( x < y \\) en \\( A \\)."
        ],
        respuestaCorrecta: 3,
        explicacion: "Una función es estrictamente creciente si \\( x < y \\) implica \\( f(x) < f(y) \\)."
    },
    // 20
    {
        tema: "Derivadas de funciones elementales",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\ln(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\dfrac{1}{x} \\)",
            "\\( f'(x) = \\ln(x) \\)",
            "\\( f'(x) = x \\)",
            "\\( f'(x) = \\dfrac{1}{x^2} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada del logaritmo natural es \\( \\dfrac{d}{dx} \\ln(x) = \\dfrac{1}{x} \\)."
    },
    // 21
    {
        tema: "Funciones inversas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\arccos(x) \\) es:",
        opciones: [
            "\\( f'(x) = -\\dfrac{1}{\\sqrt{1 - x^2}} \\)",
            "\\( f'(x) = \\dfrac{1}{\\sqrt{1 - x^2}} \\)",
            "\\( f'(x) = -\\dfrac{1}{1 + x^2} \\)",
            "\\( f'(x) = \\dfrac{1}{1 + x^2} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\arccos(x) \\) es \\( f'(x) = -\\dfrac{1}{\\sqrt{1 - x^2}} \\)."
    },
    // 22
    {
        tema: "Funciones trigonométricas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\tan(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\sec^2(x) \\)",
            "\\( f'(x) = \\tan^2(x) \\)",
            "\\( f'(x) = \\cos^2(x) \\)",
            "\\( f'(x) = -\\sec^2(x) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\tan(x) \\) es \\( f'(x) = \\sec^2(x) \\)."
    },
    // 23
    {
        tema: "Funciones trigonométricas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\cot(x) \\) es:",
        opciones: [
            "\\( f'(x) = -\\csc^2(x) \\)",
            "\\( f'(x) = \\csc^2(x) \\)",
            "\\( f'(x) = -\\cot^2(x) \\)",
            "\\( f'(x) = \\sec^2(x) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\cot(x) \\) es \\( f'(x) = -\\csc^2(x) \\)."
    },
    // 24
    {
        tema: "Funciones inversas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\arctan(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\dfrac{1}{1 + x^2} \\)",
            "\\( f'(x) = -\\dfrac{1}{1 + x^2} \\)",
            "\\( f'(x) = \\dfrac{1}{\\sqrt{1 - x^2}} \\)",
            "\\( f'(x) = -\\dfrac{1}{\\sqrt{1 - x^2}} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\arctan(x) \\) es \\( f'(x) = \\dfrac{1}{1 + x^2} \\)."
    },
    // 25
    {
        tema: "Límites y continuidad",
        tipo: "opcionMultiple",
        pregunta: "Si una función tiene una discontinuidad en \\( x = a \\), entonces:",
        opciones: [
            "La función no es derivable en \\( x = a \\).",
            "La función es derivable en \\( x = a \\).",
            "La derivada existe pero es infinita en \\( x = a \\).",
            "La función es continua en \\( x = a \\)."
        ],
        respuestaCorrecta: 0,
        explicacion: "Una función no puede ser derivable en un punto de discontinuidad."
    },
    // 26
    {
        tema: "Aplicaciones de la derivada",
        tipo: "opcionMultiple",
        pregunta: "El criterio de la primera derivada se utiliza para:",
        opciones: [
            "Determinar intervalos de crecimiento y decrecimiento.",
            "Encontrar puntos de inflexión.",
            "Calcular límites indeterminados.",
            "Determinar concavidad de la función."
        ],
        respuestaCorrecta: 0,
        explicacion: "La primera derivada indica dónde la función crece o decrece."
    },
    // 27
    {
        tema: "Aplicaciones de la derivada",
        tipo: "opcionMultiple",
        pregunta: "El criterio de la segunda derivada se utiliza para:",
        opciones: [
            "Determinar concavidad y puntos de inflexión.",
            "Encontrar máximos y mínimos absolutos.",
            "Calcular límites indeterminados.",
            "Determinar continuidad de la función."
        ],
        respuestaCorrecta: 0,
        explicacion: "La segunda derivada nos indica la concavidad y posibles puntos de inflexión."
    },
    // 28
    {
        tema: "Polinomios y raíces",
        tipo: "opcionMultiple",
        pregunta: "Un polinomio de grado \\( n \\) tiene como máximo:",
        opciones: [
            "\\( n \\) raíces reales.",
            "\\( n + 1 \\) raíces reales.",
            "\\( n - 1 \\) raíces reales.",
            "Depende de los coeficientes."
        ],
        respuestaCorrecta: 0,
        explicacion: "Un polinomio de grado \\( n \\) tiene a lo sumo \\( n \\) raíces reales."
    },
    // 29
    {
        tema: "Polinomios y raíces",
        tipo: "opcionMultiple",
        pregunta: "Según el Teorema de Rolle, entre dos raíces reales consecutivas de un polinomio derivable existe:",
        opciones: [
            "Al menos una raíz real de su derivada.",
            "Ninguna raíz real de su derivada.",
            "Al menos dos raíces reales de su derivada.",
            "Un máximo o mínimo absoluto."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Teorema de Rolle implica que la derivada se anula entre dos raíces consecutivas."
    },
    // 30
    {
        tema: "Funciones inversas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\ln|x| \\) es:",
        opciones: [
            "\\( f'(x) = \\dfrac{1}{x} \\)",
            "\\( f'(x) = -\\dfrac{1}{x} \\)",
            "\\( f'(x) = \\dfrac{1}{|x|} \\)",
            "\\( f'(x) = -\\dfrac{1}{|x|} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\ln|x| \\) es \\( \\dfrac{1}{x} \\) para \\( x \\neq 0 \\)."
    },
    // 31
    {
        tema: "Crecimiento y decrecimiento de funciones",
        tipo: "opcionMultiple",
        pregunta: "Si \\( f'(x) < 0 \\) para todo \\( x \\) en un intervalo, entonces:",
        opciones: [
            "\\( f \\) es creciente.",
            "\\( f \\) es decreciente.",
            "\\( f \\) tiene un máximo en el intervalo.",
            "\\( f \\) es constante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Una derivada negativa implica que la función es decreciente en el intervalo."
    },
    // 32
    {
        tema: "Aplicaciones de la derivada",
        tipo: "opcionMultiple",
        pregunta: "Un punto de inflexión es aquel en el que:",
        opciones: [
            "La concavidad de la función cambia.",
            "La función alcanza un máximo absoluto.",
            "La derivada primera es cero.",
            "La función es discontinua."
        ],
        respuestaCorrecta: 0,
        explicacion: "En un punto de inflexión, la función cambia de concavidad."
    },
    // 33
    {
        tema: "Funciones trigonométricas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\sec(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\sec(x) \\tan(x) \\)",
            "\\( f'(x) = \\csc(x) \\cot(x) \\)",
            "\\( f'(x) = -\\sec(x) \\tan(x) \\)",
            "\\( f'(x) = \\tan(x) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\sec(x) \\) es \\( \\sec(x) \\tan(x) \\)."
    },
    // 34
    {
        tema: "Funciones trigonométricas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\csc(x) \\) es:",
        opciones: [
            "\\( f'(x) = -\\csc(x) \\cot(x) \\)",
            "\\( f'(x) = \\csc(x) \\cot(x) \\)",
            "\\( f'(x) = -\\sec(x) \\tan(x) \\)",
            "\\( f'(x) = \\tan(x) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( \\csc(x) \\) es \\( -\\csc(x) \\cot(x) \\)."
    },
    // 35
    {
        tema: "Aplicaciones de la derivada",
        tipo: "opcionMultiple",
        pregunta: "Para encontrar los máximos y mínimos locales de una función, buscamos los puntos donde:",
        opciones: [
            "La derivada primera es cero o no existe.",
            "La función es discontinua.",
            "La segunda derivada es cero.",
            "La función alcanza su valor máximo absoluto."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los extremos locales ocurren en puntos críticos donde la derivada primera es cero o no existe."
    },
    // 36
    {
        tema: "Funciones inversas",
        tipo: "opcionMultiple",
        pregunta: "Si \\( y = e^{x} \\), entonces \\( x = \\ln(y) \\). La derivada de \\( y \\) respecto a \\( x \\) es:",
        opciones: [
            "\\( \\dfrac{dy}{dx} = e^{x} \\)",
            "\\( \\dfrac{dy}{dx} = \\dfrac{1}{y} \\)",
            "\\( \\dfrac{dy}{dx} = y \\)",
            "\\( \\dfrac{dy}{dx} = \\ln(y) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de \\( e^{x} \\) es \\( e^{x} \\)."
    },
    // 37
    {
        tema: "Límites y continuidad",
        tipo: "opcionMultiple",
        pregunta: "El límite \\( \\lim_{x \\to 0} \\dfrac{\\sen(x)}{x} \\) es:",
        opciones: [
            "1",
            "0",
            "Infinito",
            "No existe"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este es un límite notable que vale 1."
    },
    // 38
    {
        tema: "Límites y continuidad",
        tipo: "opcionMultiple",
        pregunta: "El límite \\( \\lim_{x \\to \\infty} \\dfrac{1}{x} \\) es:",
        opciones: [
            "0",
            "Infinito",
            "1",
            "No existe"
        ],
        respuestaCorrecta: 0,
        explicacion: "A medida que \\( x \\to \\infty \\), \\( \\dfrac{1}{x} \\to 0 \\)."
    },
    // 39
    {
        tema: "Derivadas de funciones elementales",
        tipo: "opcionMultiple",
        pregunta: "La derivada de una constante es:",
        opciones: [
            "0",
            "1",
            "La constante misma",
            "No existe"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada de una constante siempre es cero."
    },
    // 40
    {
        tema: "Aplicaciones de la derivada",
        tipo: "opcionMultiple",
        pregunta: "Si la segunda derivada de una función es positiva en un intervalo, entonces la función es:",
        opciones: [
            "Cóncava hacia arriba en ese intervalo.",
            "Cóncava hacia abajo en ese intervalo.",
            "Lineal en ese intervalo.",
            "Constante en ese intervalo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Una segunda derivada positiva indica concavidad hacia arriba."
    },
    // 41
    {
        tema: "Crecimiento y decrecimiento de funciones",
        tipo: "opcionMultiple",
        pregunta: "Si una función es convexa en un intervalo, entonces su derivada primera es:",
        opciones: [
            "Creciente en ese intervalo.",
            "Decreciente en ese intervalo.",
            "Constante en ese intervalo.",
            "Negativa en ese intervalo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Convexidad implica que la derivada primera es creciente."
    },
    // 42
    {
        tema: "Funciones inversas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = e^{kx} \\), donde \\( k \\) es una constante, es:",
        opciones: [
            "\\( f'(x) = k e^{k x} \\)",
            "\\( f'(x) = e^{k x} \\)",
            "\\( f'(x) = k x e^{k x} \\)",
            "\\( f'(x) = e^{k} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada es \\( f'(x) = k e^{k x} \\)."
    },
    // 43
    {
        tema: "Aplicaciones de la derivada",
        tipo: "opcionMultiple",
        pregunta: "El punto donde la segunda derivada cambia de signo es llamado:",
        opciones: [
            "Punto de inflexión.",
            "Máximo absoluto.",
            "Mínimo absoluto.",
            "Punto crítico."
        ],
        respuestaCorrecta: 0,
        explicacion: "Un cambio de signo en la segunda derivada indica un punto de inflexión."
    },
    // 44
    {
        tema: "Límites y continuidad",
        tipo: "opcionMultiple",
        pregunta: "El límite \\( \\lim_{x \\to 0} \\dfrac{e^{x} - 1}{x} \\) es:",
        opciones: [
            "1",
            "0",
            "Infinito",
            "No existe"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este límite es conocido y vale 1."
    },
    // 45
    {
        tema: "Funciones trigonométricas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\arcsen(x) \\) es igual a:",
        opciones: [
            "\\( \\dfrac{1}{\\sqrt{1 - x^2}} \\)",
            "\\( \\dfrac{1}{1 + x^2} \\)",
            "\\( -\\dfrac{1}{\\sqrt{1 - x^2}} \\)",
            "\\( \\sqrt{1 - x^2} \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "Es la derivada de \\( \\arcsen(x) \\)."
    },
    // 46
    {
        tema: "Relación entre continuidad y derivabilidad",
        tipo: "opcionMultiple",
        pregunta: "Si \\( f \\) no es continua en \\( x = a \\), entonces:",
        opciones: [
            "\\( f \\) no es derivable en \\( x = a \\).",
            "\\( f \\) es derivable en \\( x = a \\).",
            "La derivada de \\( f \\) en \\( x = a \\) es infinita.",
            "La derivada de \\( f \\) en \\( x = a \\) es cero."
        ],
        respuestaCorrecta: 0,
        explicacion: "La discontinuidad impide la derivabilidad en ese punto."
    },
    // 47
    {
        tema: "Aplicaciones de la derivada",
        tipo: "opcionMultiple",
        pregunta: "Para determinar si un punto crítico es máximo o mínimo, se utiliza:",
        opciones: [
            "El criterio de la segunda derivada.",
            "El teorema del valor medio.",
            "El criterio de la primera derivada.",
            "El teorema de Rolle."
        ],
        respuestaCorrecta: 0,
        explicacion: "La segunda derivada nos indica la naturaleza del punto crítico."
    },
    // 48
    {
        tema: "Funciones trigonométricas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\cosh(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\sinh(x) \\)",
            "\\( f'(x) = -\\sinh(x) \\)",
            "\\( f'(x) = \\cosh(x) \\)",
            "\\( f'(x) = -\\cosh(x) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada del coseno hiperbólico es el seno hiperbólico."
    },
    // 49
    {
        tema: "Funciones trigonométricas",
        tipo: "opcionMultiple",
        pregunta: "La derivada de \\( f(x) = \\sinh(x) \\) es:",
        opciones: [
            "\\( f'(x) = \\cosh(x) \\)",
            "\\( f'(x) = -\\cosh(x) \\)",
            "\\( f'(x) = \\sinh(x) \\)",
            "\\( f'(x) = -\\sinh(x) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La derivada del seno hiperbólico es el coseno hiperbólico."
    },
    // 50
    {
        tema: "Límites y continuidad",
        tipo: "opcionMultiple",
        pregunta: "El límite \\( \\lim_{x \\to 0} \\dfrac{\\ln(1 + x)}{x} \\) es:",
        opciones: [
            "1",
            "0",
            "Infinito",
            "No existe"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este límite notable vale 1."
    }
];

// Función para mezclar
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let preguntas; // Este arreglo contendrá las 20 preguntas seleccionadas aleatoriamente
let indicePregunta = 0;
let puntaje = 0;

function iniciarJuego() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
    indicePregunta = 0;
    puntaje = 0;

    
    preguntas = [...todasLasPreguntas];
    mezclarArray(preguntas);
    preguntas = preguntas.slice(0, 20);

    mostrarPregunta();
}

function mostrarPregunta() {
    let preguntaActual = preguntas[indicePregunta];
    document.getElementById('tituloTema').innerText = preguntaActual.tema;
    document.getElementById('contenidoPregunta').innerHTML = '';

    if (preguntaActual.tipo === "opcionMultiple") {
        let opcionesConIndices = preguntaActual.opciones.map((opcion, index) => ({ opcion, index }));
        mezclarArray(opcionesConIndices); // Mezclar las opciones de respuesta

        let htmlOpciones = `<p>${preguntaActual.pregunta}</p>`;
        opcionesConIndices.forEach((opcionObj) => {
            htmlOpciones += `
                <label class="opcion">
                    <input type="radio" name="opcion" value="${opcionObj.index}">
                    ${opcionObj.opcion}
                </label>
            `;
        });
        htmlOpciones += `<button onclick="verificarRespuesta()">Enviar Respuesta</button>`;
        document.getElementById('contenidoPregunta').innerHTML = htmlOpciones;
    }

    document.getElementById('retroalimentacion').innerText = '';
    document.getElementById('btnSiguiente').style.display = 'none';
    MathJax.typesetPromise();
}

function verificarRespuesta() {
    let preguntaActual = preguntas[indicePregunta];
    let opciones = document.getElementsByName('opcion');
    let seleccion = null;

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccion = parseInt(opciones[i].value);
            break;
        }
    }

    if (seleccion === null) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    // Verificar si la respuesta seleccionada es la correcta
    if (seleccion === preguntaActual.respuestaCorrecta) {
        document.getElementById('retroalimentacion').innerText = "¡Correcto!";
        puntaje++;
    } else {
        document.getElementById('retroalimentacion').innerHTML = `Incorrecto. ${preguntaActual.explicacion}`;
    }

    document.getElementById('btnSiguiente').style.display = 'inline-block';
    MathJax.typesetPromise();
}

function siguientePregunta() {
    indicePregunta++;
    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        if (puntaje > 15) {
            mostrarPreguntaBonus();
        } else {
            finalizarJuego();
        }
    }
}

function mostrarPreguntaBonus() {
    let preguntaBonus = {
        tema: "Pregunta Bonus",
        tipo: "opcionMultiple",
        pregunta: "Determina el dominio y rango de la función \\( f(x) = x(12 - 2x)^2 \\).",
        opciones: [
            "Dominio: \\( (-\\infty, \\infty) \\), Rango: \\( (-\\infty, \\infty) \\)",
            "Dominio: \\( [0,6] \\), Rango: \\( [0,128] \\)",
            "Dominio: \\( (-\\infty, 6] \\), Rango: \\( (-\\infty, 0] \\)",
            "Dominio: \\( [0, \\infty) \\), Rango: \\( [0, \\infty) \\)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La función es un polinomio, por lo que su dominio es \\( (-\\infty, \\infty) \\). Al analizar el comportamiento de la función, vemos que su rango también es \\( (-\\infty, \\infty) \\)."
    };

    preguntas.push(preguntaBonus);
    indicePregunta = preguntas.length - 1;
    mostrarPregunta();
}

function finalizarJuego() {
    document.getElementById('juego').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('puntajeFinal').innerText = `Obtuviste ${puntaje} de ${preguntas.length} respuestas correctas.`;
}

function reiniciarJuego() {
    document.getElementById('resultado').style.display = 'none';
    iniciarJuego();
}

function mostrarInstrucciones() {
    alert("Instrucciones:\n- Responde 20 preguntas seleccionadas aleatoriamente de un total de 50.\n- Las opciones de respuesta se ordenan aleatoriamente cada vez.\n- Si respondes más de 15 preguntas correctamente, obtendrás una pregunta bonus.\n- Obtén retroalimentación inmediata después de cada respuesta.\n- Al final, revisa tu puntaje y accede a recursos adicionales.");
}

function mostrarRecursos() {
    window.open('https://sites.google.com/pcpuma.acatlan.unam.mx/proyecto-final/p%C3%A1gina-principal?authuser=0', '_blank');
}